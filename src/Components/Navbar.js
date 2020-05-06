import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ()=>{
   return(
       <div>
           <nav  id="nav-iop">
             <div class="nav-wrapper" >
              <a href="#"  class="brand-logo navbar-left"  id="m-left"> <b><i>PORTFOLIO</i></b></a>
              <ul id="nav-mobile" class="right">
             <li><Link to="/" style={{ color: '#FFF' , textDecoration:'none' }} ><b>Home</b></Link></li>
              <li><Link to="/Contact" style={{ color: '#FFF' , textDecoration:'none' }}><b>Contact</b></Link></li>
              <li><Link to="/About" style={{ color: '#FFF' , textDecoration:'none' }}><b>About</b></Link></li>
            
              </ul>
             </div>
       </nav>
           </div>
   )
}



export default Navbar;
