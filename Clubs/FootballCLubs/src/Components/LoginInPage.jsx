import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function LogInPage() {
    const navigate = useNavigate();
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }
    const [userName,setUserName] = useState(getCookie('username'))
    const setData=(e)=>{
        setUserName(e.target.value);
        console.log(e.target.value)
    }
    console.log(userName)
        const submit=(e)=>{
            e.preventDefault();
            console.log("t",userName)
            setCookie('username', userName,365);
            console.log("Test",getCookie('username'))
            navigate("/")
        }
        return(
        <>
        <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
                <h1>Football Clubs</h1>
            </div>
        </div>
        <div id='Body-content'>
          <div id='form'>
          <form onSubmit={submit}>
            <div className='space-around'><label>User Name : </label>
            <input type="text" onChange={setData}/></div>
            <button type="submit">Sign In</button>
        </form>
            </div>
        </div>

      
    </div>
        </>
        )
    
}

export default LogInPage