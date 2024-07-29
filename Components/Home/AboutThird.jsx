import React from 'react'

const AboutThird = () => {
  const listData = [
    {
      description: "LangChainHaystack:Efficient data retrieval datasets",
    },
    {
      description: "Back-end:Server-side  API :Flask, FastAPI, or Django",
    },
    {
      description: "OpenAI API (GPT-4):NLP Framework:|AWS, Google Cloud|OpenShift",
    },
  ];
  return (
    <section className="about-section section-b-space ">
    <div className="bg-effect"></div>
      <div className="container">
        <div className="row g-md-5 g-4">
          <div className="col-lg-6 order-lg-0 order-1">
            <div className="about-content">
              <div>
                <div className="title">
                  <span className="number-pattern">03.</span>
                  <h2 className="text-white">
                  Project Mapping Overview:

                  </h2>
                </div>
                <p >
                FRONT END:User interacting with the system
React
Back-end:Server-side logic and API management
   Flask, FastAPI, or Django
Database: Storage for client data
   PostgreSQL, MongoDB, or MySQL
LLM Integration: Leveraging language models for query interpretation
OpenAI API (GPT-4):
NLP Framework:Manage complex workflows and queries
LangChain
Haystack:
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
          <img src="assets/svg/character/3.svg" 
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

export default AboutThird;