import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer =()=>
{
    return(
        <>
            <div className=" row ">
    <div className="col-md-12 pr-0 pl-0">
  <footer className="text-white text-center text-lg-start " style={{backgroundColor: '#23242a'}}>
   
    <div className="container p-4">
     
      <div className="row mt-4">
       
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <div className="mt-4">
            
            <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-facebook-f"></i></a>
            
            <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-dribbble"></i></a>
            
            <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-twitter"></i></a>
           
            <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-google-plus-g"></i></a>
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
           <li className="mb-3">
              <span className="fa-li"><i className="bi bi-house"></i></span><span className="ms-2">New York, NY 10012, US</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-envelope"></i></span><span className="ms-2">info@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-printer"></i></span><span className="ms-2">+ 01 234 567 89</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
    

    
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdChamp.com/">Yourinsurance.com</a>
    </div>
   
  </footer>
  </div>
</div>


        </>

    )
}

export default Footer;