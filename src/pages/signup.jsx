import React from "react";
import Sign_up from "../components/Sign_up";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const signup_page =()=>
{
    return(
        <>
        <div className="container-fluid p-0">
        <div className="row g-0">
        <div className="col-12" style={{backgroundColor:'#EEEEEE'}}>
        {/*heading*/}
        <div className="row g-0">
        <div className="col-6 ps-5   pt-4" style={{backgroundColor:'#EEEEEE'}}>
       <h1 style={{color:'#8B2009',fontSize:'40px'}}>Al-Hadi</h1>
        </div>
        </div>
         {/*Sign Heading*/}
         <div className="row g-0">
        <div className="col-6 ps-5   pt-5" style={{backgroundColor:'#EEEEEE'}}>
       <h2>Sign-up</h2>
        </div>
        </div>
        {/*form*/}
        <div className="row g-0">
        <div className="col-6 ps-5   m-5" style={{backgroundColor:'white'}}>
       <Sign_up/>
        </div>
        </div>


        </div>
        </div>
        </div>

        </>

    );
}

export default signup_page;