import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {



  return (
    <>
    <div className='navbar'>
      <h2>Student Portal</h2>
        <ul>
            <li>
              <NavLink to={'/'} className={({isActive})=>isActive?'active-link':""}>Home</NavLink>
            </li>

            <li>
              <NavLink to={'/login'} className={({isActive})=>isActive?'active-link':""}>Login</NavLink>
            </li>

            <li>
              <NavLink to={'/dashboard'} className={({isActive})=>isActive?'active-link':""}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar