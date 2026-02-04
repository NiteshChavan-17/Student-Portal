import React from 'react'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1 className='home-page'><span className='text'>W</span><span className='text'>e</span><span className='text'>l</span>
          <span className='text'>c</span><span className='text'>o</span><span className='text'>m</span><span className='text'>e </span>
          <span className='text'>t</span><span className='text'>o </span><span className='text'>S</span>
          <span className='text'>t</span><span className='text'>u</span><span className='text'>d</span><span className='text'>e</span>
          <span className='text'>n</span><span className='text'>t </span>
          <span className='text'>P</span><span className='text'>o</span><span className='text'>r</span>
          <span className='text'>t</span><span className='text'>a</span><span className='text'>l</span>
        </h1>

        <div className="home-content">
          <p> The Student Portal is a centralized platform designed to help students manage their academic activities efficiently in one place.
            It provides easy access to important information related to their studies, progress, and learning journey.
          </p>

          <h3>What you can do in this portal:</h3>

          <ul>
            <li>View your personal student profile</li>
            <li>Check your enrolled courses</li>
            <li>Track your attendance</li>
            <li>Access course details and descriptions</li>
            <li>Navigate easily through different sections</li>
            <li>Secure login and protected dashboard</li>
          </ul>

          <p> This portal is built using modern web technologies like React,
            React Router, Context API, and Local Storage to provide a smooth and interactive user experience.
          </p>

          <p> Login to your account to access your dashboard and explore your academic details in a structured and user-friendly way. </p>

        </div>
      </div>
    </>
  )
}

export default Home