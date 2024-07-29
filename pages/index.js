import React,{useState,useEffect} from "react";

//INTERNAL IMPORT
//import { useStateContext } from "../Context/index";
import {
  Header,
  Footer,
  HeroSection,
  About,
  AboutRight,
  AboutThird,
  Price,
  Feature,
  Info,
  Faq,
  Testimonial,
  Service,
} from "../Components/Home/index";
import {useStateContext} from "../Context/index" ;

const index = () => {

  //STATE MANAGEMENT VARIABLE
 // const  {DAPP_NAME, listMembership} = useStateContext();
 const {listMembership}= useStateContext();
  return (
    <div>
   {/* <div className="icon-custom">
    <p>{DAPP_NAME}</p>
   <button onClick={()=> listMembership()}>LIST MEMBERSHIP</button>
    </div>*/}
   
    <button onClick={()=> listMembership()}>LIST MEMBERSHIP</button>
    <Header />
    <HeroSection />
    <Service />
   <About />
   <AboutRight />
   <AboutThird />
   <Feature />
  <Price />
   <Faq />
   <Info />
   <Footer />
</div>
  );
};

export default index;