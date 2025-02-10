import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import Add_modal from "./add_modal";
import editIcon from "./img/edit_icon.png"
import deleteIcon from "./img/delete_icon.png"
import { div } from "framer-motion/client";

const Monthly_payment_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const sabab = [
    {
      training: "Boshqa markazga boryapti",
      sigim: "Ketdi",
    },
    {
      training: "Viloyatda yashaydi onlayn ro'yxatdan o'tib qo'ygan",
      sigim: "Ketdi",
    },
    {
      training: "pul qimmatlik qildi",
      sigim: "Bekor qilindi",
    },
    {
      training: "Talaba viloyatga ketdi",
      sigim: "O'quvchini muzlatish",
    },
    {
      training: "Uyidagilari ruxsat bermabdi",
      sigim: "Davomat",
    },


  ]




  return (
    <div className="flex flex-col w-full h-full gap-[30px]">
      <div
        className="bg-[#0D99FF] w-[220px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <img src={plus} alt="" />
        <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Sabab qo'shish</h1>
      </div>
      <div className="flex flex-col items-center w-[calc(95vw-200px)] h-[calc(100vh-100px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
        <div className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[8%]">№</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[50%]">Mashg'ilot nomi</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[18%]">O'quv sig'imi</p>
        </div>
        {sabab.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[8%]">{index + 1}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[54%]">{item.training}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">{item.sigim}</p>
            <div className="flex w-[10%] justify-around">
              <img
                src={editIcon}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                // onClick={() => handleEdit(item)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                // onClick={() => handleDelete(item)}
              />
            </div>
          </div>
        ))}



      </div>
      <Add_modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Monthly_payment_main;