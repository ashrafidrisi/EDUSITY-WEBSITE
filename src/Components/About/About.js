import React from 'react'
import './About.css'
function About({setPlayState}) {
  return (
    <div className='about'>
       <div className='about-left'>
         <img src="./images/about.png" alt="about" className='about-img'></img>
         <img src="./images/play-icon.png" alt="about" className='play-icon' onClick={()=> setPlayState(true)}></img>
       </div>
       <div className='about-right'>
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>Embark on a transformative educational journey with our universitie's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experences needed to excel in the dynamic field of education.</p>
         <p>With a focus on innovation, hand-on learning, and personalised mentership, our program prepare aspiring educators to make a meaningful impact in classroom, school, and communities.</p>
         <p>With a focus on innovation, hand-on learning, and personalised mentership, our program prepare aspiring educators to make a meaningful impact in classroom, school, and communities.our program prepare </p>
       </div>
    </div>
  )
}

export default About
