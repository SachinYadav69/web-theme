import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const Testimonials = () => {


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' />
      <img src={back_icon} alt="" className='back-btn' />
      <div className="slider">
        <ul>
            <li>
                <div className="slide"> 
                   <div className="user-info">
                      <img src={user_1} alt="" />
                       <div>
                          <h3>Will Jacks</h3>
                          <span>Indus, USA</span>
                       </div>
                        <p>Choosing to persue my degree at xyz Uni was one of the best decisions i have ever made. The supportive communities, state-of-the-art facilities, and commitments to academics excellence have truely exceeded my expectations</p>
                   </div>
                </div>
            </li>


             <li>
                <div className="slide"> 
                   <div className="user-info">
                      <img src={user_2} alt="" />
                       <div>
                          <h3>Sam Nehra</h3>
                          <span>Google, Panipat</span>
                       </div>
                        <p>Choosing to persue my degree at xyz Uni was one of the best decisions i have ever made. The supportive communities, state-of-the-art facilities, and commitments to academics excellence have truely exceeded my expectations</p>
                   </div>
                </div>
            </li>



             <li>
                <div className="slide"> 
                   <div className="user-info">
                      <img src={user_3} alt="" />
                       <div>
                          <h3>Aditya Ben Stokes </h3>
                          <span>Policy Bazaar, Uganda</span>
                       </div>
                        <p>Choosing to persue my degree at xyz Uni was one of the best decisions i have ever made. The supportive communities, state-of-the-art facilities, and commitments to academics excellence have truely exceeded my expectations</p>
                   </div>
                </div>
            </li>




             <li>
                <div className="slide"> 
                   <div className="user-info">
                      <img src={user_4} alt="" />
                       <div>
                          <h3>Kyne Yadav</h3>
                          <span>Github, Canada</span>
                       </div>
                        <p>Choosing to persue my degree at xyz Uni was one of the best decisions i have ever made. The supportive communities, state-of-the-art facilities, and commitments to academics excellence have truely exceeded my expectations</p>
                   </div>
                </div>
            </li>




        </ul>
      </div>
    </div>
  )
}

export default Testimonials
