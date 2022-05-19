import React from "react";
import { Link } from "react-router-dom";

function SubChoice(props) {
  return (
    <div className="schoolSub">
      <h1>Go here if you are a sub</h1>

      <h2 className="text-sky-500">
        <Link to="/subhome">I am a substitute</Link>
      </h2>
    </div>
  );
}

export default SubChoice;
