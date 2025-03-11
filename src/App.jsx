import React, { useState, useEffect } from "react";
import Navbar from "./pages/Navbar/Navbar";
import Nav_top from "./pages/Navbar/Nav-top";
import Main_home from "./pages/home/main_home";
import Assigments from "./pages/assigments/assigments.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Login from "./pages/Log/Login.jsx";
import Logup from "./pages/Log/Logup.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        // Check the user's login status and update `isLoggedIn`
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

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
        document.body.style.height = "133vh";
    }, []);

    return (
        <Router>
            <div className="flex w-[100%] bg-[#F0F2F2] m-0 h-[calc(132.5vh)]">
                {isLoggedIn && (
                    <div className="z-50 h-screen sticky top-0">
                        <Navbar />
                    </div>
                )}
                <div className="flex flex-col transition-all duration-300 w-full overflow-hidden">
                    {isLoggedIn && <Nav_top />}
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
                            <Route path="/" element={isLoggedIn ? <Main_home /> : <Navigate to="/login" />} />
                            <Route path="/assigments" element={isLoggedIn ? <Assigments /> : <Navigate to="/login" />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/lids/*" element={isLoggedIn ? <Lids /> : <Navigate to="/login" />} />
                            <Route path="/groups/*" element={isLoggedIn ? <Groups /> : <Navigate to="/login" />} />
                            <Route path="/students/*" element={isLoggedIn ? <Students /> : <Navigate to="/login" />} />
                            <Route path="/study_section/*" element={isLoggedIn ? <Study_section /> : <Navigate to="/login" />} />
                            <Route path="/finance/*" element={isLoggedIn ? <Finance /> : <Navigate to="/login" />} />
                            <Route path="/control" element={isLoggedIn ? <Control /> : <Navigate to="/login" />} />
                            <Route path="/management" element={isLoggedIn ? <Management /> : <Navigate to="/login" />} />
                            <Route path="/marketing" element={isLoggedIn ? <Marketing /> : <Navigate to="/login" />} />
                            <Route path="/reports" element={isLoggedIn ? <Reports /> : <Navigate to="/login" />} />
                            <Route path="/settings/*" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
                            <Route path="/profile/*" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
