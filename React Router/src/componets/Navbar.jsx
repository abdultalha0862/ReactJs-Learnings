import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    
  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

        <NavLink className={(e=>{return e.isActive?"red":""})} to="/">Home</NavLink>
        <NavLink className={(e=>{return e.isActive?"red":""})} to="/about">About</NavLink>
        <NavLink className={(e=>{return e.isActive?"red":""})} to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
