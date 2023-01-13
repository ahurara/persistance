import React from "react";

const Sign_up =()=>
{
    return(
        <>
            <form>
        {/* first name*/}
        <label className="mt-5">First name</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="text" class="form-control" placeholder="First name" aria-label="Username" name="fname"></input>
        </div>
        {/* last name*/}
        <label className="mt-5">Last name</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="text" class="form-control"  aria-label="Username" name="lname"></input>
        </div>
         {/* Gender*/}
         <label className="mt-5">Gender</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <select name="gender">
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
        </select>
        </div>
        {/*Whatsapp*/}
        <label className="mt-5">Whatsapp</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="tel" class="form-control" placeholder="0000-0000000" pattern="[0-9]{4}-[0-9]{7}" aria-label="Username" name="wNum"></input>
        </div>
         {/* Mobile*/}
         <label className="mt-5">Mobile</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="tel" class="form-control" placeholder="0000-0000000" pattern="[0-9]{4}-[0-9]{7}" aria-label="Username" name="mNum"></input>
        </div>
        {/* Email*/}
        <label className="mt-5">Email</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="email" class="form-control" placeholder="someone@gmail.com"  aria-label="Username" name="email"></input>
        </div>
        {/* Password*/}
        <label className="mt-5">Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control" placeholder="Enter Password" aria-label="Username" name="password"></input>
        </div>
        {/* Confirm Password*/}
        <label className="mt-5">Confirm Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" name="confirm_password"></input>
        </div>
        <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}}>Sign up</button>
       </form>
        </>
    )
}

export default Sign_up;