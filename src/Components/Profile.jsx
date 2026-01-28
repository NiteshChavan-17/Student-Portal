import React from 'react'
import student from './Studentdata'
import '../App.css'

const Profile = () => {
  return (
    <>
    <h1 id='profile'>My Profile</h1>

    <div className="card">
      <div className='student-info'>
        <p>Name:</p> <p className='values'>{student["Name"]}</p>
        
        <p>Roll No:</p> <p className='values'>{student["Roll_no"]}</p>
        
        <p>Year:</p> <p className='values'>{student["Year"]}</p>
        
        <p>Branch:</p> <p className='values'>{student["Branch"]}</p>

        <p>Attendance:</p> <p className='values'>{student["Attendance"]}</p>
      </div>
    </div>

    <button className='back-btn' style={{color:'white', fontSize:'18px', border:'none'}}>Edit Profile</button>
    </>
  )
}

export default Profile