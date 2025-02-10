import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import editIcon from "../../imgs/edit_icon.png";
import deleteIcon from "../../imgs/delete_icon.png";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";
import AddModal from "./add_modal";

const Holiday = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentHoliday, setCurrentHoliday] = useState(null);
  const phone_data = [
    {
      device: "VIVO v2036",
      company : "BEELINE UZ",
      imei : "33423432344534",
      moder : "Xudoyorxon ",
      status : "Online",
      holat : "foal emas"
    },
    {
      device: "VIVO sdfsdf",
      company : "MOBIUZ",
      imei : "33423432344534",
      moder : "Xudoyorxon ",
      status : "Online",
      holat : "aktiv"
    },
    {
      device: "VIVO sdfsdf",
      company : "Android",
      imei : "33423432344534",
      moder : "Xudoyorxon ",
      status : "Online",
      holat : "aktiv"
    }

  ]

  

  return (
    <div className="flex w-[100%] h-[100%] flex-col  gap-[16px]">
      <div className="flex flex-row w-[100%] justify-start">
        <div
          className="flex flex-row justify-center items-center gap-[15px] bg-[#0D99FF] w-[330px] h-[60px] rounded-[50px] cursor-pointer duration-300 scale-100 hover:scale-105 active:scale-95"
          onClick={() => setIsAddModalOpen(true)}
        >
          <img className="w-[32px] h-[32px] object-contain" src={plus || "/placeholder.svg"} alt="Add icon" />
          <p className="font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
            Bayram kunlarini qo'shish
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-[80vw] overflow-y-scroll h-[calc(135vh-255px)] bg-white rounded-t-[15px] rounded-b-[1px] shadow-lg" style={{ scrollbarWidth: "thin" }}>
        <div className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">№</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[15%]">Qurilma</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[18%]">Kompaniya</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[22%]">IMEI</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[20%]">Moderator</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[20%]">Status</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">Holati</p>
        </div>
        {phone_data.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">{index + 1}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[20%]">{item.device}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[23%]">{item.company}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[29%]">{item.imei}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[26%]">{item.moder}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">{item.status}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[23%]">{item.holat}</p>



            <div className="flex w-[10%] justify-around">
              <img
                src={editIcon}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                onClick={() => handleEdit(item)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                onClick={() => handleDelete(item)}
              />
            </div>
          </div>
        ))}
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        holiday={currentHoliday}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        holiday={currentHoliday}
      />

      <AddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Holiday;