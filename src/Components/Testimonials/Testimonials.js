import React, { useRef } from 'react'
import './Testimonials.css'
function Testimonials() {

   const slider = useRef();
     let tx = 0;

   const slideForward = ()=>{
       if(tx > -50){
        tx -= 25
       }
       slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = ()=>{
    if(tx < 0){
      tx += 25
     }
     slider.current.style.transform = `translateX(${tx}%)`
   }

  return (
    <div className='testimonials'>
      <img src="./images/next-icon.png" alt="next" className='next-btn' onClick={slideForward}></img>
      <img src="./images/back-icon.png" alt="back" className='back-btn' onClick={slideBackward}></img>
      <div className='slider'>
          <ul ref={slider}>

             <li>
                 <div className='slide'>
                    <div className='user-info'>
                      <img src="./images/user-1.png" alt="user1" />
                       <div>
                          <h3>Willaim Jackson 1</h3>
                          <span>Edusity, USA</span>
                       </div>
                   </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p>
                 </div>
             </li>

             <li>
                 <div className='slide'>
                    <div className='user-info'>
                      <img src="./images/user-2.png" alt="user2" />
                       <div>
                          <h3>Willaim Jackson 2</h3>
                          <span>Edusity, USA</span>
                       </div>
                   </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p>
                 </div>
             </li>


             <li>
                 <div className='slide'>
                    <div className='user-info'>
                      <img src="./images/user-3.png" alt="user3" />
                       <div>
                          <h3>Willaim Jackson 3</h3>
                          <span>Edusity, USA</span>
                       </div>
                   </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p>
                 </div>
             </li>


             <li>
                 <div className='slide'>
                    <div className='user-info'>
                      <img src="./images/user-4.png" alt="user4" />
                       <div>
                          <h3>Willaim Jackson 4</h3>
                          <span>Edusity, USA</span>
                       </div>
                   </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p>
                 </div>
             </li>


          </ul>
      </div>
    </div>
  )
}

export default Testimonials
