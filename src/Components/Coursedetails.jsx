import React from 'react'
import { useParams } from 'react-router-dom'
import student from './Studentdata'
import '../App.css'
import { Link } from 'react-router-dom'

const Coursedetails = () => {

    let {id} = useParams();
    let course = student.Courses.find((c)=>c.id==id);

  return (
    <>
    <div className='card'>
      {course?<div>
      <h1>{course.title}</h1>
      <div className='course-details'><span><span className='label'>Course id</span>: {course.id}</span></div>
      <div className='course-details'><span><span className='label'>Credits</span>: {course.credits}</span></div>
      <div className='course-details'><span><span className='label'>Description</span>: {course.description}</span></div>
      </div>:<div>
        <h1>Course Not found</h1>
        <p>The course you are looking for does not exist or was removed.</p>
        </div>}
      
    </div>

    <div className='back-btn'><Link to={'/dashboard/courses'}>Back to Courses</Link></div>
    </>
  )
}

export default Coursedetails