import React, { useState } from "react";
import SubLoginModal from "../components/SubLoginModal";
import SubRegisterModal from "../components/SubRegisterModal";

function SubHome() {

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <section>
        <div>This displays the sub's card and sub can edit each section</div>
        <div>
          <button onClick={() => setShowModal(true) }>Login Here</button>
          <SubLoginModal onClose={() => setShowModal(false)} showModal={showModal} />
        </div>
        <div>
          <button>Register Here</button>
          <SubRegisterModal />
        </div>

        <div className="subProfileScreen">
          {/* if user is logged in they will see go to profile */}
        </div>
      </section>
    </>
  );
}

export default SubHome;
