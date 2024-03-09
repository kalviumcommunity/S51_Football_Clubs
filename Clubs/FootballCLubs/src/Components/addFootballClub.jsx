import  { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'
import WelcomeUser from './SubComponent/WelcomeUser';
function AddFootballClub() {
    const navigate = useNavigate();
    const [ClubId,setSerialNumber]=useState("")
    const [clubName,setClubName]=useState("")
    const [ranking,setRankings]=useState("")
    const [coach,setCoach]=useState("")
    const [matchsPlayed,setMatchsPlayed]=useState("")
    const [won,setWon]=useState("")
    const [losses,setLosses]=useState("")
    const [goals,setGoals]=useState("")
    const [created_by,setCreatedBy]=useState("")
    function getCookie(name) {
      let cookieArray = document.cookie.split('; ');
      let cookie = cookieArray.find((row) => row.startsWith(name + '='));
      return cookie ? cookie.split('=')[1] : null;
  }
  const token = getCookie('token')
    const submit=(e)=>{
      e.preventDefault();
        axios.post('https://football-clubs.onrender.com/addfootballclub',{
          ClubId: ClubId,
          ClubName: clubName,
          Ranking: ranking,
          Coach: coach,
          MatchsPlayed: matchsPlayed,
          Won: won,
          Losses: losses,
          Goals: goals,
        created_by:created_by},{headers:{authorization:`Bearer ${token}`}})
     .then((response) =>{ console.log(response.data);
    navigate('/')})
    .catch((error) => console.error(error))
    }

  return (
    <>
        <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
              <Link to='/'><h1>Football Clubs</h1></Link>
            </div>
            <div id='Navbar-right'>
              <WelcomeUser/>
            </div>
        </div>
        <div id='Body-content'>
          <div id='form'>
          <form onSubmit={submit}>
            <div className='space-around'><label>Club Id : </label>
            <input type="text" onChange={(e)=>setSerialNumber(e.target.value)}/></div>
            <div className='space-around'><label>Club Name : </label>
            <input type="text" onChange={(e)=>setClubName(e.target.value)}/></div>
            <div className='space-around'><label>Ranking : </label>
            <input type="text" onChange={(e)=>{setRankings(e.target.value)}}/></div>
            <div className='space-around'><label>Coach : </label>
            <input type="text" onChange={(e)=>setCoach(e.target.value)}/></div>
            <div className='space-around'><label>Matchs Played : </label>
            <input type="text" onChange={(e)=>setMatchsPlayed(e.target.value)}/></div>
            <div className='space-around'><label>Won : </label>
            <input type="text" onChange={(e)=>setWon(e.target.value)}/></div>
            <div className='space-around'><label>Losses : </label>
            <input type="text" onChange={(e)=>setLosses(e.target.value)}/></div>
            <div className='space-around'><label>Goals : </label>
            <input type="text" onChange={(e)=>setGoals(e.target.value)}/></div>
            <div className='space-around'><label>Created By : </label>
            <select name="createdBy" id="cCreatedBy" onChange={(e)=>{setCreatedBy(e.target.value)}}>
              <option value="All">All</option>
              <option value="Anna Connel">Anna Connel</option>
              <option value="John Houlding">John Houlding</option>
              <option value="Gus Mears">Gus Mears</option>
              <option value="Jack Hughes">Jack Hughes</option>
            </select></div>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default AddFootballClub