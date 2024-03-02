import {Route, Routes} from "react-router-dom"
import AddFootballCLub from "./Components/addFootballClub";
import Home from "./Components/FootballClubs";
import UpdateFootballClub from "./Components/UpdateFootball";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddFootballCLub/>}></Route>
           < Route path='/update/:id' element={<UpdateFootballClub />}></Route>
        </Routes>

        </>
    )
}

export default AllRoutes;