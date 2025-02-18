import React, { useState } from "react";
import arrow_down_black_icon from "../../../Lids/childs/first_lesson/imgs/arrow_down_black_icon.png";
import calendar_icon from "../../../Lids/childs/first_lesson/imgs/calendar_icon.png";
import "../../../Lids/childs/first_lesson/style.css";

const Filter = () => {
  const [is_human_open, set_is_human_open] = useState(false);
  const [is_colors_open, set_is_colors_open] = useState(false);
  const [is_student_open, set_is_student_open] = useState(false);
  const [is_exercise_open, set_is_exercise_open] = useState(false);
  const [is_calendar_open, set_is_calendar_open] = useState(false);
  const [selectedDateOpen, setSelectedDateOpen] = useState(false);
  const [is_group_open, set_is_group_open] = useState(false);
  const [moderator_value, set_moderator_value] = useState("Moderator");
  const [teacher_value, set_teacher_value] = useState("O'qituvchi");
  const [exercise_value, set_exercise_value] = useState("Topshiriq turi");
  const [calendar_value, set_calendar_value] = useState("Oraliqni tanlang");
  const [selectedDate, setSelectedDate] = useState('Sanani tanlang')
  const [course_value, set_course_value] = useState("Kurs");
  const [colors_value, set_colors_value] = useState("Ranglar bo’yicha");

  const humans_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Salima",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
  ];

  const students_list = [
    "Falonchi Pistonchiyev",
    "Salima",
    "Falonchi Pistonchiyeva",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
  ];

  const exercises_list = [
    "Falonchi Pistonchiyev",
    "Salima",
    "Falonchi Pistonchiyeva",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyeva",
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
  ];

  const groups_list = [
    "Ingiliz tili",
    "IT",
    "Ko'reys tili",
    "IT Back End",
    "IT Front End",
  ];

  const colors_list = ["Qizil", "Ko'k", "Yashil", "Sariq"];

  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 0);
    return date.getDate();
  };

  const getStartDayOfMonth = (year, month) => {
    const date = new Date(year, month - 1, 1);
    let day = date.getDay();
    return day === 0 ? 6 : day - 1;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const startDay = getStartDayOfMonth(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayValue = `${String(i).padStart(2, "0")}.${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}.${currentDate.getFullYear()}`;
      const isSelected = calendar_value === dayValue;

      days.push(
        <div
          key={i}
          onClick={() => {
            set_calendar_value(dayValue);
            setSelectedDate(dayValue)
            set_is_calendar_open(false);
            setSelectedDateOpen(false)
          }}
          className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${
            isSelected
              ? "bg-[rgba(38,78,134,1)] text-white"
              : "hover:bg-[#f0f0f0]"
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const handle_select_human = (human) => {
    set_moderator_value(human);
    set_is_human_open(false);
  };

  const handle_select_student = (student) => {
    set_teacher_value(student);
    set_is_student_open(false);
  };

  const handle_select_exercise = (student) => {
    set_exercise_value(student);
    set_is_exercise_open(false);
  };

  const handle_select_group = (group) => {
    set_course_value(group);
    set_is_group_open(false);
  };

  const handle_select_color = (color) => {
    set_colors_value(color);
    set_is_colors_open(false);
  };

  return (
    <div className="w-[98%]">
      <div className="w-full flex-col items-center">
        <div className="flex gap-4 h-[70px] mt-[25px]">
          <button className="w-[150px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.213 3.014c-.241.075-.371.176-.491.38l-.108.184-.011 2.976-.011 2.977-.729-.721c-.413-.409-.802-.758-.897-.807-.351-.177-.732-.087-1.073.254-.34.34-.431.721-.255 1.073.054.107.626.713 1.574 1.668.82.825 1.529 1.558 1.578 1.629.125.183.533.371.804.371s.679-.188.804-.371c.049-.071.758-.804 1.578-1.629.948-.955 1.52-1.561 1.574-1.668.176-.352.085-.733-.255-1.073-.341-.341-.722-.431-1.073-.254-.095.049-.484.399-.898.808l-.73.722v-2.88c0-3.208.003-3.169-.261-3.434-.234-.234-.735-.326-1.12-.205"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
            Import
          </button>
          <button className="w-[150px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.301 3.043c-.15.072-.284.171-.336.247-.048.071-.757.803-1.577 1.628-.948.955-1.52 1.561-1.574 1.668-.176.352-.085.733.255 1.073.341.341.722.431 1.073.254.095-.049.484-.398.897-.807l.729-.721.011 2.977.011 2.976.111.189a.862.862 0 0 0 .3.3c.171.1.225.111.572.111.356 0 .397-.008.578-.12a.76.76 0 0 0 .297-.319l.102-.199.011-2.958.011-2.957.729.721c.413.409.802.758.897.807.351.177.732.087 1.073-.254.34-.34.431-.721.255-1.073-.054-.107-.626-.713-1.574-1.668-.82-.825-1.529-1.557-1.577-1.628-.054-.079-.185-.173-.346-.25-.345-.163-.587-.162-.928.003"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
            Export
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-[10px] h-auto pt-[25px] -mb-[5px]">
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] z-20 relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_calendar_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between px-[25px]`}
              onClick={() => set_is_calendar_open(!is_calendar_open)}
            >
              <img
                src={calendar_icon}
                className={`w-[33px] h-[33px] object-contain duration-[0.3s]`}
                alt=""
              />
              <p
                className={`font-roboto font-[400] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
              >
                {calendar_value}
              </p>
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_calendar_open
                  ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll`
                  : "h-0 border-[0px]"
              }`}
            >
              <div className="flex justify-between items-center p-[22px]">
                <button
                  onClick={() => changeMonth(-1)}
                  className="cursor-pointer"
                >
                  <img
                    src={arrow_down_black_icon}
                    className="w-[25px] h-[25px] object-contain rotate-90"
                    alt=""
                  />
                </button>
                <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                  {monthNames[currentDate.getMonth()]}{" "}
                  <span className="font-[400]">
                    {currentDate.getFullYear()}
                  </span>
                </p>
                <button
                  onClick={() => changeMonth(1)}
                  className="cursor-pointer"
                >
                  <img
                    src={arrow_down_black_icon}
                    className="w-[25px] h-[25px] object-contain -rotate-90"
                    alt=""
                  />
                </button>
              </div>
              <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
              <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[400] leading-[12.1px] text-center text-[#292A34] text-[11.5px] font-medium mb-[10px]">
                <p>Du</p>
                <p>Se</p>
                <p>Ch</p>
                <p>Pa</p>
                <p>Ju</p>
                <p>Sh</p>
                <p>Ya</p>
              </div>
              <div className="grid grid-cols-7 mt-[25px] px-[10px]">
                {renderCalendar()}
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] z-20 relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                selectedDateOpen ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between px-[25px]`}
              onClick={() => setSelectedDateOpen(!selectedDateOpen)}
            >
              <img
                src={calendar_icon}
                className={`w-[33px] h-[33px] object-contain duration-[0.3s]`}
                alt=""
              />
              <p
                className={`font-roboto font-[400] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
              >
                {calendar_value}
              </p>
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                selectedDateOpen
                  ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll`
                  : "h-0 border-[0px]"
              }`}
            >
              <div className="flex justify-between items-center p-[22px]">
                <button
                  onClick={() => changeMonth(-1)}
                  className="cursor-pointer"
                >
                  <img
                    src={arrow_down_black_icon}
                    className="w-[25px] h-[25px] object-contain rotate-90"
                    alt=""
                  />
                </button>
                <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                  {monthNames[currentDate.getMonth()]}{" "}
                  <span className="font-[400]">
                    {currentDate.getFullYear()}
                  </span>
                </p>
                <button
                  onClick={() => changeMonth(1)}
                  className="cursor-pointer"
                >
                  <img
                    src={arrow_down_black_icon}
                    className="w-[25px] h-[25px] object-contain -rotate-90"
                    alt=""
                  />
                </button>
              </div>
              <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
              <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[400] leading-[12.1px] text-center text-[#292A34] text-[11.5px] font-medium mb-[10px]">
                <p>Du</p>
                <p>Se</p>
                <p>Ch</p>
                <p>Pa</p>
                <p>Ju</p>
                <p>Sh</p>
                <p>Ya</p>
              </div>
              <div className="grid grid-cols-7 mt-[25px] px-[10px]">
                {renderCalendar()}
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_group_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                course_value.length > 15 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_group_open(!is_group_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  course_value.length > 15 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {course_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_group_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_group_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      groups_list.length > 4
                        ? "overflow-y-scroll"
                        : "overflow-y-hidden"
                    } menu_scroll`
                  : "h-0 border-0"
              }`}
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
                    className={`px-4 py-2 ${
                      course_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_group(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_human_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                moderator_value.length > 15 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_human_open(!is_human_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  moderator_value.length > 15 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {moderator_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_human_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_human_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      humans_list.length > 4
                        ? "overflow-y-scroll"
                        : "overflow-y-hidden"
                    } menu_scroll`
                  : "h-0 border-0"
              }`}
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
                    className={`px-4 py-2 ${
                      moderator_value === item
                        ? "bg-[#CFEBFF] text-[#264E86]"
                        : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_human(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_student_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                teacher_value.length > 15 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_student_open(!is_student_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  teacher_value.length > 15 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {teacher_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_student_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_student_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      students_list.length > 4
                        ? "overflow-y-scroll"
                        : "overflow-y-hidden"
                    } menu_scroll`
                  : "h-0 border-0"
              }`}
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
                    className={`px-4 py-2 ${
                      teacher_value === item
                        ? "bg-[#CFEBFF] text-[#264E86]"
                        : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_student(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_exercise_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                exercise_value.length > 15 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_exercise_open(!is_exercise_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  exercise_value.length > 15 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {exercise_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_exercise_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_exercise_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      exercises_list.length > 4
                        ? "overflow-y-scroll"
                        : "overflow-y-hidden"
                    } menu_scroll`
                  : "h-0 border-0"
              }`}
            >
              <div className="flex justify-center mb-2 pt-[15px]">
                <input
                  type="text"
                  className="w-[85%] h-[35px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] pl-[20px]"
                  placeholder="Qidirish"
                />
              </div>
              <ul className="flex flex-col">
                {exercises_list.map((item, index) => (
                  <li
                    className={`px-4 py-2 ${
                      exercise_value === item
                        ? "bg-[#CFEBFF] text-[#264E86]"
                        : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_exercise(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px]"
              name=""
              id=""
            />
            <label className="text-[22px]">Muzlatilgan</label>
          </div>
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative z-10 ">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_colors_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                colors_value.length > 15 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_colors_open(!is_colors_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  colors_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {colors_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_colors_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-9 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_colors_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      humans_list.length > 4
                        ? "overflow-y-scroll"
                        : "overflow-y-hidden"
                    } menu_scroll`
                  : "h-0 border-0"
              }`}
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
                    className={`px-4 py-2 ${
                      colors_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_color(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <input
            type="text"
            className="w-[260px] h-[70px] bg-white rounded-[5px] relative font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
            placeholder="Qidirish"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
