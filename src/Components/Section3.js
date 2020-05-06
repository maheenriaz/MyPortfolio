import React from 'react';
import location from './location.jpg';


const Section3 =()=>{
  return (
    <div className="row" id="left">
    <div className="col-sm-8">
    {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
  
         <h4 id="writing-black"><b> Declarative</b></h4>
         <p id="para-writing"> React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.><br></br>JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
         
         </p>
    </div>
    {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
  
    <div className="col-sm-4">
    <img src={location} id="location-img" className="img-circle"/> 
        </div>

{<br></br>}{<br></br>}{<br></br>}

</div>

  );
  }
  export default Section3;
  