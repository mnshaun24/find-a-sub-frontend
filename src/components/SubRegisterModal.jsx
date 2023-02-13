import React from "react";
import SubRegisterForm from "./SubRegisterForm";
import { CSSTransition } from "react-transition-group";

function SubRegisterModal(props) {
  return (
    <CSSTransition
      in={props.showRegModal}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div onClick={props.onClose} className="modal-main-container">
        <div
          className="modal-content-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h3>Registration Form</h3>
          </div>
          <div>
            <SubRegisterForm />
          </div>
          <div>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default SubRegisterModal;
