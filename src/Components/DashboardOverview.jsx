import React from 'react'
import student from './Studentdata'

const DashboardOverview = () => {
  return (
    <>
    <h1 id='overview'>DashboardOverview</h1>

    <div className='card'>
      <h3 className='heading' id='info'>Student Information</h3>
      <div className='student-info'>
        <p>Name:</p> <p className='values'>{student["Name"]}</p>
        
        <p>Roll No:</p> <p className='values'>{student["Roll_no"]}</p>
        
        <p>Year:</p> <p className='values'>{student["Year"]}</p>
        
        <p>Branch:</p> <p className='values'>{student["Branch"]}</p>
      </div>
      
    </div>

    <div className='card'>
      <h3 className='heading'>Quick Stats</h3>
      <div className="stats-grid">
        <div className='stat-card'>Branch:{student.Branch}</div>
        <div className='stat-card'>Courses Enrolled:{student.Courses.length}</div>
        <div className='stat-card'>Attendance:{student.Attendance}</div>
      </div>
    </div>

    <div className='card'>
      <h3 className='heading'>Courses Enrolled</h3>
      {student.Courses.map(course=>(<div className='course-item' key={course.id}>
      <p>{course.id}. <span className='title'>{course.title}</span></p>
    </div>))}
    </div>

    <div>
        
        
    </div>
    </>
  )
}

export default DashboardOverview