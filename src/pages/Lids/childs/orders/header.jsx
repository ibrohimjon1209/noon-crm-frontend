import React, { useState } from "react";
import add_icon from "./imgs/add.png";
import export_icon from "./imgs/export.png";
import arrow_down_black_icon from "./imgs/arrow_down_black_icon.png";
import calendar_icon from "./imgs/calendar_icon.png";
import "./style.css";

const Header = ({ set_is_add_modal_open }) => {
  const [is_status_open, set_is_status_open] = useState(false);
  const [is_sub_course_open, set_is_sub_course_open] = useState(false);
  const [is_group_open, set_is_group_open] = useState(false);
  const [is_calendar_open, set_is_calendar_open] = useState(false);
  const [is_course_open, set_is_course_open] = useState(false);
  const [is_moderator_open, set_is_moderator_open] = useState(false);
  const [is_color_open, set_is_color_open] = useState(false);
  const [color_value, set_color_value] = useState("Ranglar bo’yicha");
  const [moderator_value, set_moderator_value] = useState("Moderator");
  const [course_value, set_course_value] = useState("Kurs");
  const [group_value, set_group_value] = useState("Guruh");
  const [status_value, set_status_value] = useState("Status");
  const [sub_course_value, set_sub_course_value] = useState("Subkurs");
  const [calendar_value, set_calendar_value] = useState("Oraliqni tanlang");

  const status_list = [
    "Yangi",
    "Qabul qilindi",
    "Kutyapti",
    "Rad etildi",
    "Transfer qilingan",
  ];
  const sub_courses_list = [];

  const groups_list = [
    "Elementry",
    "Back end",
    "Front end",
    "IT",
    "Ingiliz tili",
  ];

  const courses_list = [
    "Ingiliz tili",
    "Arab tili",
    "Rus tili",
    "Koreys tili",
    "IT",
  ];

  const moderators_list = [
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

  const colors_list = [
    "Bog'landi",
    "Noto'g'ri raqam",
    "Online",
    "Keyinroq bog'lanish",
    "Offline",
  ];

  const handle_select_status = (human) => {
    set_status_value(human);
    set_is_status_open(false);
  };

  const handle_select_sub_course = (course) => {
    set_sub_course_value(course);
    set_is_sub_course_open(false);
  };

  const handle_select_group = (group) => {
    set_group_value(group);
    set_is_group_open(false);
  };

  const handle_select_corse = (course) => {
    set_course_value(course);
    set_is_course_open(false);
  };

  const handle_select_moderator = (moderator) => {
    set_moderator_value(moderator);
    set_is_moderator_open(false);
  };

  const handle_select_color = (color) => {
    set_color_value(color);
    set_is_color_open(false);
  };

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
            set_is_calendar_open(false);
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

  return (
    <div className="w-full h-[175px] flex items-center mt-[12.5px] -mb-[12.5px] justify-between px-[2%]">
      <div className="flex flex-col gap-[10px]">
        <div onClick={() => set_is_add_modal_open(true)} className="bg-[#0D99FF] w-[250px] h-[60px] rounded-[45px] flex items-center justify-start gap-[15px] pl-[15px] cursor-pointer hover:scale-[102%] active:scale-[99%] duration-300">
          <img src={add_icon} alt="add" />
          <p className="text-white font-roboto font-400 text-[20px] leading-[23.44px]">
            Buyurtma qo’shish
          </p>
        </div>
        <div className="bg-[#0D99FF] w-[250px] h-[60px] rounded-[45px] flex items-center justify-start gap-[15px] pl-[15px] cursor-pointer hover:scale-[102%] active:scale-[99%] duration-300">
          <img src={export_icon} alt="export" />
          <p className="text-white font-roboto font-400 text-[20px] leading-[23.44px]">
            Export
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row w-full h-full gap-[10px]">
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_status_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                status_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_status_open(!is_status_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  status_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {status_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_status_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[11] overflow-hidden transition-all duration-[300ms] ease-out ${
                is_status_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      status_list.length > 4
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
                {status_list.map((item, index) => (
                  <li
                    className={`px-4 py-2 ${
                      status_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_status(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* {klasdjl;fkjsad;lkfjas;lkdfj;alskdjf;lkasjd} */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_group_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                group_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_group_open(!is_group_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  group_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {group_value}
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
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[11] overflow-hidden transition-all duration-[300ms] ease-out ${
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
                      group_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_group(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* l;askdjf;lskajdf;l */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] z-[11] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_calendar_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between px-[30px]`}
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
          {/* klajsd;lfkjasl;dkfja;lsdk */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_course_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                course_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_course_open(!is_course_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  course_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {course_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_course_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[11] overflow-hidden transition-all duration-[300ms] ease-out ${
                is_course_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      courses_list.length > 4
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
                {courses_list.map((item, index) => (
                  <li
                    className={`px-4 py-2 ${
                      course_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_corse(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* end */}
        </div>
        <div className="flex flex-row gap-[10px]">
          {/* asdfasdf */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_sub_course_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                sub_course_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_sub_course_open(!is_sub_course_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  sub_course_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {sub_course_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_sub_course_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_sub_course_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      sub_courses_list.length > 4
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
                {sub_courses_list.map((item, index) => (
                  <li
                    className={`px-4 py-2 ${
                      sub_course_value === item
                        ? "bg-[#CFEBFF] text-[#264E86]"
                        : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_sub_course(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* asdfasdf */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_moderator_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                moderator_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_moderator_open(!is_moderator_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  moderator_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {moderator_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_moderator_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_moderator_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      moderators_list.length > 4
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
                {moderators_list.map((item, index) => (
                  <li
                    className={`px-4 py-2 ${
                      moderator_value === item
                        ? "bg-[#CFEBFF] text-[#264E86]"
                        : ""
                    } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                    onClick={() => handle_select_moderator(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* asdfasdf */}
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${
                is_color_open ? "border-[1.5px]" : "border-[0px]"
              } rounded-[5px] justify-between ${
                color_value.length > 17 ? "px-[20px]" : "px-[28px]"
              }`}
              onClick={() => set_is_color_open(!is_color_open)}
            >
              <p
                className={`font-roboto font-[400] ${
                  color_value.length > 17 ? "text-[15px]" : "text-[19px]"
                } whitespace-nowrap leading-[23.44px] text-black`}
              >
                {color_value}
              </p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                  is_color_open ? "-rotate-180" : ""
                }`}
                alt=""
              />
            </div>
            <div
              className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_color_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${
                      colors_list.length > 4
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
                      color_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
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
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
