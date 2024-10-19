import React from 'react'
import './Campus.css'
function Campus() {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src="./images/gallery-1.png" alt="g-1"></img>
        <img src="./images/gallery-2.png" alt="g-2"></img>
        <img src="./images/gallery-3.png" alt="g-3"></img>
        <img src="./images/gallery-4.png" alt="g-4"></img>
      </div>
      <button className='btn dark-btn'>see more here <img src="./images/white-arrow.png" alt="arrow"></img></button>
      
    </div>
  )
}

export default Campus
