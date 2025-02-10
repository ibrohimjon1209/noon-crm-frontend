import React from "react";
import { Routes, Route } from "react-router-dom"
import Nav_settings from "./nav_management"
import Manager from "./childs/manager/manager_main";
import Teacher from "./childs/teacher/teacher_main";

const Management_main = () => {
    
    return (
    <>
        <div className="pl-[42px] pt-[41px]">
        <div className="flex gap-[30px]">
            <Nav_settings />
            <div className="w-full h-full">
            <Routes>
                <Route path="/manager" element={<Manager />} />
                <Route path="/teacher" element={<Teacher />} />
            </Routes>
            </div>
        </div>
    </div>
    </>
    );
};

export default Management_main;