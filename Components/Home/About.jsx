import React from 'react';

const About = () => {
  const listData = [
    {
      description: "Red Hat Services Deploy Red Hat OpenShift",
    },
    {
      description:"OAuth2 |JWT",
      
    },
    {
      description: "INTEGRATE CHATGPT CLONE WITH LANGCHAIN|SaaS Integration:|AI Tools",
    },
    {
      description: "Leveraging AI Templates for Dynamic Content:",
    },
  ];

  return (
    <section className="about-section section-b-space section-mb-space">
      <div className="bg-effect"></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">01.</span>
                    <h2 className="text-white">
                    Connecting UI | ChatGPT Clone | Build And Deploy Full-Stack ChatGPT Clone 
                    </h2>
                  </div>
                  <p >
                  The integration of artificial intelligence (AI) into website design and functionality has ushered in a new era of user experience. In this guide, we will explore the transformative potential of ChatGPT AI models and AI website templates. We'll delve into how these innovations are reshaping the online landscape, enhancing engagement, and optimizing user interaction.
                  </p>

                  <ul >
                    {listData.map((list, i) => (
                      <li key={i + 1} >
                        <img src="assets/svg/tick.svg" alt="tick"  />
                        {list.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="about-img">
            <img src="assets/svg/character/1.svg" 
            alt="about"
            className="img-fluid" 
            />
            </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default About;
