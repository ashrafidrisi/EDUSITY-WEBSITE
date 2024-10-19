import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <>
      <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum designed to enpower students with the knowledge, skills, and experinces needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src="./images/dark-arrow.png" alt="dark-arrow"></img></button>
      </div>
      </div>
    </>
  )
}

export default Hero;
