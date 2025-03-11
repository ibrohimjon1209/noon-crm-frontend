import React, { useState, useEffect, useRef } from "react";
import dropIcon from './imgs/arrow_down_black_icon.png'
const CustomDropdown = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const dropdownRef = useRef(null);

  // Dropdown tashqariga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tanlangan qiymatni o'zgartirish
  const handleSelect = (option) => {
    setInputValue(option);
    onChange(option);
    setIsOpen(false);
  };

  // Inputga yozish
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={dropIcon} alt="" />
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const teachers = ["O‘qituvchi 1", "O‘qituvchi 2", "O‘qituvchi 3"];
  const groups = ["Guruh A", "Guruh B", "Guruh C"];

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white gap-5 rounded-[20px] w-[625px] h-[900px] z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <h2 className="font-roboto font-[500] p-6 text-[20px] leading-[23.44px] uppercase text-black text-center">
          O‘quvchini boshqa guruhga o‘tkazish
        </h2>
        <div className="flex flex-col w-[90%] h-[730px] m-auto gap-5 overflow-scroll">
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Guruh nomi
            </label>
            <input 
              type="text" 
              className="w-full h-[45px] bg-[#F2EEEE] border-[#C7CAD0] border-[1px] rounded-[5px] text-[22px] px-2"
              
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Guruh holati
            </label>
            <CustomDropdown
              options={teachers}
              placeholder="Tanlang"
              value={selectedTeacher}
              onChange={(value) => setSelectedTeacher(value)}
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Kurs
            </label>
            <CustomDropdown
              options={groups}
              placeholder="Tanlang"
              value={selectedGroup}
              onChange={(value) => setSelectedGroup(value)}
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Ta'lim turi
            </label>
            <CustomDropdown
              options={groups}
              placeholder="Tanlang"
              value={selectedGroup}
              onChange={(value) => setSelectedGroup(value)}
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Boshlanish sanasi
            </label>
            <input 
              type="date"
              className="w-full h-[45px] bg-[#F2EEEE] border-[#C7CAD0] border-[1px] rounded-[5px] text-[22px] px-2"
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Bitkazish sanasi
            </label>
            <input 
              type="date"
              className="w-full h-[45px] bg-[#F2EEEE] border-[#C7CAD0] border-[1px] rounded-[5px] text-[22px] px-2"
            />
          </div>

        </div>

        <div className="flex justify-around items-center gap-4 mt-[25px] w-[60%] m-auto z-10">
          <button
            onClick={onClose}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
          >
            Bekor qilish
          </button>
          <button
            onClick={onConfirm}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;