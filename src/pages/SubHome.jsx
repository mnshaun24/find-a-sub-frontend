import React, { useState } from "react";
import SubLoginModal from "../components/SubLoginModal";
import SubRegisterModal from "../components/SubRegisterModal";

function SubHome() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);

  return (
    <>
      <section>
        <div>This displays the sub's card and sub can edit each section</div>
        <div>
          <button onClick={() => setShowLoginModal(true)}>Login Here</button>
          <SubLoginModal
            onClose={() => setShowLoginModal(false)}
            showLoginModal={showLoginModal}
          />
        </div>
        <div>
          <button onClick={() => setShowRegModal(true)}>Register Here</button>
          <SubRegisterModal
            onClose={() => setShowRegModal(false)}
            showRegModal={showRegModal}
          />
        </div>

        <div className="subProfileScreen">
          {/* if user is logged in they will see go to profile */}
        </div>
      </section>
    </>
  );
}

export default SubHome;
