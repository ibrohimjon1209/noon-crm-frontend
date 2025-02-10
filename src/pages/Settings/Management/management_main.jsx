import React from "react";
import { Routes, Route } from "react-router-dom"
import Nav_settings from "./nav_management"

const Management_main = () => {
    
    return (
    <>
        <div className="pl-[42px] pt-[41px]">
        <div className="flex gap-[30px]">
            <Nav_settings />
            <div className="w-full h-full">
            <Routes>
                {/* <Route path="/phone" element={<Phone />} /> */}
                {/* <Route path="/hashtag" element={<Hashtag />} /> */}
            </Routes>
            </div>
        </div>
    </div>
    </>
    );
};

export default Management_main;