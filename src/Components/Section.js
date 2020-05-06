import React from 'react';
import Background from './Pic.jpg';
import icon from './scalibilityicon.jpg';
import cost from './reducedcost.jpg';
import user from './userl.jpg';

const Section =()=>{
    return (
       <div className="container-fluid">
         <div className="row" id="left-descriptive">
       <div className="col-sm-4">
         {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
             <center> <img src={user} id="imgback" className="img-circle"/> </center>
                
              <h4 id="writing">Bootstrap/CSS</h4>
              <p id="para-writing">  Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
         </div>
         <div className="col-sm-4">
         {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
        
         <center> <img src={cost} id="imgback" className="img-circle"/> </center>
               
              <h4 id="writing">React-JS</h4>
              
              <p  id="para-writing"> ReactJS is JavaScript library used for building reusable UI components. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.  React implements one-way reactive data flow.</p>
         </div>
          <div className="col-sm-4">
          {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
        
          <center> <img src={user} id="imgback" className="img-circle"/> </center>
               
              <h4 id="writing">WordPress</h4>
              <p id="para-writing">WordPress (WordPress.org) is a content management system (CMS) based on PHP and MySQL that is usually used with the MySQL or MariaDB database servers but can also use the SQLite database engine. Features include a plugin architecture and a template system</p>
          </div>
          {<br></br>}{<br></br>}{<br></br>}

   </div>
  </div>
    );
}


export default  Section;
