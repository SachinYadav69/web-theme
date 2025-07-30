import React from 'react'
import '../About/About.css'
import about_img from '../../assets/about_img.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <img src={about_img} alt=""  className='about-img'/>
        </div>

        <div className="about-right">
            <h2>About University</h2>
            <h3>Making Education more better</h3>
            <p> Our university is a center of excellence committed to nurturing talent and fostering innovation. We offer a wide range of undergraduate, postgraduate, and research programs designed to equip students with the knowledge and skills needed for success in today’s competitive world.</p>
            <p> With a team of experienced faculty members, modern infrastructure, and a focus on holistic development, we provide a dynamic and inclusive learning environment. Our campus promotes not only academic excellence but also encourages students to participate in cultural, technical, and sports activities to develop leadership, teamwork, and creativity.</p>
            <p> We believe in empowering students to become responsible global citizens who contribute meaningfully to society. Whether you’re seeking academic growth, personal development, or career opportunities, our university is dedicated to guiding you every step of the way.</p>
        </div>
    </div>
  )
}

export default About
