import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { NavLink } from 'react-router-dom';
import student from './Studentdata';


const Dashboard = () => {

  let {setIslogin} = useContext(AuthContext);
  let navigate = useNavigate();

  let [islogout, setIslogout] = useState(false);

  async function handleClick() {
    setIslogout(true);
    await new Promise((resolve)=> setTimeout(resolve,3000));
    localStorage.removeItem("islogin");
    setIslogin(false);
    navigate("/login");
    
  }
  return (
    <>
    <div className='dashboard-layout'>
      <h1>Dashboard</h1>
      <div className='sidebar'>
        <h1 style={{fontSize:'27px'}}>Welcome, {student.Name}</h1>
      
        <NavLink to={'/dashboard'} end className={({isActive})=>isActive?"active-link":"" }>Dashboard Overview</NavLink>
        <NavLink to={'/dashboard/profile'} className={({isActive})=>isActive?"active-link":""}>Profile</NavLink>
        <NavLink to={'/dashboard/courses'} className={({isActive})=>isActive?"active-link":""}>Courses</NavLink>
          

        <button id="logout" onClick={handleClick} style={{color:'white', height:"30px", 
          width:"100px", border:"none",borderRadius:"10px", fontSize:"15px", fontWeight:"bolder", marginTop:"auto"}} 
          disabled = {islogout}>{!islogout?"Logout":"Logging out"}
        </button>
      </div>

      <div className='main'>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Dashboard