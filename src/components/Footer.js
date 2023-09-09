import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={
                    {
                        color:"#fff",marginRight:"2rem"
                    }
                } />
    <div>
        <p>565 Crawford Avenue, Windsor</p>
        <p>Canada</p>
    </div>
    </div>
    <div className="phone">
        <h4><FaPhone size={20} style={
                    {
                        color:"#fff",marginRight:"2rem"
                    }
                } />+1 226-961-3847</h4>
    
             
    <div className="email">
        <h4> <FaMailBulk size={20} style={
                    {
                        color:"#fff",marginRight:"2rem"
                    }
                } />mehta7b@wuindsor.ca</h4>
    </div>
    </div>
                </div>

            <div className="right">
                <h4>About</h4>
                <p>Imagine a young explorer, wide-eyed and curious, embarking on a journey through the vast terrain of the digital universe. That explorer is me, Ritik Mehta. I'm a new graduate from the University of Windsor with a Master's Degree in Computer Science.

I was fascinated by the wonders of technology as a child. I still recall the day I first held a computer in my hands; it was like receiving a treasure map to a universe of limitless possibilities. I set out on my mission, fervently exploring the online world driven by my constant thirst for my passion, and eagerness to explore.

Join me on this journey where each line of code represents a brushstroke on the progress canvas. Together, we'll keep venturing into the uncharted territory of the digital world, telling tales of innovation and influence as we go.

Please feel free to get in touch; I'm excited to meet new people and widen my circle.</p>

                <div className="Social">
                    <a href={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer">
                    <FaFacebook  size={30} style={
                    {
                        color:"#fff",marginRight:"1rem"
                    }
                } />

                    </a>
               
                    <a href={"https://github.com/Ritik-rik"} target="_blank" rel="noopener noreferrer">
                    <FaGithub  size={30} style={
                    {
                        color:"#fff",marginRight:"1rem"
                    }
                } />

                    </a> <a href={"https://www.linkedin.com/in/-ritikmehta-"} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin  size={30} style={
                    {
                        color:"#fff",marginRight:"1rem"
                    }
                } />

                    </a>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
