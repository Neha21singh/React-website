import React from 'react';
import  ReactDOM  from 'react-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App';
import './index.css';
// import { Route, Routes } from 'react-router-dom';
{/* <Route exact path="/header"element={}/> */}




ReactDOM.render(
  <Router>
    {/* <div> */}
    <Header/>
      <Routes>
            <Route exact path="/Home"element={<Home/>}/>
            <Route exact path="/About"element={<About/>}/>
            <Route exact path="/contact"element={<Contact/>}/>
            <Route exact path="/menu"element={<Menu/>}/>
            <Route exact path="/"element={<App/>}/>
          
           
        
 </Routes>
 {/* <Route exact path="/header"element={<Header/>}/> */}

  </Router>,
  document.getElementById('root')
);





