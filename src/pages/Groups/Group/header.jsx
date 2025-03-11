import React, { useState, useRef } from "react";
import arrow_down_black_icon from "../imgs/arrow_down_black_icon.png";
import plus from "../imgs/add_icon.png";
import exprt from "../imgs/export.png";
import AddModal from './Group_addmodal/add_modal'; // AddModal fayli yo‘lini to‘g‘ri tekshiring
import "./style.css";

const Header = () => {
  // Modal holati
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Dropdown menyular holati
  const [is_human_open, set_is_human_open] = useState(false);
  const [is_colors_open, set_is_colors_open] = useState(false);
  const [is_student_open, set_is_student_open] = useState(false);
  const [is_group_open, set_is_group_open] = useState(false);

  // Dropdown qiymatlari
  const [moderator_value, set_moderator_value] = useState("Moderator");
  const [teacher_value, set_teacher_value] = useState("O'qituvchi");
  const [course_value, set_course_value] = useState("Kurs");
  const [colors_value, set_colors_value] = useState("Ranglar bo’yicha");
  
  // Tanlangan talaba (AddModal uchun)
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Ro‘yxatlar
  const humans_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Salima",
  ];

  const students_list = [
    "Falonchi Pistonchiyev",
    "Salima",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
  ];

  const groups_list = [
    "Ingiliz tili",
    "IT",
    "Ko'reys tili",
    "IT Back End",
    "IT Front End",
  ];

  const colors_list = ["Qizil", "Ko'k", "Yashil", "Sariq"];

  // Dropdown tanlash funksiyalari
  const handle_select_human = (human) => {
    set_moderator_value(human);
    set_is_human_open(false);
  };

  const handle_select_student = (student) => {
    set_teacher_value(student);
    setSelectedStudent(student); // Tanlangan talabani saqlash
    set_is_student_open(false);
  };

  const handle_select_group = (group) => {
    set_course_value(group);
    set_is_group_open(false);
  };

  const handle_select_color = (color) => {
    set_colors_value(color);
    set_is_colors_open(false);
  };

  // Vaqt uchun holatlar
  const [startHours, setStartHours] = useState("");
  const [startMinutes, setStartMinutes] = useState("");
  const startMinutesInputRef = useRef(null);

  const [endHours, setEndHours] = useState("");
  const [endMinutes, setEndMinutes] = useState("");
  const endMinutesInputRef = useRef(null);

  // Vaqtni o‘zgartirish funksiyasi
  const handleTimeChange = (value, setter, max, nextInput) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue.length <= 2) {
      if (Number.parseInt(numericValue) > max) {
        setter(max.toString().padStart(2, "0"));
      } else {
        setter(numericValue);
      }
      if (numericValue.length === 2 && nextInput && nextInput.current) {
        nextInput.current.focus();
      }
    }
  };

  // Vaqtning noto‘g‘ri ekanligini tekshirish
  const isStartHoursInvalid = Number.parseInt(startHours) > 23;
  const isStartMinutesInvalid = Number.parseInt(startMinutes) > 59;
  const isEndHoursInvalid = Number.parseInt(endHours) > 23;
  const isEndMinutesInvalid = Number.parseInt(endMinutes) > 59;

  return (
    <>
      <div className="w-[112vw] h-[auto] m-auto flex items-center justify-between">
        {/* Chap tarafdagi tugmalar */}
        <div className="w-[380px] h-[160px] mt-[21px] flex flex-col">
          <div className="w-[100%] h-[50%] flex items-center">
            <div
              className="bg-[#0D99FF] w-[200px] h-[60px] rounded-[50px] flex px-[35px] items-center gap-[15px] duration-300 cursor-pointer hover:scale-[102%] active:scale-[98%]"
              onClick={() => setIsAddModalOpen(true)} // Modalni ochish
            >
              <img
                className="w-[35px]"
                src={plus || "/placeholder.svg"}
                alt="Qo'shish ikonkasi"
              />
              <h1 className="text-white text-[20px]">Qo'shish</h1>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex items-center">
            <div
              className="bg-[#0D99FF] w-[200px] h-[60px] rounded-[50px] flex px-[40px] items-center gap-[19px] duration-300 cursor-pointer hover:scale-[102%] active:scale-[98%]"
            >
              <img
                className="w-[28px]"
                src={exprt || "/placeholder.svg"}
                alt="Export ikonkasi"
              />
              <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">
                Export
              </h1>
            </div>
          </div>
        </div>

        {/* O‘ng tarafdagi elementlar */}
        <div className="w-[85vw]">
          <div className="flex flex-row justify-end gap-[10px] pl-[130px] h-auto pt-[25px]">
            {/* O‘qituvchi dropdown */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center">
              <div
                className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_student_open ? "border-[1.5px]" : "border-[0px]"} rounded-[5px] justify-between ${teacher_value.length > 15 ? "px-[20px]" : "px-[28px]"}`}
                onClick={() => set_is_student_open(!is_student_open)}
              >
                <p
                  className={`font-roboto font-[400] ${teacher_value.length > 15 ? "text-[15px]" : "text-[19px]"} whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {teacher_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_student_open ? "-rotate-180" : ""}`}
                  alt="Pastga strelka"
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_student_open ? `h-[250px] mt-[5px] border-[1.5px] ${students_list.length > 4 ? "overflow-y-scroll" : "overflow-y-hidden"} menu_scroll` : "h-0 border-0"}`}
              >
                <div className="flex justify-center mb-2 pt-[15px]">
                  <input
                    type="text"
                    className="w-[85%] h-[35px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] pl-[20px]"
                    placeholder="Qidirish"
                  />
                </div>
                <ul className="flex flex-col">
                  {students_list.map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${teacher_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_student(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Boshlanish vaqti */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex items-center justify-evenly p-[10px]">
              <p className="text-black whitespace-nowrap text-[19px]">Boshlanish vaqti</p>
              <div className="flex gap-[2px] items-center h-full mt-[3px] font-inter font-[500] text-black text-[18px]">
                <input
                  type="text"
                  id="startHours"
                  value={startHours}
                  onChange={(e) => handleTimeChange(e.target.value, setStartHours, 23, startMinutesInputRef)}
                  className={`w-6 text-center rounded-md ${isStartHoursInvalid ? "bg-red-100" : "bg-white"}`}
                  placeholder="00"
                  maxLength={2}
                />
                <span>:</span>
                <input
                  type="text"
                  id="startMinutes"
                  ref={startMinutesInputRef}
                  value={startMinutes}
                  onChange={(e) => handleTimeChange(e.target.value, setStartMinutes, 59)}
                  className={`w-6 text-center rounded-md ${isStartMinutesInvalid ? "bg-red-100" : "bg-white"}`}
                  placeholder="00"
                  maxLength={2}
                />
              </div>
            </div>

            {/* Tugash vaqti */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex items-center justify-evenly p-[10px]">
              <p className="text-black whitespace-nowrap text-[19px]">Tugash vaqti</p>
              <div className="flex gap-[2px] items-center h-full mt-[3px] font-inter font-[500] text-black text-[18px]">
                <input
                  type="text"
                  id="endHours"
                  value={endHours}
                  onChange={(e) => handleTimeChange(e.target.value, setEndHours, 23, endMinutesInputRef)}
                  className={`w-6 text-center rounded-md ${isEndHoursInvalid ? "bg-red-100" : "bg-white"}`}
                  placeholder="00"
                  maxLength={2}
                />
                <span>:</span>
                <input
                  type="text"
                  id="endMinutes"
                  ref={endMinutesInputRef}
                  value={endMinutes}
                  onChange={(e) => handleTimeChange(e.target.value, setEndMinutes, 59)}
                  className={`w-6 text-center rounded-md ${isEndMinutesInvalid ? "bg-red-100" : "bg-white"}`}
                  placeholder="00"
                  maxLength={2}
                />
              </div>
            </div>

            {/* Kurs dropdown */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center">
              <div
                className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_group_open ? "border-[1.5px]" : "border-[0px]"} rounded-[5px] justify-between ${course_value.length > 15 ? "px-[20px]" : "px-[28px]"}`}
                onClick={() => set_is_group_open(!is_group_open)}
              >
                <p
                  className={`font-roboto font-[400] ${course_value.length > 15 ? "text-[15px]" : "text-[19px]"} whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {course_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_group_open ? "-rotate-180" : ""}`}
                  alt="Pastga strelka"
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_group_open ? `h-[250px] mt-[5px] border-[1.5px] ${groups_list.length > 4 ? "overflow-y-scroll" : "overflow-y-hidden"} menu_scroll` : "h-0 border-0"}`}
              >
                <div className="flex justify-center mb-2 pt-[15px]">
                  <input
                    type="text"
                    className="w-[85%] h-[35px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] pl-[20px]"
                    placeholder="Qidirish"
                  />
                </div>
                <ul className="flex flex-col">
                  {groups_list.map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${course_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_group(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Ikkinchi qator */}
          <div className="flex flex-row justify-end gap-[10px] pl-[130px] h-auto mt-[15px]">
            {/* Moderator dropdown */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative">
              <div
                className={`h-[70px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_human_open ? "border-[1.5px]" : "border-[0px]"} rounded-[5px] justify-between ${moderator_value.length > 15 ? "px-[20px]" : "px-[28px]"}`}
                onClick={() => set_is_human_open(!is_human_open)}
              >
                <p
                  className={`font-roboto font-[400] ${moderator_value.length > 15 ? "text-[15px]" : "text-[19px]"} whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {moderator_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_human_open ? "-rotate-180" : ""}`}
                  alt="Pastga strelka"
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_human_open ? `h-[250px] mt-[5px] border-[1.5px] ${humans_list.length > 4 ? "overflow-y-scroll" : "overflow-y-hidden"} menu_scroll` : "h-0 border-0"}`}
              >
                <div className="flex justify-center mb-2 pt-[15px]">
                  <input
                    type="text"
                    className="w-[85%] h-[35px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] pl-[20px]"
                    placeholder="Qidirish"
                  />
                </div>
                <ul className="flex flex-col">
                  {humans_list.map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${moderator_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_human(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ranglar dropdown */}
            <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative z-10 flex justify-evenly items-center">
              <div
                className={`h-[70px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_colors_open ? "border-[1.5px]" : "border-[0px]"} rounded-[5px] justify-between ${colors_value.length > 15 ? "px-[20px]" : "px-[28px]"}`}
                onClick={() => set_is_colors_open(!is_colors_open)}
              >
                <p
                  className={`font-roboto font-[400] ${colors_value.length > 17 ? "text-[15px]" : "text-[19px]"} whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {colors_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_colors_open ? "-rotate-180" : ""}`}
                  alt="Pastga strelka"
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-9 overflow-hidden transition-all duration-[300ms] ease-out ${is_colors_open ? `h-[250px] mt-[5px] border-[1.5px] ${colors_list.length > 4 ? "overflow-y-scroll" : "overflow-y-hidden"} menu_scroll` : "h-0 border-0"}`}
              >
                <div className="flex justify-center mb-2 pt-[15px]">
                  <input
                    type="text"
                    className="w-[85%] h-[35px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] pl-[20px]"
                    placeholder="Qidirish"
                  />
                </div>
                <ul className="flex flex-col">
                  {colors_list.map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${colors_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_color(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Qidirish maydoni */}
            <input
              type="text"
              className="w-[240px] h-[70px] bg-white rounded-[5px] relative font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
              placeholder="Qidirish"
            />
          </div>
        </div>
      </div>

      {/* AddModal komponenti */}
      {isAddModalOpen && (
        <AddModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          Students={selectedStudent} // Tanlangan talaba AddModalga uzatiladi
        />
      )}
    </>
  );
};

export default Header;