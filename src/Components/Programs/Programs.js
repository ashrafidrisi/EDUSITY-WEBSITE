import React from 'react'
import './Programs.css'
function Programs() {
  return (
    <div className='programs'>
      <div className='program'>
        <img src="./images/program-1.png" alt="prog-1"></img>
            <div className='caption'>
             <img src="./images/program-icon-1.png" alt="icon-1"></img>
             <p>Graduation Degree</p>
         </div>
      </div>

      <div className='program'>
        <img src="./images/program-2.png" alt="prog-2"></img>
           <div className='caption'>
             <img src="./images/program-icon-2.png" alt="icon-1"></img>
             <p>Masters Degree</p>
         </div>
      </div>

      <div className='program'>
        <img src="./images/program-3.png" alt="prog-3"></img>
          <div className='caption'>
             <img src="./images/program-icon-3.png" alt="icon-1"></img>
             <p>Post Degree</p>
         </div>
         
      </div>
       
    </div>
  )
}

export default Programs
