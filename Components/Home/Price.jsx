import React from 'react'

const Price = () => {
  const priceTable = [
    {
      title:"Weekly Plan",
      price:"1 Matic",
      items:[
        {
          icon:"arrow",
          item:"Intelligent Ai ChatBot",
        },
        {
          icon:"arrow",
          item:"Unlimited answer of question",
        },
        {
          icon:"arrow",
          item:"Early access to new features",
        },
        {
          icon:"arrow",
          item:"Avoid buying coin forever",

        },
       

        
        
       
      ]
    },
    {
      title:"Monthly Plan",
      price:"3 Matic",
      items:[
        {
          icon:"arrow",
          item:"Intelligent Ai ChatBot",
        },
        {
          icon:"arrow",
          item:"Unlimited answer of question",
        },
        {
          icon:"arrow",
          item:"Early access to new features",
        },
        {
          icon:"arrow",
          item:"15+ new category",
        },
        {
          icon:"arrow",
          item:"No ad in background",
        },
        
       
      ]
    },
    {
      title:"Lifetime Plan",
      price:"5 Matic",
      items:[
        {
          icon:"arrow",
          item:"Intelligent Ai ChatBot",
        },
        {
          icon:"arrow",
          item:"Unlimited answer of question",
        },
        {
          icon:"arrow",
          item:"Avoid buying coin forever",
        },
        {
          icon:"arrow",
          item:"No ad in background",
        },
        
       
      ]
    },
  ];
  return (
   <section className="pricing-section section-b-space">
   <div className="container">
   <div className="title-horizontal">
   <h2>
   Elite Membership:Create and Customize Memberships for Your Blockchain GPT App
   
   
   </h2>
   <p>
   "Unlock Exclusive Features: Tailor-Made Memberships for Your Blockchain GPT Clone"
"Transform Your App Experience: Dynamic Membership Options for Blockchain GPT"
"Revolutionize Access: Personalized Memberships for Your Blockchain GPT Clone"
"Next-Level Engagement: Create and Customize Memberships for Your Blockchain GPT App"
"Empower Your Blockchain GPT Clone: Flexible Membership Plans to Suit Every Need"
   </p>
   
   
   
   </div>
   <div className="row oricing-row g-xl-5 g-4 
   justify-content-center">
   {
    priceTable.map((price,i)=>(
      <div key={i+1} className="col-lg-4 col-md-6">
      <div className="pricing-box">
      <img src="assets/svg/handing.svg"
      alt=""
      className="img-fluid handing-cls"/>
      <div className="pricing-top">
      <img src="assets/svg/pricing/pricing-top.svg" alt=""
      className="img-fluid pricing-bg"/>
      <img src="assets/svg/pricing/weekly.svg" alt=""
      className="img-fluid"/>
      <h3>{price.title}</h3>

      </div>
      <div className="pricing-mid">
      <div className="clip-path-content">
      <div>
      <h2>{price.price}</h2>
      <h4>/Only</h4>
      </div>
      </div>
      </div>
      <div className="pricing-content">
      <div className="clip-path-content">
      <ul>
      {price.items.map((list,i)=>(
        <li>
        <img src="assets/svg/arrow.svg"
         alt="arrow"
         className="img-fluid"/>
<h4>{list.item}</h4>
        </li>
      ))}
      </ul>
      <a href="#" 
      data-cursor="pointer"
      className="pricing-link">
      Choose Plan
      </a>
      </div>
      </div>
      </div>
      </div>
    ))
   }
   </div>
   
   </div>
   
   </section>
  );
};

export default Price;