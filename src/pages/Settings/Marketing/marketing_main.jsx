import React from "react";
import { Routes, Route } from "react-router-dom"
import Phone from "./childs/Phone/phone_main"
import Hashtag from "./childs/hashtag/hashtag_main";
import Students_type from "./childs/students_type/students_type_main";
import Sections from "./childs/sections/sections_main";
import Auto_sms from "./childs/auto_sms/auto_sms_main";
import Sms_devices from "./childs/sms_devices/sms_devices_main";
import Nav_settings from "./nav_marketing"

const Marketing_settings_main = () => {
    
    return (
    <>
        <div className="pl-[42px] pt-[41px]">
        <div className="flex gap-[30px]">
            <Nav_settings />
            <div className="w-full h-full">
            <Routes>
                <Route path="/phone" element={<Phone />} />
                <Route path="/hashtag" element={<Hashtag />} />
                <Route path="/students-type" element={<Students_type />} />
                <Route path="/sections" element={<Sections />} />
                <Route path="/auto-sms" element={<Auto_sms />} />
                <Route path="/sms-devices" element={<Sms_devices />} />
            </Routes>
            </div>
        </div>
    </div>
    </>
    );
};

export default Marketing_settings_main;