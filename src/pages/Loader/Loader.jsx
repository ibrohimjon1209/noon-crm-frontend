import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ size = 50, color = "#0D99FF" }) => {
    return (
        <div className="flex justify-center items-center h-20">
            <ClipLoader size={size} color={color} />
        </div>
    );
};

export default Loader;
