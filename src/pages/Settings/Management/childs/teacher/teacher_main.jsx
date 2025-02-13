import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import Add_modal from "./add_modal";
import editIcon from "./img/edit_icon.png"
import deleteIcon from "./img/delete_icon.png"
import DeleteModal from "./delete_modal"
import EditModal from "./edit_modal";


const teacher_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const teacher = [
    {
      lavozim: "Katta o'qituvchi",
      yarm_stavka: "1 250 000 UZ",
      bir_stavka: "2 500 000"
    },
    {
      lavozim: "Middle Mentor",
      yarm_stavka: "1 250 000 UZ",
      bir_stavka: "2 500 000"
    },
    {
      lavozim: "Yordamchi o'qituvchi",
      yarm_stavka: "1 250 000 UZ",
      bir_stavka: "2 500 000"
    },
    {
      lavozim: "O'rta Toifali O'qituvchi",
      yarm_stavka: "1 250 000 UZ",
      bir_stavka: "2 500 000"
    },


  ]




  return (
    <div className="flex flex-col w-full h-full gap-[30px]">
      <div
        className="bg-[#0D99FF] w-[290px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <img src={plus} alt="" />
        <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px] text-[black]">O'qituvchi qo'shish</h1>
      </div>
      <div className="flex flex-col items-center w-[calc(85vw-200px)] h-[calc(100vh-100px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
        <div className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">Lavozimi</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">Yarim stavka</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">Bir stavka</p>
        </div>
        {teacher.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">{item.lavozim}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">{item.yarm_stavka}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[30%] text-[black]">{item.bir_stavka}</p>

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

export default teacher_main;