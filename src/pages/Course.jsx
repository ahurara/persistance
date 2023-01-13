import React from "react";
import Navbar from "../components/Navbar";
import '../cardsdata';
import cardsData from "../cardsdata";
import Cards from "../components/Cards";
import Footer from "../components/Footer";


const Courses=()=>
{

    const containerStyle={
        padding:"0px",
        margin:"auto",
    };

    return(
        <>
        <div className="container-fluid no-gutters" style={containerStyle}>
        <div className="row g-0" style={{width:'100%'}}>
        <div className="col-12">
         {/*navbar */}
         <div className="row g-0 " style={{backgroundColor:'#60200A'}}>
        <div className="col-12">
            <Navbar/>
        </div>
        </div>
        {/*header */}
        <div className="row g-0 " style={{backgroundColor:'#60200A'}}>
        <div className="col-12">
           <h1 className="text-white m-lg-5   text-center fw-bold" style={{paddingTop:'200px'}}>Courses</h1>
        </div>
        </div>
        {/*cards*/}
        <div className="row g-0 ">
        <div className="col-12 ">
        <div className="row ">
        {
            cardsData.map((i)=>{
                return <Cards
                key={i.id}
                img={i.img}
                title={i.cName}
                discription={i.description}
                />
            })
        }
        </div>
        </div>
        </div>
        {/*Footer */}
        <div className="row g-0 " style={{backgroundColor:'#60200A'}}>
        <div className="col-12">
            <Footer/>
        </div>
        </div>


        </div>
        </div>
        </div>
        </>
    )
}

export default Courses;