import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sign_up =()=>
{
    const [user,setUser] = useState({
        fname: '',
        lname: '',
        gender:'male',
        whatsappNo:'',
        phoneNo:'',
        email:'',
        password: '',
        confirm_password: ''
      });

      const history = useNavigate();

    let name,value
    const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name
    value=e.target.value

    setUser({...user,[name]:value})
  }

  const PostData=async(e)=>{
    e.preventDefault()

    const{fname,lname, gender,whatsappNo,phoneNo,email,password,confirm_password}=user;

    const res=await fetch("/studentRegister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fname,lname, gender,whatsappNo,phoneNo,email,password,confirm_password
      })
    });

    
    const data=await res.json()

    if(res.status===422||!data){
      window.alert("Invalid registration")
      console.log("Invalid Registration");
      console.log(JSON.stringify(data));
    }
    else{
      window.alert("Successful registration")
      console.log("Successful Registration");

      history("/")
    }
  }

    return(
        <>
        
          
            <form method="POST" id='register-form'>
        {/* first name*/}
        <label className="mt-5">First name</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="text" class="form-control" placeholder="First name" aria-label="Username" name="fname"
        value={user.fname}
        onChange={handleInputs}
        ></input>
        </div>
        {/* last name*/}
        <label className="mt-5">Last name</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="text" class="form-control"  aria-label="Username" name="lname"
        value={user.lname}
        onChange={handleInputs}
        ></input>
        </div>
         {/* Gender*/}
         <label className="mt-5">Gender</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <select 
        name="gender" 
        value={user.gender}
        onChange={handleInputs}
        >
            <option value='male' >Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
        </select>
        </div>
        {/*Whatsapp*/}
        <label className="mt-5">Whatsapp</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="tel" class="form-control" placeholder="0000-0000000" pattern="[0-9]{4}-[0-9]{7}" aria-label="Username" name="whatsappNo"
        value={user.whatsappNo}
        onChange={handleInputs}
        ></input>
        </div>
         {/* Mobile*/}
         <label className="mt-5">Mobile</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="tel" class="form-control" placeholder="0000-0000000" pattern="[0-9]{4}-[0-9]{7}" aria-label="Username" name="phoneNo"
        value={user.phoneNo}
        onChange={handleInputs}
        ></input>
        </div>
        {/* Email*/}
        <label className="mt-5">Email</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="email" class="form-control" placeholder="someone@gmail.com"  aria-label="Username" name="email"
        value={user.email}
        onChange={handleInputs}
        ></input>
        </div>
        {/* Password*/}
        <label className="mt-5">Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control" placeholder="Enter Password" aria-label="Username" name="password"
        value={user.password}
        onChange={handleInputs}
        ></input>
        </div>
        {/* Confirm Password*/}
        <label className="mt-5">Confirm Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" name="confirm_password"
        value={user.confirm_password}
        onChange={handleInputs}
        ></input>
        </div>
        
        <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}}
        type='submit' name='signup' id='signup' onClick={PostData}
        >Sign up</button>
       </form>
        </>
    )
}

export default Sign_up;