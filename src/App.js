import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import { tsRestType } from '@babel/types';
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Style from './Style.css'
import Button from 'react-bootstrap/Button';

import Pic from './Pic.jpg'; 

class App extends React.Component {
  
  render()
  {
  return (
     
      <BrowserRouter>
      <div >
         <Navbar/>
         <div >
         <Route exact path="/" component={Home}  />
        
         </div>
         <Route path="/Contact" component={Contact} />
         <Route path="/About" component={About} />
    
     </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
