import  { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
function UpdateFootballClub() {
  const location = useLocation()
    const navigate = useNavigate();
    const data = location.state;
    console.log(location)
    console.log(data)
    const [ClubId,setSerialNumber]=useState(data.ClubId)
    const [clubName,setClubName]=useState(data.ClubName)
    const [ranking,setRankings]=useState(data.Rankings)
    const [coach,setCoach]=useState(data.Coach)
    const [matchsPlayed,setMatchsPlayed]=useState(data.MatchsPlayed)
    const [won,setWon]=useState(data.won)
    const [losses,setLosses]=useState(data.losses)
    const [goals,setGoals]=useState(data.Goals)
    const submit=(e)=>{
      e.preventDefault();
        axios.patch(`https://football-clubs.onrender.com/updatefootballclub/${ClubId}`,{
          ClubId: ClubId,
          ClubName: clubName,
          Ranking: ranking,
          Coach: coach,
          MatchsPlayed: matchsPlayed,
          Won: won,
          Losses: losses,
          Goals: goals})
     .then((response) =>{ console.log(response.data);
    navigate('/')})
    .catch((error) => console.error(error))
    }

  return (
    <>
        <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
                <h1>Football Clubs</h1>
            </div>
            <div id='Navbar-right'>
                <button id='Navbar-button'>Sign Up</button>
            </div>
        </div>
        <div id='Body-content'>
          <div id='form'>
          <form onSubmit={submit}>
            <div className='space-around'><label>Club Id : </label>
            <input type="text" value={data.ClubId}  onChange={(e)=>setSerialNumber(e.target.value)}/></div>
            <div className='space-around'><label>Club Name : </label>
            <input type="text" defaultValue={data.ClubName}  onChange={(e)=>setClubName(e.target.value)}/></div>
            <div className='space-around'><label>Ranking : </label>
            <input type="text" defaultValue={data.Ranking}  onChange={(e)=>{setRankings(e.target.value)
            console.log(ranking)}}/></div>
            <div className='space-around'><label>Coach : </label>
            <input type="text" defaultValue={data.Coach}  onChange={(e)=>setCoach(e.target.value)}/></div>
            <div className='space-around'><label>Matchs Played : </label>
            <input type="text" defaultValue={data.MatchsPlayed}  onChange={(e)=>setMatchsPlayed(e.target.value)}/></div>
            <div className='space-around'><label>Won : </label>
            <input type="text" defaultValue={data.Won}  onChange={(e)=>setWon(e.target.value)}/></div>
            <div className='space-around'><label>Losses : </label>
            <input type="text" defaultValue={data.Losses}  onChange={(e)=>setLosses(e.target.value)}/></div>
            <div className='space-around'><label>Goals : </label>
            <input type="text" defaultValue={data.Goals}  onChange={(e)=>setGoals(e.target.value)}/></div>
            <button type="submit">Update</button>
            </form>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default UpdateFootballClub