import {Link} from 'react-router-dom'

function WelcomeUser() {
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    if(getCookie('username')!=undefined) {return(
        <>
        <h3>Welcome {getCookie('username')}</h3>
        <Link to="/logout"><button id='Navbar-button' style={{backgroundColor : 'rgb(255, 0, 0)'}}>Logout</button></Link>
        </>)}
    
      else{return(
      <Link to="/login"><button id='Navbar-button' style={{backgroundColor : 'rgb(34, 255, 0)'}}>Login</button></Link>)}}



export default WelcomeUser