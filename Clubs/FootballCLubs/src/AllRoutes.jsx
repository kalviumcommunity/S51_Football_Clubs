import {Route, Routes} from "react-router-dom"
import AddFootballCLub from "./Components/addFootballClub";
import Home from "./Components/FootballClubs";
import UpdateFootballClub from "./Components/UpdateFootball";
import LogInPage from "./Components/LoginInPage";
import LogOutPage from "./Components/LogOutPage";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddFootballCLub/>}></Route>
           < Route path='/update/:id' element={<UpdateFootballClub />}></Route>
           <Route path="/login"element={<LogInPage/>}></Route>
           <Route path="/logout" element={<LogOutPage/>}></Route>
        </Routes>

        </>
    )
}

export default AllRoutes;