import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const Sign_in =()=>
{
    const [email, setEmail] = useState('');
    const [password,setPassword]= useState('');

    const history = useNavigate();

    const loginUser=async(e)=>{
        e.preventDefault();

        const res=await fetch("/studentLogin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
              })
        })

        

        const data=res.json();

        if(!email||!password)
        {
                window.alert('Fill empty sapce')
        }
        else{
            if(res.status===400||!data){
                window.alert('Insert valid detail')
    
            }
            else{
                window.alert('login Successfully')
                history("/")
            }
        }
    }



    return(
        <>
            <form method="POST" id="register-form">
        <label className="mt-5">Username/Email</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="email" class="form-control" placeholder="Enter Email" aria-label="Username" name="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        ></input>
        </div>
        <label className="mt-5">Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control"  aria-label="Username" name="password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        ></input>
        </div>
        <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}}
        type='submit' name='signup' id='signup' onClick={loginUser}
        >Sign in</button>
       </form>
        </>
    )
}

export default Sign_in;