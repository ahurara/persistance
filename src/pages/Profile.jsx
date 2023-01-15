import React,{useState,useEffect} from "react";
// import Sign_up from "../components/Sign_up";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Profile =()=>
{
    const [userData, setUserData] = useState(null);



      async function getData() {
        const response = await fetch('/profile');
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
            const response = await fetch('/profile');
            const data = await response.json();
            setUserData(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      if (!userData) {
        history("/")
        return <div>Loading...</div>;
      }

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
       <h2>Profile</h2>

       <div>
       <h1>{userData.fname}</h1>
       <p>{userData.email}</p>
     </div>

       <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}} onClick={logOut}>Click me</button>
        </div>
        </div>
       


        </div>
        </div>
        </div>

        </>

    );
}

export default Profile;