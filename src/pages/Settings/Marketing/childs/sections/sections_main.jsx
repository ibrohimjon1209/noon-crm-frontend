import React from "react";
import Navbar from "./Navbar";

const Sections_main = () => {
    return <div>
        <div className="flex flex-col items-center w-[calc(75vw-200px)] h-[calc(110vh-100px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
            <Navbar />
        </div>
    </div>;
};

export default Sections_main;