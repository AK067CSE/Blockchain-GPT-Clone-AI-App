import React from "react";
import {FaVideo,FaStar} from "react-icons/fa";

const HeroSection = () => {
  return <section className="home-section">
  <div className="container">
  <div className="row">
  <div className="col-12">
  <div className="home-content">
<div className="bg-effect">
<img src="assets/images/home/home-bg.gif"
 alt=""
 className="img-fluid bg-gif"
 />
 <img src="assets/images/home/1.png"
 alt=""
 className="img-fluid effect1 rotate-effect"
 />
 <img src="assets/images/home/2.svg"
 alt=""
 className="img-fluid effect2 rotate-effect"
 />
 <div>
 
 
 </div>
 <h1>
 USE MEGABOT TO<div className="title-effect">
 <img src="assets/images/title-effect.png"
 alt=""/>
 <span>SIMPLIFY</span>
 
 </div>
 YOUR LIFE
 
 </h1>
 <p>
 ChatGPT/Gemini AI/GPT Clone | Build And Deploy Full-Stack ChatGPT Clone 2024 
 In the rapidly evolving landscape of artificial intelligence and natural language 
processing, building and deploying your own ChatGPT clone has become an exciting 
endeavor. This step-by-step guide will walk you through the process of creating a
 full-stack ChatGPT/GPT clone in 2024, 
 enabling you to harness the power of AI-driven 
 conversations for various applications. 
 From concept to deployment, this article will 
 equip you with the knowledge and skills 
 needed to craft your very own AI chatbot
 
 </p>
<a data-cursor="pointer" className="start-link">
<FaVideo/>
Start free trail
</a>
</div>
  </div>
  <div className="home-laptop px-md-0 px-3">
  <div className="laptop-sec position-relative">
  <div className="hand-sec">
  <img src="assets/images/home/hand.png"
  className="img-fluid left-hand"
  alt="hand"
  />
  <img src="assets/images/home/hand.png"
  className="img-fluid right-hand"
  alt="hand"
  />
  <img src="assets/images/home/finger.png"
  className="img-fluid left-finger"
  alt="hand"
  />
  <img src="assets/images/home/finger.png"
  className="img-fluid right-finger"
  alt="hand"
  />
  
  </div>
  <img 
  src="assets/images/home/laptop.png"
  alt="laptop"
  className="img-fluid laptop-img"/>

  
  </div>
  <div className="home-info">
  <ul className="info-list">
  <li>Ask anything</li>
  <li>Generate anything</li>
  <li>Translate anything</li>
  </ul>
  <ul className="star-rating">
  {[1,2,3,4,5].map((el,i)=>(
    <li>
    <FaStar/>
    </li>
  ))}
  </ul>
  <h4>
  ChatGPT/Gemini AI/GPT Clone | Build And Deploy Full-Stack ChatGPT Clone 2024

  </h4>
  </div>
  
  </div>
  </div>
  </div>
  </div>
  
  
  </section>
  
};

export default HeroSection