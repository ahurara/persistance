import React from "react";  



const card_info =
{
  padding: '15px ',
  
}

const cards=
{
  borderRadius:'15px' ,
  float: 'left',
  marginTop: '100px',
  marginLeft:'50px',
  backgroundColor: 'white'
  
}

const card=
{
  width: 'auto',
  height:'auto',
  backgroundColor:'#8B2009',
 
}

const card_img=
{
 
  height: '300px',
  width: 'auto',
}


const Cards=(props)=>
{
    return(
    <>
        
        <div className="col-md-4 float-right ">
        
        <div style={cards} >
      <div style={card} >
        <img src={props.img} alt='' style={card_img} /> 
          <div style={card_info}>
            <h3 className="text-white">{props.title} </h3>
            <p className="text-white">{props.discription} </p>
             
             
                <button className="text-white" style={{backgroundColor:'#8B2009',border:'0px'}}>Read Now</button>
                </div>
                </div>
          </div>
          </div>
          <div className="col-md-1"></div>
     
	
        
    </>
    )
}
export default Cards;