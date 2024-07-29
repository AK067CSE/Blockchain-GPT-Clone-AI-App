import React from "react";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useStateContext } from "../../Context/index";

const Modal = () => {
  const { contractMembership, buyMembership } = useStateContext();

  const callMemberShip = async (membership_id) => {
    await buyMembership(membership_id);
  };

  return (
    <div className="modal rating-modal fate" id="staticBackdrop">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Pro Membership
            </h1>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <MdClose className="mobil_custom_menu" />
            </button>
          </div>
          <div className="modal-body">
            <p>Six Months Plan</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              vitae eveniet cum tempore similique iste.
            </p>
            <p>Only: 3 Matic</p>
            <ul
              className="star-rating"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {[1, 2, 3, 4, 5].map((el, i) => (
                <li key={i}>
                  <FaStar />
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="modal-submit m-0"
              data-bs-dismiss="modal"
              onClick={()=>{callMemberShip(2)}}
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
