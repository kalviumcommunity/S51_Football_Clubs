import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios";
import WelcomeUser from "./SubComponent/WelcomeUser";


function ListOfFootballClubs() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
  const token = getCookie('token')
  const [data,setData] = useState([]);
  const [filter,setFilter] = useState("All")
  useEffect(() => {
    const fetchFootballClubs = async () => {
      try {
        const response = await axios.get('https://football-clubs.onrender.com/getallfootballclub',{headers:{authorization:`Bearer ${token}`}});
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFootballClubs();
  }, []);
  const filteredData = data.filter((item)=>{
      if(filter === "All"){
        return item
      }
      else if(item.created_by.includes(filter)){
        return item
      }
    })
  
  const deleteData = (id) =>{
    axios.delete(`https://football-clubs.onrender.com/deletefootballclub/${id}`,{headers:{authorization:`Bearer ${token}`}})
   .then((response) =>{ console.log(response.data);
    window.location.reload();})
    .catch((error) => console.error(error))
  }

  return (
    <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
                <Link to='/'><h1>Football Clubs</h1></Link>
            </div>
            <div id='Navbar-right'>
                <WelcomeUser/>
            </div>
        </div>
        {(data.length > 1) ?
        <div id='Body-content'>
          <div id="add">
          <div id="createdBy">
          <p> Created By :   </p> 
            <select name="createdBy" id="CreatedBy" onChange={(e)=>{setFilter(e.target.value)}}>
              <option value="All">All</option>
              <option value="Anna Connel">Anna Connel</option>
              <option value="John Houlding">John Houlding</option>
              <option value="Gus Mears">Gus Mears</option>
              <option value="Jack Hughes">Jack Hughes</option>
            </select>
          </div>
          
          
            <Link to='/add'><button>Add</button></Link>
          </div>
        <table>
          <thead>
            <tr>
              <th>Clud Id</th>
              <th>ClubName</th>
              <th>Ranking</th>
              <th>Coach</th>
              <th>MatchsPlayed</th>
              <th>Won</th>
              <th>Losses</th>
              <th>Goals</th>
              <th>Update </th>
              <th>Delete </th>
              <th>Created By</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item,index)=>{
              return (
                <tr key={index}>
                  <td>{item.ClubId}</td>
                  <td>{item.ClubName}</td>
                  <td>{item.Ranking}</td>
                  <td>{item.Coach}</td>
                  <td>{item.MatchsPlayed}</td>
                  <td>{item.Won}</td>
                  <td>{item.Losses}</td>
                  <td>{item.Goals}</td>
                  {/* <td>{item.GoalsConceded}</td>
                  <td>{item.CleanSheets}</td>
                  <td>{item.Shots}</td>
                  <td>{item.Shotsontarget}</td> */}
                  
                  <td><Link to={`/update/${item.ClubId}`} state={item}><button id="update">Update</button></Link></td>
                  <td><button onClick={()=>deleteData(item.ClubId)} id="delete">Delete</button></td>
                  <td>{item.created_by}</td>
                </tr>
              )
            })}
            </tbody>
        </table>
        </div>
        :<div id='Body-content'>
          <div id="login">
          <h1>Please Login To Continue</h1>
          <Link to="/login"><button id='Navbar-button' style={{backgroundColor : 'rgb(34, 255, 0)',height:'10vh',width:'19vw',fontSize:'30px',textAlign:'center',marginBottom:'20px'}}>Login</button></Link>
          </div>
        </div>
}
      
    </div>
  )
}

export default ListOfFootballClubs