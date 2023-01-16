import React from "react";
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../Assets/navbar/gr-stocks-9cZwjgjBGAM-unsplash.jpg';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const StudentNavbar =()=>
{

    const history = useNavigate();

    async function logOut() {
        const response = await fetch('/logout');

        window.alert("Logout Successfully")
        history("/")
      }

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{opacity:'.9'}} >
  <a className="navbar-brand" href="/#" style={{fontSize:'30px',color:'white',fontWeight:'bold',paddingLeft:'20px'}}> <img src={logo} className='img-fluid' alt='' style={{width:'150px',zIndex:'-1'}}></img> <span>Al-Hadi</span> </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse flex-column ml-lg-0 ml-3 "  id="navbarCollapse">
            <ul className="navbar-nav ">
                <li className="nav-item active">
                    <a className="nav-link text-white" href="Profile">Profile</a>
                </li>
                <li className="nav-item">
                <NavLink to='courses' className='nav-link text-white'>
                   Course
                    </NavLink>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-white" href="Profile">Course</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="Profile">Setting</a>
                </li>
            </ul>
            <ul className="navbar-nav flex-row mb-2">
            <li className="nav-item">
                    <a className="nav-link py-1 pr-3" href="/#"><i class="bi bi-facebook" style={{color:'white'}}></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-1 pr-3" href="/#"><i class="bi bi-instagram" style={{color:'white'}}></i></a>
                </li>
            <li className="nav-item">
                    <a className="nav-link py-1 pr-3" href="/#"><i class="bi bi-twitter" style={{color:'white'}}></i></a>
                </li>
                
              
                <li className="nav-item">
                <button type="button" class="btn btn-custom rounded-0 text-white" style={{backgroundColor:'#8B2009',marginLeft:'10px'}} onClick={logOut}>Sign Out</button>
                </li>
            </ul>
        </div>
</nav>
</>
    )
}

export default StudentNavbar;