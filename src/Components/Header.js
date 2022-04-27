import React from 'react'
function Header(){
    return (<div className="header">
    <div className="header__left">
      <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png"
        alt=""/>
        
      <div >

      </div>
    </div>
    <div className="header__right">
    
   
        <div className="headerOption">
          <h2> <a href="Home">Home</a> </h2>
        </div>

        <div className="headerOption">
          <h2><a href="About">About</a></h2>
        </div>

        <div className="headerOption">
          <i className="fas fa-inbox"></i>
         
          {/* <a href="Menu">Menu</a> */}
          <h2> <a href="Menu">Menu</a></h2>
        </div>

        <div className="headerOption">
          <i className="far fa-bell"></i>
          <h2> <a href="contact">Contact</a></h2>
         
        </div> 
        
        
      </div> 
      
  </div>
  
  
)
      
}

export default Header;


