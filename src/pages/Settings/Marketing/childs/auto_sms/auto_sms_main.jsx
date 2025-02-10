import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import Add_modal from "./add_modal";
import editIcon from "./img/edit-icon.jpg";
import deleteIcon from "./img/delete-icon.jpg";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";

const Monthly_payment_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [finance, set_finance] = useState(false);
  const [kelmasa, set_kelmasa] = useState(false);
  const [qarzdorlar, set_qarzdorlar] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentHoliday, setCurrentHoliday] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    // Bu yerda siz o'chirish uchun kerakli ma'lumotlarni aniqlashingiz kerak
    setIsDeleteModalOpen(true);
  };

  const handleEdit = () => {
    // Bu yerda siz tahrirlash uchun kerakli ma'lumotlarni aniqlashingiz kerak
    setIsEditModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full h-full gap-[30px]">
      <div
        className="bg-[#0D99FF] w-[270px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <img src={plus} alt="" />
        <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Avto sms qo'shish</h1>
      </div>
      <div className="flex flex-col items-center w-[calc(70vw-200px)] h-[calc(110vh-100px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
        <div className="flex flex-row w-[91%] justify-between pr-[50px] py-[20px] border-[1px solid black]">
          <h1 className="text-black font-inter font-[500] text-[18px] leading-[18.15px] mt-[15px] ">Avto sms yoqish</h1>
        </div>


        <div className='w-[95%] h-[68px] flex justify-between items-center px-[10px]'>
          <div className='w-[677px]'>
            <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Kurs puli to'lansa</h1>
          </div>
          <div className="w-[23%] h-[100%] flex justify-between items-center">
            <div>
              <div
                onClick={() => set_finance(!finance)}
                className={`rounded-[40px] mr-[10px] ${finance ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${finance ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
              >
                <div
                  className={`h-[14px] ${finance ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                ></div>
              </div>
            </div>
            <img
              className="w-[35px] mr-[10px]"
              src={editIcon}
              alt="Edit"
              onClick={handleEdit}
            />
            <img
              className="w-[30px]"
              src={deleteIcon}
              alt="Delete"
              onClick={handleDelete}
            />

          </div>
        </div>


        <textarea className="w-[90%] h-[20%] resize-none border-black border-[1px] p-[10px] rounded-[10px] ">Assalomu alaykum Hurmatli o'quvchi "NAME"! Sizning Amu Web School dagi avvalgi balansingiz "OLD-BALANCE" so'm edi, hisobingizga AMOUNT so'm to'lov qabul qilindi, hozirda balansingiz: "BALANCE" so'm. Qo'shimcha ma'lumot uchun adminstratsiya telefon raqami: 935053700</textarea>

        <div className='w-[95%] h-[68px] flex justify-between items-center px-[10px] border-black border-[1px]--'>
          <div className='w-[677px]'>
            <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Darsga kelmasa</h1>
          </div>
          <div className="w-[23%] h-[100%] flex justify-between items-center">
            <div>
              <div
                onClick={() => set_kelmasa(!kelmasa)}
                className={`rounded-[40px] mr-[10px] ${kelmasa ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${kelmasa ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
              >
                <div
                  className={`h-[14px] ${kelmasa ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                ></div>
              </div>
            </div>
            <img
              className="w-[35px] mr-[10px]"
              src={editIcon}
              alt="Edit"
              onClick={handleEdit}
            />
            <img
              className="w-[30px]"
              src={deleteIcon}
              alt="Delete"
              onClick={handleDelete}
            />

          </div>

        </div>
        <div className="w-[95%] h-[50px] border-b-[1px] border-gray flex">
          <p className="p-[5px] mt-[5px] font-[600]">Yo'qlama qilgandan</p>
          <input className="bg-[#F2EEEE] w-[80px] h-[80%] mt-[4px] p-[5px] ml-[5px] rounded-[5px]" type="number" />
          <p className="p-[5px] mt-[5px] font-[600]">minut keyin sms yuborsin</p>
        </div>

        <div className='w-[95%] h-[68px] mt-[20px] flex justify-between items-center px-[10px]'>
          <div className='w-[677px]'>
            <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Qarzdorlar</h1>
          </div>
          <div className="w-[23%] h-[100%] flex justify-between items-center">
            <div>
              <div
                onClick={() => set_qarzdorlar(!qarzdorlar)}
                className={`rounded-[40px] mr-[10px] ${qarzdorlar ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${qarzdorlar ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
              >
                <div
                  className={`h-[14px] ${qarzdorlar ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                ></div>
              </div>
            </div>
            <img
              className="w-[33px] mr-[10px]"
              src={editIcon}
              alt="Edit"
              onClick={handleEdit}
            />
            <img
              className="w-[30px]"
              src={deleteIcon}
              alt="Delete"
              onClick={handleDelete}
            />

          </div>


        </div>
        <div className="w-[95%] h-[50px] border-b-[1px] border-gray flex mt-[20px] flex justify-between align-center">
          <p className="p-[5px] mt-[5px] font-[600]">Har</p>
          <input className="bg-[#F2EEEE] w-[80px] h-[80%] mt-[4px] p-[5px] ml-[5px] rounded-[5px]" type="number" />
          <p className="p-[5px] mt-[5px] font-[600]">kunda</p>
          <input className="bg-[#F2EEEE] w-[80px] h-[80%] mt-[4px] p-[5px] ml-[5px] rounded-[5px]" type="number" />
          <p className="p-[5px] mt-[5px] font-[600]">da maximum</p>
          <input className="bg-[#F2EEEE] w-[80px] h-[80%] mt-[4px] p-[5px] ml-[5px] rounded-[5px]" type="number" />
          <p className="p-[5px] mt-[5px] font-[600]">marta yuborilsin</p>
        </div>




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


      <Add_modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Monthly_payment_main;