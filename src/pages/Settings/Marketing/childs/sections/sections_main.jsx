import React from "react";
import Navbar_sections from "./Navbar_sections";
import Student from "./Student";

const Sections_main = () => {
    return <div>
        <div className="flex flex-col  w-[calc(75vw-200px)] h-[calc(135vh-180px)] bg-white  rounded-t-[15px] ">
            <div className="sticky top-0 bg-inherit h-[80px] pt-[10px] shadow-md rounded-t-[15px]">
                <Navbar_sections />
            </div>
            <div className="mt-[20px] pb-[30px] overflow-auto">
                <Student />
            </div>
        </div>
    </div>;
};

export default Sections_main;