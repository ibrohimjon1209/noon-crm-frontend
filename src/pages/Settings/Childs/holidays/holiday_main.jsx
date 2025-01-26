import React, { useState } from "react";
import plus from "../../../assigments/images/add_icon.png";
import editIcon from "../../images/edit_icon.png";
import deleteIcon from "../../images/delete_icon.png";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";
import AddModal from "./add_modal";

const Holiday = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentHoliday, setCurrentHoliday] = useState(null);
  const holidays_data = [
    {
      title: "8-mart Xalqaro Xotin Qizlar Bayrami",
      start_time: "08.03.2024 | 05:00",
      end_time: "09.03.2024 | 05:00",
    },
    {
      title: "9-may Xotira va Qadrlash kuni",
      start_time: "10.06.2024 | 05:00",
      end_time: "11.06.2024 | 05:00",
    },
    {
      title: "Qurbon Hayiti",
      start_time: "10.06.2024 | 05:00",
      end_time: "11.06.2024 | 05:00",
    },
  ];

  const handleDelete = (holiday) => {
    setCurrentHoliday(holiday);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (holiday) => {
    setCurrentHoliday(holiday);
    setIsEditModalOpen(true);
  };

  return (
    <div className="flex w-[100%] h-[100%] flex-col justify-center -mt-[22px] gap-[16px] items-center">
      <div className="flex flex-row w-[100%] justify-start">
        <div
          className="flex flex-row justify-center items-center gap-[15px] bg-[#0D99FF] w-[330px] h-[60px] rounded-[50px] cursor-pointer"
          onClick={() => setIsAddModalOpen(true)}
        >
          <img className="w-[32px] h-[32px] object-contain" src={plus || "/placeholder.svg"} alt="Add icon" />
          <p className="font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
            Bayram kunlarini qo'shish
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-[1000px] h-[86%] bg-white rounded-[15px]" style={{ scrollbarWidth: "thin" }}>
        <div className="flex flex-row items-center w-[90%] h-[10%] border-b-[1px] border-[#D9D9D9]">
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">№</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">Sarlavha</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">Boshlanish kuni</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">Tugash kuni</p>
          <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[10%]">Amallar</p>
        </div>
        {holidays_data.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-[90%] h-[10%] border-b-[1px] border-[#D9D9D9]">
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">{index + 1}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">{item.title}</p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">
              {item.start_time}
            </p>
            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">
              {item.end_time}
            </p>
            <div className="flex w-[10%] justify-around">
              <img
                src={editIcon}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={() => handleEdit(item)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-[24px] h-[24px] cursor-pointer"
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