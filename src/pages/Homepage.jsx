import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import frontImg from '../Assets/navbar/ashkan-forouzani-7blIFp0kFP4-unsplash.jpg';
import AboutUs from "../components/AboutUsAtHomepage";
import '../cardsdata';
import Cards from "../components/Cards";
import cardsData, { cardsDataAtHomepage } from "../cardsdata";

const containerStyle={
    padding:"0px",
    margin:"auto",
};

const Homepage =()=>
{
return(
    <>
        
        <div className="container-fluid no-gutters" style={containerStyle}>
        <div className="row g-0" style={{width:'100%'}}>
        <div className="col-12">
        {/* navbar */}
        <div className="row g-0">
        <div className="col-12">
            <Navbar/>
        </div>
        </div>
        {/* first img */}
        <div className="row g-0">
        <div className="col-12">
        <img src={frontImg} className='img-fluid'/>
        </div>
        </div>
        {/* About us secion */}
        <div className="row g-0">
        <div className="col-12 m-5">
        <AboutUs/>
        </div>
        </div>
        {/* course secion */}
        <div className="row g-0">
        <div className="col-12 m-5">
        <div className="row">
        <h1 className="fw-bolder" style={{color:'#8B2009'}}>Al Hadi</h1>
        <br/>
        <br/><br/>
        <br/>
        <hr/>

       {cardsDataAtHomepage.map((i)=>{
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
        {/* first footer */}
        <div className="row g-0">
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

export default Homepage;