import React from "react";

const Sign_in =()=>
{
    return(
        <>
            <form>
        <label className="mt-5">Username/Email</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" name="uname"></input>
        </div>
        <label className="mt-5">Password</label>
        <br></br>
        <div class="input-group mt-2 w-50 ">
        <input type="password" class="form-control"  aria-label="Username" name="password"></input>
        </div>
        <button className="btn btn-custom mt-4 mb-4 btn-lg rounded-4" style={{backgroundColor:'#9EEA11',color:'white'}}>Sign in</button>
       </form>
        </>
    )
}

export default Sign_in;