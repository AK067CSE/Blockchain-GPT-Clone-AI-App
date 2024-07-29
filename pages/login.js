import React from "react";
 
//INTERNAL IMPORT 
import {Login,SignUp} from "../Components/Auth/index";

const login = () => {
  return (
    <div>
    <section className="login-section">
    <a href="#">
    <img src="assets/images/logo.svg"
    className="img-fluid logo-auth"
    />
    </a>
    <div className="row m-0">
    <div className="col-lg-7 
    d-lg-inlined-block d-none p-0">
    <div className="logo-animation">
    <img src="assets/svg/auth/1.sbg"
    data-aos="fade-up" 
    data-aos-duration="1000"
    data-aos-delay="100"
    className="img-fluid img-base"
    />
    <img src="assets/svg/auth/2.sbg"
    data-aos="fade-up" 
    data-aos-duration="1000"
    data-aos-delay="1000"
    className="img-fluid img-light"
    />
   <div 
   data-aos="flip-left" 
    data-aos-duration="1000"
    data-aos-delay="2500" 
    className="img-fluid"
    data-aos-easing="ease-out-cubic"
    >
    <img src="assets/svg/auth/3.svg"
    className="img-fluid"/>
    
    </div>
    </div>
    </div>
    <div className="col-xxl-4 col-lg-5 ms-auto p-0">
    <div className="login-box">
    <div>
    <h2>Welcome to <span>Megabot!</span></h2>
    <ul className="nav nav-tabs"
    id="myTab" role="tablist">
    <li className="nav-item"
    role="presentation">
    <button
    className="nav-link active"
    id="login-tab"
    type="button"
    role="tab"
    data-bs-toggle="tab"
    data-bs-target="#login-tab-pane"
    aria-controls="login-tab-pane"
    aria-selected="true"
    >
    Login
    </button>
    </li>
    <li className="nav-item"
    role="presentation">
    <button
    className="nav-link "
    id="signup-tab"
    type="button"
    role="tab"
    data-bs-toggle="tab"
    data-bs-target="#signup-tab-pane"
    aria-controls="signup-tab-pane"
    aria-selected="false"
    >
    SignUp
    </button>
    </li>
    
    </ul>
    <div className="tab-content" id="myTabContent">
    <Login/>
    <SignUp/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  );
};

export default login;