import React from "react";
import { Route,Routes } from "react-router-dom";
import Courses from "../pages/Course";
import Homepage from "../pages/Homepage";
import Login from "../pages/login";
import Signup_page from "../pages/signup";
import AboutUs from "./AboutUsAtHomepage";

const App=()=>
{
    return( 
    <>
    <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path="/sign_up" element={<Signup_page/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/aboutus" element={<AboutUs/>}/>
    </Routes>

    </>
    );
}

export default App;