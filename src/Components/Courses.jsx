import React from 'react'
import student from './Studentdata'
import '../App.css'
import { Link } from 'react-router-dom'


const Courses = () => {
  return (
    <>
      <h1 id='courses'>Courses</h1>
      <h3 style={{marginBottom:"10px"}}>Click on a course to view details</h3>
      <div className='card'>
        {student.Courses.map(course=>(
          <Link to={`/dashboard/courses/${course.id}`} className='course-row-link' key={course.id}>
            <div className='course-item' id="course">
              <div className='course-id'>Course id: {course.id}</div>

              <div className='course-title'>{course.title}</div>

              <div className='course-credits'>Course Credits: {course.credits}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Courses