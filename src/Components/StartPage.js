import React from 'react'
import Farmer from '../assests/startPage/Farmer.png'
import Government from '../assests/startPage/Government.jpg'
import Privatesector from '../assests/startPage/Privatesector.jpg'
import '../myStyles/StartPageCSS.css'
import {Link} from 'react-router-dom';
import { useState } from 'react'


export default function StartPage() {


const [farmersubfunactivate, setfarmersubfunactivate] = useState(false);
const [privatesubfunactivate, setprivatesubfunactivate] = useState(false);
const [governmentsubfunactivate, setgovernmentsubfunactivate] = useState(false);
function farmersubfun(){
    if(!farmersubfunactivate){
        setfarmersubfunactivate(true);
    }else{
        setfarmersubfunactivate(false);
    }
    
}   
function governmentsubfun(){
    if(!governmentsubfunactivate){
        setgovernmentsubfunactivate(true);
    }else{
        setgovernmentsubfunactivate(false);
    }
   
   
}
function privatesubfun(){
    if(!privatesubfunactivate){
        setprivatesubfunactivate(true);
    }else{
        setprivatesubfunactivate(false);
    }
    
    }

  return (
   <>
   <div style={{"backgroundColor":"black" , "background":"black" ,"height":"49vw"}}>
  
    <h1> AGRICULTURE WEB PORTAL</h1>
    {"\n"}

    <div style={{"backgroundColor":"black"}}>
    <Link to="/individualfarmersignin"><img className='startpageimg' id="farmerimg" src={Farmer} /></Link>
    <a href=""><img className='startpageimg' id="governmentimg" src={Government}/></a>
    <Link to="/psbuyersignup"><img className='startpageimg' id="privateimg"  src={Privatesector}/></Link>
    <button id="farmer" className='startpagebutton my-3' style={{"backgroundColor": "black"}} onClick={farmersubfun}> FARMER</button>
    <div id="farmersub">
        {
    farmersubfunactivate &&
    <>
    <p><Link className='sublink' to='/individualfarmersignin' >Individual farmers </Link></p>
    {/* <p> <a className='sublink' href='' >Farmer groups </a></p><p><a className='sublink' href='' > Farmer cooperatives </a></p><br></br> */}
    </>                                     
    
        }
        </div>          
    <button id="government" className='startpagebutton my-3' style={{"backgroundColor": "black"}} onClick={governmentsubfun}> GOVERNMENT </button>
    <div id="governmentsub"> 
        {
            governmentsubfunactivate &&
            <>
            <p><a className='sublink' href='' >Department of Agriculture & Cooperation </a></p>
            {/* <p> <a className='sublink' href=' >Attached Offices & Directorates </a></p><p><a className='sublink' href='' > Testing Labs </a></p> */}         
            <p><a className='sublink' href='' >Academic and Research Institutions </a></p><br></br>
            </>
        }
    </div>
    
    <button id="private" className='startpagebutton my-3' style={{"backgroundColor": "black"}} onClick={privatesubfun}>PRIVATE SECTOR</button>
<div id="privatesub"> 

{
        privatesubfunactivate &&
    <>
    <p><a className='sublink' href='' >Manufacturers/ Wholesalers/Dealers of inputs </a></p><p> <a className='sublink' href='' > workers    </a></p><p><Link className='sublink' to='/psbuyersignup' >Traders,Buyers and Commodity Exchanges </Link></p><br/>
    </>
}


    </div>

</div>
ji

{/* <div >
    <div className="carousel-item">
  <img src={Farmer} alt="Los Angeles"/>
  <div className="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>
</div>
    </div> */}



</div>
   </>
  )
}


