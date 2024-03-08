import {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
    const [userName,setUserName] = useState(getCookie('username'))
    const [password,setPassword] = useState(getCookie('password'))
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
        const submit=(e)=>{
            e.preventDefault();
            axios.post('https://football-clubs.onrender.com/signup',{
                name:userName,
                password:password
            }).then((response)=>{console.log(response);
                setCookie('token', response.data.accessToken,365)
                setCookie('username',userName,365);
        navigate('/')}).catch((error)=>{console.error(error)});

        }
        return(
        <>
        <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
            <Link to='/'><h1>Football Clubs</h1></Link>
            </div>
        </div>
        <div id='Body-content'>
          <div id='lform'>
          <form onSubmit={submit}>
            <div className='space-around'><label>User Name : </label>
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/></div>
            <div className='space-around'><label>Password : </label>
            <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} /></div>
            <button type="submit">Sign Up</button>
        </form>
        <Link to='/login'>Login</Link>
            </div>
        </div>

      
    </div>
        </>
        )
    
}

export default SignupPage