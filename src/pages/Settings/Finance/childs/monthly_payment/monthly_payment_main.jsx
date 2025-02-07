import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import Add_modal from "./add_modal";

const Monthly_payment_main = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
    <div className="flex flex-col w-full h-full gap-[30px]">
        <div 
        className="bg-[#0D99FF] w-[220px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
        >
            <img src={plus} alt="" />
            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Foiz qo’shish</h1>
        </div>
        <div className="flex flex-col items-center w-[calc(100vw-200px)] h-[calc(100vh-100px)] bg-white shadow-lg rounded-t-[15px]">
            <div className="flex flex-row w-[91%] justify-between pr-[50px] py-[20px]">
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">Foiz nomi</h1>
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">Foiz</h1>
            </div>
                {/* foizlar */}
            <hr className="border-[#D9D9D9] w-[100%]"/>
            <div className="flex flex-row w-[91%] justify-between pr-[50px] py-[30px]">
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">o'quvchi qilgan to'lovi uchun</h1>
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">10 %</h1>
            </div>
            <hr className="border-[#D9D9D9] w-[100%]"/>
            <div className="flex flex-row w-[91%] justify-between pr-[50px] py-[30px]">
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">o'qituvchi davomati uchun</h1>
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">5 %</h1>
            </div>
            <hr className="border-[#D9D9D9] w-[100%]"/>
            <div className="flex flex-row w-[91%] justify-between pr-[50px] py-[30px]">
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">director uchun</h1>
                <h1 className="text-black font-inter font-[600] text-[15px] leading-[18.15px]">50 %</h1>
            </div>
        </div>
      <Add_modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
    );
};

export default Monthly_payment_main;