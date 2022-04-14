import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolHome from "./SchoolHome";
import SubHome from "./SubHome";

function SchoolOrSub() {
  return (
    <div className="schoolSub">
        <Routes>
            <Route path="schools" element={<SchoolHome />} />
            <Route path="subs" element={<SubHome />} />

        </Routes>
    </div>
  );
}

export default SchoolOrSub;
