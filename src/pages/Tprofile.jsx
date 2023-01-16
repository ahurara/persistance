import React,{useState,useEffect} from "react";
// import Sign_up from "../components/Sign_up";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import StudentNavbar from "../components/StudentNavbar";
import frontImg from '../Assets/navbar/ashkan-forouzani-7blIFp0kFP4-unsplash.jpg';
import Footer from "../components/Footer";
import profileImg from '../Assets/profileImage/Al-hadi.png';



const Tprofile =()=>
{
    const [userData, setUserData] = useState(null);



      async function getData() {
        const response = await fetch("/teacherProfile");
        const data = await response.json();
        // do something with the data

        window.alert("Here is cookie "+data.phoneNo)
      }
      const history = useNavigate();

      async function logOut() {
        const response = await fetch('/logout');

        window.alert("Logout Successfully")
        history("/")
      }

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/teacherProfile");
            const data = await response.json();
            setUserData(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    //   if (!userData) {
    //     history("/")
    //     return <div>Loading...</div>;
    //   }

    return(
        <>

        <div className="container-fluid p-0" style={{backgroundColor:'#D3D3D3'}}>
        <div className="row g-0">
        <div className="col-12" >
        {/* navbar */}
        <div className="row g-0">
        <div className="col-12">
            <StudentNavbar/>
        </div>
        </div>
        {/* first img */}
        <div className="row g-0">
        <div className="col-12">
        <img src={frontImg} className='img-fluid'/>
        </div>
        </div>
        {/*heading*/}
        <div className="container" style={{textAlign:'center',jusifyContent: "center", alignItems: "center",backgroundColor:"white"}}>
        <div className="row g-0">
        <div  >{/*yaha se background color style={{backgroundColor:'#EEEEEE '}} className="col-6 ps-5   pt-4"*/}
       <h1 style={{color:'#8B2009',fontSize:'40px'}}>Profile</h1>
        </div>
        </div>
         {/*Sign Heading*/}
         <div className="row g-0">
        <div className="box" >{/*yaha se background color style={{backgroundColor:'#EEEEEE '}} className="col-6 ps-5   pt-5"*/}
        <img src={profileImg} style={{width:"40%",height:"50%"}} alt="Profile Image" />

       <div>
       {/*<h1>{userData.fname}</h1>
    <p>{userData.email}</p>*/}
    <p style={{fontSize:"25px"}}><b>Name:</b> {userData.fname} {userData.lname}</p>
    <p style={{fontSize:"25px"}}><b>Email:</b> {userData.email}</p>
    <p style={{fontSize:"25px"}}><b>Whatsapp No:</b> {userData.whatsappNo}</p>
    <p style={{fontSize:"25px"}}><b>Phone No:</b> {userData.phoneNo}</p>
     </div>

       <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}} onClick={logOut}>Logout</button>
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

    );
}

export default Tprofile;