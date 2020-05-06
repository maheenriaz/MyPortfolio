import React, { Component } from 'react';
import img from  './myimg.jpeg'

class CardAbout extends Component{

 
    render()
    {
        return(
            <div class="row" id="c-center">
             <div class="col-md-12">
             <center>   <div class="card"  id="react-card" style={{backgroundColor:"#61dafb"}}>
                 <div class="card-content white-text">
                 <center> <img src={img} id="imgback" className="img-circle"/> </center>
            
                  <span class="card-title" style={{color:"black"}}><b><i>Maheen Riaz</i></b></span>
               <p style={{color:"black"}}>Web designer with a passion for web application development and developing user
 interfaces , testing ,debugging and training staff within ecommerce technologies. Proven
 ability in optimizing web functionalities that proven data retrieval and workflow efficiencies</p>
            <h4><b>Technical Skills</b></h4>
                 <ul style={{listStyleType:"circle"}}>
                   <li>Wordpress</li>
                    <li>Responsive Websites</li>
                     <li>ReactJS</li>
                     <li>Photoshop</li>
                     
                  </ul>
                 </div>
                 <div class="card-action">
                   <a href="https://github.com/maheenriaz/" style={{color:"grey"}}>Click Here to see my work..</a>
                  
                 </div>
               </div></center>
             </div>
           </div>
           
        )
}



}

export default CardAbout;
