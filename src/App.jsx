import React, { useEffect } from "react";
import Navbar from "./pages/Navbar/Navbar";
import Nav_top from "./pages/Navbar/Nav-top";
import Main_home from "./pages/home/main_home";
import Assigments from "./pages/assigments/assigments.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lids from "./pages/Lids/Lids_main.jsx";
import Groups from "./pages/Groups/Groups";
import Students from "./pages/Students/Students";
import Study_section from "./pages/Study_section/Study_section";
import Finance from "./pages/Finance/Finance";
import Management from "./pages/Management/Management";
import Marketing from "./pages/Marketing/Marketing";
import Reports from "./pages/Reports/Reports";
import Control from "./pages/Control/Control";
import Settings from "./pages/Settings/Settings.jsx";

const App = () => {
  const customScrollbar = {
    overflowY: "auto",
    scrollbarWidth: "auto",
    scrollbarColor: "rgba(0,53,95,1) rgba(0, 0, 95, 1)",
  };

  useEffect(() => {
    document.body.style.transform = "scale(0.75)";
    document.body.style.transformOrigin = "top left";
    document.body.style.width = "133.33%";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }, []);

  return (
    <Router>
      <div className="flex w-[100%] bg-[#F0F2F2] m-0 h-[calc(132.5vh)]">
        <div className="z-50 h-screen sticky top-0">
          <Navbar />
        </div>
        <div className="flex flex-col transition-all duration-300 w-full overflow-hidden">
          <Nav_top />
          <div
            className="flex-1"
            style={{
              ...customScrollbar,
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,53,95,1) rgba(255, 255, 255, 1)",
            }}
          >
            <Routes>
              <Route path="/" element={<Main_home />} />
              <Route path="/assigments" element={<Assigments />} />
              <Route path="/lids/*" element={<Lids />} />
              <Route path="/groups/*" element={<Groups />} />
              <Route path="/students/*" element={<Students />} />
              <Route path="/study_section/*" element={<Study_section />} />
              <Route path="/finance/*" element={<Finance />} />
              <Route path="/control" element={<Control />} />
              <Route path="/management" element={<Management />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
