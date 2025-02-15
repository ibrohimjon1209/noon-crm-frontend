import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import Add_modal from "./add_modal";
import editIcon from "./img/edit_icon.png"
import deleteIcon from "./img/delete_icon.png"
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";

const Monthly_payment_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const mashgulot = [
    {
      nomi: "Speaking Practice",
      sigim: "12",
      davomiyligi: "12"
    },
    {
      nomi: "QOLDIRILGAN DARS",
      sigim: "12",
      davomiyligi: "12"
    },
    {
      nomi: "WRITING",
      sigim: "12",
      davomiyligi: "12"
    },
    {
      nomi: "Speaking and listening",
      sigim: "12",
      davomiyligi: "12"
    },
    {
      nomi: "Test",
      sigim: "12",
      davomiyligi: "12"
    },


  ]




  return (
    <div className="flex flex-col w-full h-full gap-[30px]">
      <div
        className="bg-[#0D99FF] w-[290px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <img src={plus} alt="" />
        <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px] text-[black]">Mashg'ulot qo'shish</h1>
      </div>
      <div className="flex flex-col items-center w-[calc(95vw-200px)] h-[calc(100vh-100px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
        <div className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[8%] text-[black]">№</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">Mashg'ilot nomi</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%] text-[black]">O'quvchi sig'imi</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[18%] text-[black]">Davomiyligi</p>
        </div>
        {mashgulot.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[10%] text-[black]">{index + 1}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[37%] text-[black]">{item.nomi}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[31%] text-[black]">{item.sigim}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[35%] text-[black]">{item.sigim}</p>
            <div className="flex w-[10%] justify-around">
              <img
                src={editIcon}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                onClick={() => setIsEditModalOpen(item)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                onClick={() => setIsDeleteModalOpen(item)}
              />
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <Add_modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Monthly_payment_main;