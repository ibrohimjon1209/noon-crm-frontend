import React, { useState, useEffect, useRef } from "react";
import calendar_icon from "./images/calendar_black.png";
import arrow_down_black_icon from "./images/arrow_down_black_icon.png";

const Add_modal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [calendar_value, set_calendar_value] = useState("dd.mm.yyyyy");
  const [exercise_value, set_exercise_value] = useState("Topshiriq turi");
  const [worker_value, set_worker_value] = useState("Xodim");
  const [type_value, set_type_value] = useState("Turi");
  const [is_type_open, set_is_type_open] = useState(false);
  const [is_exercise_open, set_is_exercise_open] = useState(false);
  const [is_calendar_open, set_is_calendar_open] = useState(false);
  const [is_worker_open, set_is_worker_open] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const minutesInputRef = useRef(null);

  const workers_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Salima",
  ];

  const exercises_list = ["1-topshiriq", "2-topshiriq", "3-topshiriq"];
  const types_list = ["O'qituvchi", "Moderator"];

  const handle_select_human = (human) => {
    set_worker_value(human);
    set_is_worker_open(false);
  };

  const handle_select_exercise = (exercise) => {
    set_exercise_value(exercise);
    set_is_exercise_open(false);
  };

  const handle_select_type = (type) => {
    set_type_value(type);
    set_is_type_open(false);
  };

  const handleTimeChange = (value, setter, max, nextInput) => {
    const numericValue = value.replace(/[^0-9]/g, "");

    if (numericValue.length <= 2) {
      setter(numericValue);

      if (Number.parseInt(numericValue) > max) {
        setter(max.toString().padStart(2, "0"));
      }

      if (numericValue.length === 2 && nextInput && nextInput.current) {
        nextInput.current.focus();
      }
    }
  };

  const isHoursInvalid = Number.parseInt(hours) > 23;
  const isMinutesInvalid = Number.parseInt(minutes) > 59;

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

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300); // Match this with the transition duration
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          onClose();
          set_is_calendar_open(false);
        }}
      ></div>
      <div
        className={`relative bg-white rounded-[20px] w-[625px] h-[630px] z-50 transition-all duration-300 ease-out ${
          isAnimating
            ? "translate-y-1 opacity-100"
            : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-8 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            Topshiriq
          </h2>
          <button
            onClick={onClose}
            className="text-black text-[20px] text-black font-roboto font-[800] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="w-full h-full flex flex-col items-center px-10 pt-8 gap-[28px]">
          <div className="w-full flex flex-row gap-[40px]">
            <div className="w-full h-[58px] bg-[#F2EEEE] rounded">
              <div className="w-[253px] h-[55px] bg-transparent relative">
                <div
                  className={`h-[55px] w-[250px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                  onClick={() => set_is_calendar_open(!is_calendar_open)}
                >
                  <p
                    className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {calendar_value}
                  </p>
                  <img
                    src={calendar_icon}
                    className={`w-[33px] h-[33px] object-contain duration-[0.3s]`}
                    alt=""
                  />
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[14] overflow-hidden transition-all duration-[300ms] ease-out ${
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
                  <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[500] leading-[12.1px] text-center text-[#292A34] text-[11.5px] font-medium mb-[10px]">
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
            </div>
            <div className="w-full flex items-center justify-center h-[58px] bg-[#F2EEEE] rounded">
              <div className="w-[82%] h-full flex items-center">
                <div className="flex gap-[2px] items-center h-full w-full font-inter font-[500] text-black text-[18px]">
                  <input
                    type="text"
                    id="hours"
                    value={hours}
                    onChange={(e) =>
                      handleTimeChange(
                        e.target.value,
                        setHours,
                        23,
                        minutesInputRef
                      )
                    }
                    className={`w-6 text-center rounded-md ${
                      isHoursInvalid ? "bg-red-100" : "bg-[#F2EEEE]"
                    }`}
                    placeholder="00"
                    maxLength={2}
                  />
                  <span>:</span>
                  <input
                    type="text"
                    id="minutes"
                    ref={minutesInputRef}
                    value={minutes}
                    onChange={(e) =>
                      handleTimeChange(e.target.value, setMinutes, 59)
                    }
                    className={`w-6 text-center rounded-md ${
                      isMinutesInvalid ? "bg-red-100" : "bg-[#F2EEEE]"
                    }`}
                    placeholder="00"
                    maxLength={2}
                  />
                </div>
                <button
                  className="text-[black] text-[20px] font-inter font-[800]"
                  onClick={() => {
                    setHours(""), setMinutes("");
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_worker_open(!is_worker_open)}
              >
                <p
                  className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {worker_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                    is_worker_open ? "-rotate-180" : ""
                  }`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[13] overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_worker_open
                    ? `h-[100px] mt-[5px] pb-[5px] border-[1.5px] ${
                        workers_list.length > 2
                          ? "overflow-y-scroll"
                          : "overflow-y-hidden"
                      } menu_scroll`
                    : "h-0 border-0"
                }`}
              >
                <ul className="flex flex-col">
                  {workers_list.map((item, index) => (
                    <li
                      className={`px-4 py-2 ${
                        worker_value === item
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
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_exercise_open(!is_exercise_open)}
              >
                <p
                  className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
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
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[12] overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_exercise_open
                    ? `h-[100px] mt-[5px] pb-[5px] border-[1.5px] ${
                        exercises_list.length > 2
                          ? "overflow-y-scroll"
                          : "overflow-y-hidden"
                      } menu_scroll`
                    : "h-0 border-0"
                }`}
              >
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
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_type_open(!is_type_open)}
              >
                <p
                  className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {type_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                    is_type_open ? "-rotate-180" : ""
                  }`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_type_open
                    ? `h-[100px] mt-[5px] pb-[5px] border-[1.5px] ${
                        types_list.length > 2
                          ? "overflow-y-scroll"
                          : "overflow-y-hidden"
                      } menu_scroll`
                    : "h-0 border-0"
                }`}
              >
                <ul className="flex flex-col">
                  {types_list.map((item, index) => (
                    <li
                      className={`px-4 py-2 ${
                        type_value === item
                          ? "bg-[#CFEBFF] text-[#264E86]"
                          : ""
                      } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_type(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE]">
            <input 
            type="text" 
            className="w-full h-full bg-transparent px-5 font-roboto font-[500] text-[19px] leading-[23.44px] text-black" 
            placeholder="Izoh"
            />
          </div>
          <div className="w-[142px] h-[63px] hover:scale-105 active:scale-95 duration-300 bg-[#0D99FF] rounded-[5px] flex justify-center items-center cursor-pointer font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
            Saqlash
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_modal;
