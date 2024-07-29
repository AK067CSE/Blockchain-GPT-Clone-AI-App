import React from "react";
import {BsArrowUpRight} from "react-icons/bs";

const Service = () => {

  const features = [
    {
      title:"Copy write",
      description:
     "Transparent Content Integrity:Immutable Records:  ",
      image:"service-title.svg",
      icons:[{
      icon:"copy.svg",
style:"outline-icon",
},
{
  icon:"copy-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"Digital marketers",
      description:
     "Fraud Prevention: Decentralized data ensures reducing  risk of fraudulent activities. ",
      image:"service-title.svg",
      icons:[{
      icon:"graph.svg",
style:"outline-icon",
},
{
  icon:"graph-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"SEO Specialist",
      description:
     "Immutable Data: Blockchain ensures that SEO metrics and analytics are recorded",
      image:"service-title.svg",
      icons:[{
      icon:"search.svg",
style:"outline-icon"
},
{
  icon:"search-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"Content marketer",
      description:
     "Verified Ownership: Blockchain technology ensures that content creation ",
      image:"service-title.svg",
      icons:[{
      icon:"text.svg",
style:"outline-icon"
},
{
  icon:"text-bold.svg",
style:"bold-icon"
},
],
      },
  ];
  return (
    <div className="service-section section-b-space">
    <div className="container">
    <div className="row g-5">
    <div className="col-lg-6">
    <div className="row g-4 service-row">
    {features.map((feature,i)=>(
      <div key={i+1} className="col-sm-6">
      <div className="service-box">
      <div className="service-icon">
      {feature.icons.map((icon,i)=>(
        <img key={i+1} 
        className={`img-fluid outline-icon $
          {icon.style}`}
        src={`assets/svg/service/${icon.icon}`}
        />
    ))}
      </div>
      <div className="service-content">
      <h3>
      <img src="assets/svg/service-title.svg"
      className="img-fluid"
      alt=""
      />
      {feature.title}
      </h3>
      <p>{feature.description}</p>
      
      </div>
      
      </div>
      </div>
    ))}
    
    
    </div>
    
    </div>
    <div className="col-lg-6">
    <div className="service-info">
    <div>
    <div className="title">
    <h2>For All Kind Of Creators</h2>
    <h3>
    Steps to Build and Deploy a Full-Stack ChatGPT Clone
     </h3>
    </div>
    <p>
Understanding ChatGPT and Its Significance|Designing the Architecture:Outline 
the architecture, including frontend, backend, and AI engine integration.||Developing the Frontend:Create a user-friendly interface for users to interact with the
 chatbot.||Implementing the Backend Logic:Set up server-side logic to handle requests and 
manage data.||Integrating the AI Engine:Connect the frontend and backend to the AI engine 
to process user inputs and generate responses.||Deploying Your Full-Stack ChatGPT Clone:
    </p>
    <a href="#" data-cursor="pointer"
    className="btn-arrow ">
    <div className="icon-arrow">
    <BsArrowUpRight />
    </div>
    View all
    
    </a>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Service