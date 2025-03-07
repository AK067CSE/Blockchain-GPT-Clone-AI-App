import React from "react";
import { MdPaid } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

// INTERNAL IMPORT
import { useStateContext } from "../../Context";

const Subscription = () => {
  const { contractMembership, buyMembership } = useStateContext();

  const callMemberShip = async (membership_id) => {
    await buyMembership(membership_id);
  };

  return (
    <div className="tab-pane fade" id="subscription" role="tabpanel" aria-labelledby="subscription" tabIndex="0">
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu className="mobil_custom_menu" />
            </button>
            <a href="/" className="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg" className="img-fluid" alt="logo" />
            </a>
            <h3>Subscription</h3>
          </div>
          <a href="/" className="premium-btn" data-cursor="pointer">
            <i className="iconsax" data-icon="crown-2"></i>
            <MdPaid /> Get <span>premium</span>
          </a>
        </div>
        <div className="main-section">
          <div className="container card p-0">
            <div className="card-header">
              <h3 className="text-white">Choose Period Of Plan</h3>
              <div className="header-option d-none d-md-flex">
                <label htmlFor="currency" className="form-label text-white">
                  Currency
                </label>
                <select className="form-select" aria-label="Default select example" id="currency" defaultValue="US Dollar">
                  <option value="US Dollar">US Dollar</option>
                  <option value="EURO">EURO</option>
                  <option value="YUAN">YUAN</option>
                </select>
              </div>
            </div>

            {/* CARD MEMBERSHIP */}
            <div className="card-body px-sm-4 px-3">
              <div className="row justify-content-center">
                {contractMembership.map((membership, i) => (
                  <div key={membership.membership_id} className="col-xl-4 col-md-6 col-12">
                    <div className="card inner-card">
                      <div className="card-header">
                        <img
                          src={`assets/svg/pricing/${
                            membership.membership_name === "One Month"
                              ? "weekly.svg"
                              : membership.membership_name === "Six Months"
                              ? "monthly.svg"
                              : "yearly.svg"
                          }`}
                          alt="membership"
                          className="img-fluid"
                        />
                        <h4 className="text-white mb-0">{membership.membership_name}</h4>
                      </div>
                      <div className="card-body">
                        <h3>{membership.membership_cost} ETH</h3>
                        <ul>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                        </ul>
                        <button className="select-plan" onClick={() => callMemberShip(membership.membership_id)}>
                          Select this plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="subscription-continue">
                <button className="no-select-plan select-plan">Continue</button>
                <a href="#" className="text-white">
                  Continue with limited version
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
