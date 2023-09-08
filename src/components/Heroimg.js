import "./HeroImgStyle.css";
import React from 'react'
import Bg_img from "../assets/bg_img.jpeg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
    <img className=""
    src={Bg_img} alt="bg_img"/>

      </div>
      <div className="content">
<p> Hi, I'M A NEW GRADUATE.</p>
<h1>Software Developer.</h1>
<Link to="/project" className="btn">Projects</Link>
<Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default Heroimg
