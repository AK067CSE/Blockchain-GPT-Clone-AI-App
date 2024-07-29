import React from "react";

const Footer = () => {
  return(
    <footer>
  <div className="container">
  <div className="footer-row">
  <div className="footer-main">
  <a href="#" className="footer-logo">
  <img src="assets/images/logo.svg" alt=""
  className="img-fluid"/>
  
  </a>
  <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
  <form>
  <div className="input-group">
  <input type="email" 
  id="exampleForControlInput1"
  placeholder="Enter your mail"
  className="form-control"/>
  <a href="#" data-cursor="pointer" 
  className="btn-basic">
  Subscribe
  </a>

  </div>
  </form>
  <ul className="social-links">
  <li>
  <a href="#" data-cursor="pointer">
  <img src="assets/svg/social/fb.svg" 
  alt=""
  className="img-fluid"
  />
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  <img src="assets/svg/social/linkedin.svg" 
  alt=""
  className="img-fluid"
  />
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  <img src="assets/svg/social/insta.svg" 
  alt=""
  className="img-fluid"
  />
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  <img src="assets/svg/social/twitter.svg" 
  alt=""
  className="img-fluid"
  />
  </a>
  </li>
  
  </ul>
  
  </div>
  <div className="link-section">
  <div className="footer-title">
  <img src="assets/svg/star.svg" alt="star"
  className="img-fluid"/>
  Quick Link

  </div>
  <div className="footer-content">
  <ul>
  <li>
  <a href="#" data-cursor="pointer">
  Home
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Service
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Pricing
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Contact Us
  </a>
  </li>
  </ul>
  </div>
  </div>
  <div className="link-section">
  <div className="footer-title">
  <img src="assets/svg/star.svg" alt="star"
  className="img-fluid"/>
  Our service

  </div>
  <div className="footer-content">
  <ul>
  <li>
  <a href="#" data-cursor="pointer">
  Generate
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Find image
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Email writter
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Social media
  </a>
  </li>
  </ul>
  </div>
  </div>
  <div className="link-section">
  <div className="footer-title">
  <img src="assets/svg/star.svg" alt="star"
  className="img-fluid"/>
  Our company

  </div>
  <div className="footer-content">
  <ul>
  <li>
  <a href="#" data-cursor="pointer">
  Login
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Blog listing
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
 Contact us
  </a>
  </li>
  <li>
  <a href="#" data-cursor="pointer">
  Contract
  </a>
  </li>
  </ul>
  </div>
  </div>
  
  </div>
  <div className="footer-copyright">
  <h2>@2024 All the Copyright Reserved.</h2>
  <ul className="footer-links">
  <li>
  <a href="#" >Privacy Policy</a>
  </li>
  <li>
  <a href="#" >terms & conditions</a>
  </li>
  </ul>
  </div>
  </div>

  
  </footer>
    
  );
};

export default Footer;