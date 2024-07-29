import React from "react";

const Faq = () => {
  return (
    <section className="faq-section">
    <div className="container">
    <div className="title-basic">
    <h2 className="text-white">
    "Blockchain GPT Clone FAQ: Clarity at Your Fingertips"
    
    </h2>
    
    </div>
    <div className="accordion" 
    id="accordionPanelsStayOpenExample">
  {[1,2,3,4,5,6].map((item,i)=>(
    <div key={i + 1} className="accordion-item">
    <h2 className="accordion-header"
    id="panelsStayOpen-headingOne">
    <button
    data-cursor="pointer"
    className="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#panelsStayOpen-collapseOne"
    aria-controls="panelsStayOpen-collapseOne"
    aria-expanded="true"
    >
    Is the content unique?
    </button>
    </h2>
    <div className="accordion-collapse collapseOne"
    id="panelsStayOpen-collapseOne"
    aria-labelledby="panelsStayOpen-headingOne">
    <div className="accordion-body">
    <p>
    What Are the System Requirements for Using the Blockchain GPT Clone?Can I Customize the Blockchain GPT Clone App?How is User Data Protected in the Blockchain GPT Clone App?
    
    </p>
    
    
    </div>
    
    
    
    </div>

    </div>
  ))}
    </div>
    
    </div>
    
    </section>
  )
}

export default Faq