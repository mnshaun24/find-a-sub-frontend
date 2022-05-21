import React from 'react';
import SubLoginForm from './SubLoginForm';
import { CSSTransition } from "react-transition-group";

function SubLoginModal(props) {

    return (
        <CSSTransition
            in={props.showModal}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
            >
        <div onClick={props.onClose} className="modal-main-container">
            <div className='modal-content-container' onClick={e => e.stopPropagation()}>
                <div>
                    <h3>Login Form</h3>
                </div>
                <div>
                    <SubLoginForm />
                </div>
                <div>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
        </CSSTransition>
    );
}

export default SubLoginModal;