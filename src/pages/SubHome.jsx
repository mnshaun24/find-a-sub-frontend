import React from "react";
import SubLoginModal from "../components/SubLoginModal";
import SubRegisterModal from "../components/SubRegisterModal";

function SubHome() {
  return (
    <>
      <section>
        <div>This displays the sub's card and sub can edit each section</div>
        <div>
          <button>Login Here</button>
          <SubLoginModal />
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
