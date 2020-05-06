import React, { Component } from 'react';



class Form extends Component{

 
    constructor(props)
    {
        super(props);
        this.state={
            fullname:"Enter your full name",
            email:"Enter your email",
            dob:"Enter your Date of birth",
            password:"Enter your Password",
            message:" Your Message  "
          
        }
      
    }
    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
       }

       onsubmitall =()=>{
           alert("Thankyou for your response");
       }
    render()
    {
        return (
            <form onSubmit={this.onsubmitall}>
             <h4 id="contact-us"><i>Contact-Us</i></h4>
         <center>   <div className="container" id="contact-bg"><br></br><br></br>
           <div className="form-group">
                  <label ><b>Full Name: *</b></label>
                  <input type="text" className="form-control" name="fullname" id="input" value={this.state.fullname} onChange={this.handlechangeall}  />
             </div>
             
          <div className="form-group">
                  <label id="email-label"><b>Email address: *</b></label>
                  <input type="email" className="form-control" name="email" value={this.state.email} id="input"
                  onChange={this.handlechangeall}
                  />
             </div>
             <div className="form-group">
                  <label id="dob-label"><b>Date Of Birth: *</b></label>
                  <input type="date" className="form-control" name="dob" value={this.state.dob} id="input"
                   onChange={this.handlechangeall}
                  />
             </div>
              <div className="form-group">
                    <label ><b>Password: *</b></label>
                   <input type="password" className="form-control"  name="password" value={this.state.password} id="input"
                    onChange={this.handlechangeall}
                   />
              </div>
              <div className="form-group">
                  <label ><b>Message: *</b></label>
                  <input type="text" className="form-control" name="message" value={this.state.message} id="input"
                   onChange={this.handlechangeall}
                  /><br></br>
                   <input type="submit" class="btn btn-info" type="button" value="Send" />
             </div><br></br><br></br>
            
                     </div>
                     </center>
          </form>
    )
 
    }
   

}

 


export default Form;