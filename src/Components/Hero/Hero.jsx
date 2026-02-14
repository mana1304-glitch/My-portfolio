import React from 'react'
import './Hero.css';
import profile_img from '../../assets/manavimg2.jpg';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img1' src={profile_img} alt="" />
      {/* <div className='profile-img1'><img src={profile_img} alt="" /> </div> */}
          <h2><span>I'am Manav Jadhav, Passionate about technology, AI & 
        Web Developement</span>.
      </h2>
<h3 id='h3-hero'>I am dedicated and aspiring 🧑‍💻 Software Engineer
        with some expertise in MERN Stack as Mongo DB, React, Node and Express JS.
        Also I have grabbed good understanding in Data Structures and Algorithms.
        Have strong curiosity to learn about cloud computing, DevOps and AI.
        Have a good leadership and communication skills as well as good management skills.</h3>
          <div className="links-to-connect">
              <h3>Here is my professional account to Connect with. <a href="">LinkedIn</a>, <a href="">GitHub</a></h3>
              {/* <div className='linkedIn-link'>
                  <a href="">LinkedIn</a>
              </div>
              <div className='linkedIn-link'>
                  <a href="">GitHub</a>
              </div> */}
          </div>
    </div>
  )
}

export default Hero
