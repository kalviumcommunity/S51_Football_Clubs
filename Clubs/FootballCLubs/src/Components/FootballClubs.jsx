import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios";
import WelcomeUser from "./SubComponent/WelcomeUser";


function ListOfFootballClubs() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchFootballClubs = async () => {
      try {
        const response = await axios.get('https://football-clubs.onrender.com/getallfootballclub');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFootballClubs();
  }, []);
  const deleteData = (id) =>{
    axios.delete(`https://football-clubs.onrender.com/deletefootballclub/${id}`)
   .then((response) =>{ console.log(response.data);
    window.location.reload();})
    .catch((error) => console.error(error))
  }

  return (
    <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
                <h1>Football Clubs</h1>
            </div>
            <div id='Navbar-right'>
                <WelcomeUser/>
            </div>
        </div>
        <div id='Body-content'>
          <div id="add">
            <Link to='/add'><button>Add</button></Link>
          </div>
        <table>
          <thead>
            <tr>
              <th>SerialNumber</th>
              <th>ClubName</th>
              <th>Ranking</th>
              <th>Coach</th>
              <th>MatchsPlayed</th>
              <th>Won</th>
              <th>Losses</th>
              <th>Goals</th>
              <th>Update </th>
              <th>Delete </th>
              </tr>
            </thead>
            <tbody>
            {data.map((item,index)=>{
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
                </tr>
              )
            })}
            </tbody>
        </table>
        </div>

      
    </div>
  )
}

export default ListOfFootballClubs