import data from './data.json'
function ListOfFootballClubs() {
  return (
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
        <table>
            <tr>
              <th>SerialNumber</th>
              <th>ClubName</th>
              <th>Ranking</th>
              <th>Coach</th>
              <th>MatchsPlayed</th>
              <th>Won</th>
              <th>Losses</th>
              <th>Goals</th>
            </tr>
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
                </tr>
              )
            })}
        </table>
        </div>

      
    </div>
  )
}

export default ListOfFootballClubs