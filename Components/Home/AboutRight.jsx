import React from 'react'

const AboutRight = () => {
  const listData = [
    {
      description: "Building and Deploying Blockchain-Backed ChatGPT",
    },
    {
      description: "Hardhat for development, testing, and deployment |Ganache for local blockchain simulation.",
    },
    {
      description: "Integration Of Blockchain with ChatGPT: |Developed Smart Contracts",
    },
    {
      description: "ImmutableRecords:|Decentralization:| Transparency: |Security:",
    },

  ];
  return (
    <section className="about-section right-version section-b-space section-mb-space">
    <div className="bg-effect"></div>
      <div className="container">
        <div className="row g-md-5 g-4">
        <div className="col-lg-6">
          <div className="about-img">
          <img src="assets/svg/character/2.svg" 
          alt="about"
          className="img-fluid" 
          />
          </div>
          </div>
          <div className="col-lg-6 ">
            <div className="about-content">
              <div>
                <div className="title">
                  <span className="number-pattern">02.</span>
                  <h2 className="text-white">
                  Live Testing Of Our ChatGPT | Build And Deploy Blockchain ChatGPT
                  </h2>
                </div>
                <p >
                In the dynamic world of technology, groundbreaking innovations continue to reshape the landscape. One such marvel is the fusion of AI-powered chatbots with blockchain technology. At the forefront of this fusion stands ChatGPT, a sophisticated language model developed by OpenAI. This guide delves into live testing our ChatGPT while exploring the intricacies of building and deploying a blockchain-backed version.
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
          
        </div>
      </div>
    
  </section>
                );
};

export default AboutRight;