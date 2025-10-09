import React from 'react'
import './About.css';
import logo_about from '../../assets/about-logo.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h2>About Me</h2>
        {/* <img className='About-img-1' src={logo_about} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left-content">
          <img className='about-img-1' src={logo_about} alt="" />
        </div>

        <div className='about-right-content' >
          <div className="about-info">
            <p>Software engineer dedicated to continuous learning,
              coding excellence, and advancing the open-source and web development
              community</p>
            <p>Enthusiastic developer who thrives on solving problems
              through code, contributing to open source, and crafting modern web
              experiences.</p>
          </div>

          <div className="about-skill-cont">
            <div className="skill-1"><p>Web Development</p> <hr style={{ width: "70%" }} /></div>
            <div className="skill-1"><p>DSA</p> <hr style={{ width: "60%" }} /></div>
            <div className="skill-1"><p>Javascript</p> <hr style={{ width: "50%" }} /></div>
            <div className="skill-1"><p>Linux</p> <hr style={{width:"45%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-Achievments">
        
        <div className="achievment-1"> 
          <h2>Open Source Contributer</h2>
          <p id='typewriter-effect'>Enthusiastic and curious to participate into open source projects</p>
        </div> 
        <div className="achievment-1">
          <h2>Projects</h2>
          <p id='typewriter-effect'>Developing various kinds of projects by self learning</p>
        </div>  
        <div className="achievment-1">
          <h2>Work Experience</h2>
          <p id='typewriter-effect'>such as no any work experience</p>
        </div> 
      </div>

    </div>
  )
}

export default About
