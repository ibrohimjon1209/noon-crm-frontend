import React, { useState, useEffect } from "react";

const Student_add_modal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [phone, setPhone] = useState("+998");


  const handleChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith("+998")) return;
    if (/^\+998\d*$/.test(value)) {
      setPhone(value);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 30);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="w-full fixed h-[1000px] inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[740px] z-50 transition-all duration-300 ease-out ${
          isAnimating
            ? "translate-y-1 opacity-100"
            : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            Yangi o'quvchi qo'shish
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-[20px] font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" /> 
        <p className="pl-5 text-[18px] pt-3">* Zarur ekanini bildiradi</p>
        <div className="pt-[20px] px-6 flex h-[100%] flex-col w-[100%]">
          <div className="space-y-[10px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Ism*
            </label>
            <input
              type="text"
              className="w-full h-[45px] text-[18px] placeholder:text-[18px] p-2 border border-gray-300 text-black bg-[#F2EEEE] rounded-md"
              required
              placeholder="Ism"
            />
          </div>
          <div className="space-y-[10px] pt-[15px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Familiya
            </label>
            <input
              type="text"
              className="w-full h-[45px] text-[18px] placeholder:text-[18px] p-2 border border-gray-300 text-black bg-[#F2EEEE] rounded-md"
              required
              placeholder="Familiya"
            />
          </div>
          <div className="space-y-[10px] pt-[15px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Telefon raqam
            </label>
            <input
              type="text"
              className="w-full h-[45px] text-[18px] placeholder:text-[18px] p-2 border border-gray-300 text-black bg-[#F2EEEE] rounded-md"
              required
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-[10px] pt-[15px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
              Katigoriyani tanlang
            </label>
            <select name="" id="" className="w-[100%] h-[50px] text-[18px]" defaultValue="">
            <option value="" disabled hidden>Katigoriyani tanlang </option>
              <option value="talaba">Talaba</option>
              <option value="abuturent">Abuturent</option>
              <option value="sinf1-4">1-4 sinf</option>
              <option value="sinf5-10">5-10 sinf</option>
              <option value="sinf2-4">2-4 sinf</option>
              <option value="sinf5-7">5-7 sinf</option>
              <option value="sinf8-11">8-11 sinf</option>
            </select>
          </div>
          <div className="w-[100%] items-center flex justify-end">
            <button
              type="submit"
              className="w-[140px] h-[60px] text-[20px] py-2 px-4 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF]"
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_add_modal;
