import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SchoolHome from "./pages/SchoolHome";
import SubHome from "./pages/SubHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="schoolhome" element={<SchoolHome />} />
        <Route path="subhome" element={<SubHome />} />
      </Routes>
    </div>
  );
}

export default App;
