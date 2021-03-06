import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/" class="nav-link">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/sendemail" className="nav-link">SendEmail</NavLink>
      </li>
     
      
    </ul>
    
  </div>
</nav>
</>
       
    )
}

export default Navbar
