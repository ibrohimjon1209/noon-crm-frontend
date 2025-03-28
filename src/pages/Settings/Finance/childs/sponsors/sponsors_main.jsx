import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import editIcon from "../../imgs/edit_icon.png";
import deleteIcon from "../../imgs/delete_icon.png";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";
import AddModal from "./add_modal";

const Sponsors_main = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentHoliday, setCurrentHoliday] = useState(null);

  const sponsors_data = [
    {
      name: "Oygul Oygulov",
      phone_number: "+998944444444",
      shared: "3",
    },
    {
      name: "Ma'mirov Ibrohimjon",
      phone_number: "+998333321747",
      shared: "3",
    },
    {
      name: "Ma'mirov Ibrohimjon",
      phone_number: "+998333321747",
      shared: "3",
    },
  ];

  const formatPhoneNumber = (number) => {
    const cleaned = ("" + number).replace(/\D/g, ""); // Raqamlarni tozalash
    const match = cleaned.match(/^(\+998)(\d{2})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`; // Formatlangan raqam
    }

    // Agar formatga mos kelmasa, raqamni joylar bilan formatlash
    const formattedNumber = cleaned.replace(
      /(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3"
    );
    return cleaned.length > 0 ? ` +${formattedNumber}` : number; // Joylar bilan qaytaradi
  };

  const handleDelete = (holiday) => {
    setCurrentHoliday(holiday);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (holiday) => {
    setCurrentHoliday(holiday);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex w-full h-[100%] flex-col justify-center gap-[16px] items-center">
        <div className="flex flex-row w-[100%] justify-start">
          <div
            className="flex flex-row justify-center items-center gap-[15px] bg-[#0D99FF] w-auto px-[35px] h-[60px] rounded-[50px] cursor-pointer duration-300 scale-100 hover:scale-105 active:scale-95"
            onClick={() => setIsAddModalOpen(true)}
          >
            <img
              className="w-[32px] h-[32px] object-contain"
              src={plus || "/placeholder.svg"}
              alt="Add icon"
            />
            <p className="font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
              Hamkor qo'shish
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-[1056px] overflow-y-scroll h-auto bg-white rounded-t-[15px] rounded-b-[1px] shadow-lg"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex mt-[10px] flex-row items-center w-[90%] py-[19px] border-b-[1px]  border-[#D9D9D9]">
            <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">
              №
            </p>
            <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">
              To'liq ismi
            </p>
            <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">
              Telefon raqami
            </p>
            <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">
              Ulashish
            </p>
          </div>
          {sponsors_data.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]"
            >
              <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">
                {index + 1}
              </p>
              <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">
                {item.name}
              </p>
              <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[25%]">
                {formatPhoneNumber(item.phone_number)}
              </p>
              <input
                type="number"
                name=""
                id=""
                placeholder={item.shared}
                className="pl-[10px] flex items-center font-inter font-[400] text-[16px] leading-[18.15px] text-[rgba(0,0,0,0.7)] w-[80px] h-[34px] bg-[rgba(242,238,238,1)] rounded-[5px]"
              />
              <div className="ml-[15%] pl-[80px] flex justify-center">
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="w-[24px] h-[24px] object-contain cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                  onClick={() => handleDelete(item)}
                />
              </div>
            </div>
          ))}
          <div className="flex pr-[34px] mt-[50px] mb-[15px]">
            <h1 className="font-inter font-[600] text-[15px] text-[rgba(64,64,64,1)]">
              Umumiy son: {sponsors_data.length}
            </h1>
          </div>
        </div>

        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          holiday={currentHoliday}
        />

        <AddModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Sponsors_main;
