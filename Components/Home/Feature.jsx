import React from "react";
import {BsBoxArrowRight} from "react-icons/bs";

const Feature = () => {
  const items = [
    {
      title:"Code generator",
      description:
     "Smart Contract AutomationSecure Development  Debugging ",
      icons:[{
      icon:"code.svg",
style:"outline-icon",
},
{
  icon:"code-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"ASO expert",
      description:
     "Keyword Optimization User Engagement Insights Competitor Analysis ",
      icons:[{
      icon:"play.svg",
style:"outline-icon",
},
{
  icon:"play-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"Inst Caption",
      description:
     "AI to generate compelling Instagram posts and captions tailored to trends and audience preferences. ",
      icons:[{
      icon:"insta.svg",
style:"outline-icon"
},
{
  icon:"insta-bold.svg",
style:"bold-icon"
},


      ],
      
    },
    {
      title:"Email generator",
      description:
     "Records email compliance data (e.g., GDPR or CAN-SPAM) on a decentralized ledger,Personalized Content Creation: Uses AI to craft tailored email content based on user preferences and behavior, enhancing engagement and conversion rates.Blockchain Validation: Stores and verifies email content and interactions on the blockchain, ensuring authenticity and preventing tampering or fraud. ",
      icons:[{
      icon:"mail.svg",
style:"outline-icon"
},
{
  icon:"mail-bold.svg",
style:"bold-icon"
},
],
      },
      {
        title:"Hashtag writer",
        description:
       " Blockchain Analytics: Tracks hashtag performance and engagement metrics  blockchain, providing immutable and transparent data for optimization. Ensures hashtag recommendations are free from manipulation and spam by recording interactions on a decentralized ledger.",
        icons:[{
        icon:"hashtag.svg",
  style:"outline-icon"
  },
  {
    icon:"hashtag-bold.svg",
  style:"bold-icon"
  },
  ],
        },
        {
          title:"E-commerce",
          description:
         "Product Recommendations: |Blockchain Transactions: ",
          icons:[{
          icon:"box.svg",
    style:"outline-icon"
    },
    {
      icon:"box-bold.svg",
    style:"bold-icon"
    },
    ],
          },
          {
            title:"Ads & marketing",
            description:
           "Targeted Ad Content:|Blockchain Tracking: |Campaign Optimization:  ",
            icons:[{
            icon:"marketing.svg",
      style:"outline-icon"
      },
      {
        icon:"marketing-bold.svg",
      style:"bold-icon"
      },
      ],
            },
            {
              title:"YouTube",
              description:
             "Content Ideation: Utilizes AI to generate video topic ideas and scripts based on trending keywords and audience interests, aiding creators in producing relevant and engaging content.Blockchain Verification: Ensures the authenticity and originality of content through blockchain, providing verifiable proof of ownership and preventing content piracy. ",
              icons:[{
              icon:"marketing.svg",
        style:"outline-icon"
        },
        {
          icon:"marketing-bold.svg",
        style:"bold-icon"
        },
        ],
              },
  

  ]
  return (
    <section className="feature-section section-b-space">
    <div className="bg-effect">
    <img
    src="assets/images/feature.gif"
    alt=""
    className="img-fluid feature-left"
    />
    <img
    src="assets/images/feature.gif"
    alt=""
    className="img-fluid feature-right"
    />
    <img
    src="assets/images/feature-bg.png"
    alt=""
    className="img-fluid feature-bg"
    />
    <span className="round-effect"></span>
    
    
    </div>
    <div className="container">
    <div className="title-basic">
    <h2>"Unleashing Next-Gen AI: Features of Our Blockchain GPT Clone"  </h2>
    
    
    </div>
    <div className="swiper featureSlider">
    <div className="swiper-wrapper">
    <div className="swiper-slider">
    <div className="row g-xl-5 g-4">
    {
      items.map((item,i)=>(
        <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-box">
        <div className="feature-top">
        <div className="feature-icon">
        {
          item.icons.map((icon,i)=>(
            <img src={`assets/svg/feature/${icon.icon}`} 
            className={`img-fluid ${icon.style}`}
            alt="icon"/>
          ))
        }
        
        </div>
        <h3>{item.title}</h3>
        </div>
        <h4>{item.description}</h4>
        <div className="link-overflow" 
        data-cursor="pointer">
        <a href="#">
        Read more
        <BsBoxArrowRight />
        </a>
        </div>
        </div>
        </div>
      ))
    }
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </section>
  );
};

export default Feature;