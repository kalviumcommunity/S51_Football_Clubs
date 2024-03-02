import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
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
            <input type="text" onChange={(e)=>setSerialNumber(e.target.value)}/></div>
            <div className='space-around'><label>Club Name : </label>
            <input type="text" onChange={(e)=>setClubName(e.target.value)}/></div>
            <div className='space-around'><label>Ranking : </label>
            <input type="text" onChange={(e)=>{setRankings(e.target.value)
            console.log(ranking)}}/></div>
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
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default AddFootballClub