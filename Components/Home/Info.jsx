import React from "react";
import { BsArrowClockwise } from "react-icons/bs";

const Info = () => {
  return (
   <section className="info-section section-b-space">
   <div className="container">
   <div 
   className="info-box"
   data-type="fade-in"
   data-aos-duration="1000"
   data-aos-delay="100">
   <div className="hand-effect d-md-block d-md-block d-none">
   <img src="assets/svg/hand.svg"
   alt="hand"
   className="img-fluid left-hand"/>
   <img src="assets/svg/hand.svg"
   alt="hand"
   className="img-fluid right-hand"/>
   </div>
   <h2>Read to<span>move<img src="assets/svg/title-effect.svg" 
   className="img-fluid"
   alt="title-effect" 
   />
   ahead?
   </span>
   </h2>
   <p>
   ChainGPT Pro: Decentralized Content Verification - Utilizes blockchain to secure and validate content creation and revisions, ensuring authenticity and immutability.

BlockChat AI: Secure Decentralized Conversations - Integrates blockchain to offer tamper-proof, transparent interactions with AI chatbots, safeguarding conversation integrity.
   </p>
   <ul>
   <li>
   <img src="assets/svg/tick.svg" alt="tick"
   className="img-fluid"/>
   Free images for lifetimes
   </li>
   <li>
   <img src="assets/svg/tick.svg" alt="tick"
   className="img-fluid"/>
   Get details on any topic
   </li>
   <li>
   <img src="assets/svg/tick.svg" alt="tick"
   className="img-fluid"/>
   Quick advisor to help you
   </li>
   <li>
   <img src="assets/svg/tick.svg" alt="tick"
   className="img-fluid"/>
   15+ category to explore
   </li>
   </ul>
   <a href="#" data-cursor="pointer" 
   className="btn-arrow">
   <div className="icon-arrow">
   <BsArrowClockwise/>
   </div>
   Contact us now
   </a>
   </div>
   
   </div>
   </section>
  );
};

export default Info;