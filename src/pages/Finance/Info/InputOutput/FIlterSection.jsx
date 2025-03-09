import { useState } from "react";
import arrow_down_black_icon from "../../../assigments/images/arrow_down_black_icon.png";
import calendar_icon from "../../../assigments/images/calendar_icon.png";
// import * as XLSX from "xlsx";
import { BiExport } from "react-icons/bi";




const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("Kirim");
  const tabs = ["Kirim", "Chiqim", "Vaucher"];
  const [is_human_open, set_is_human_open] = useState(false);
  const [is_student_open, set_is_student_open] = useState(false);
  const [moderator_value, set_moderator_value] = useState("Kassa");
  const [teacher_value, set_teacher_value] = useState("To'lov turi");
  const [calendar_value, set_calendar_value] = useState("Oraliqni tanlang");
  const [is_calendar_open, set_is_calendar_open] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktyabr", "Noyabr", "Dekabr"
  ];
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
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const startDay = getStartDayOfMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayValue = `${String(i).padStart(2, '0')}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${currentDate.getFullYear()}`;
      const isSelected = calendar_value === dayValue;

      days.push(
        <div
          key={i}
          onClick={() => {
            set_calendar_value(dayValue);
            set_is_calendar_open(false);
          }}
          className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${isSelected ? 'bg-[rgba(38,78,134,1)] text-white' : 'hover:bg-[#f0f0f0]'}`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const humans_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Salima",
  ];

  const students_list = [
   "Naqd",
   "Plastik",
   "Terminal",
   "Payme",
   "Click",
   "Uzum",
  ]
  const handle_select_human = (human) => {
    set_moderator_value(human);
    set_is_human_open(false);
  };
  const handle_select_student = (student) => {
    set_teacher_value(student);
    set_is_student_open(false);
  };

//   const downloadExcel = (data) => {
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Jadval");
//   XLSX.writeFile(workbook, "table-data.xlsx");
// };

// // ⬇️ Tugma bosilganda chaqirish ⬇️
// <button onClick={() => downloadExcel(tableData)}>Excel yuklash</button>

  return (
    <div>
      <div className="flex bg-gray-100 p-1 rounded-xl mt-4 ml-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-colors duration-200 ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-start gap-4 p-4 ">
        <div className="flex items-center justify-between">
          <button className="w-[250px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2 mt-6 ml-8">
          <BiExport className="text-[25px] text-white mr-4" />
            Export
          </button>
          <div className="flex flex-row justify-end pr-[2%] gap-[10px] pl-[130px] h-[95px] pt-[25px] -mb-[5px]">
            <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
              <div
                className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_human_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${moderator_value.length > 15 ? "px-[20px]" : "px-[28px]"
                  }`}
                onClick={() => set_is_human_open(!is_human_open)}
              >
                <p
                  className={`font-roboto font-[400] ${moderator_value.length > 15 ? "text-[15px]" : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                >
                  {moderator_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_human_open ? "-rotate-180" : ""
                    }`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_human_open
                  ? `h-[250px] mt-[5px] border-[1.5px] ${humans_list.length > 4
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
                      className={`px-4 py-2 ${moderator_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                        } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_human(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[320px] h-[70px] bg-white rounded-[5px] relative">
              <div className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_calendar_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_calendar_open(!is_calendar_open)}>
                <img src={calendar_icon} className={`w-[33px] h-[33px] object-contain duration-[0.3s]`} alt="" />
                <p className={`font-roboto font-[400] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                  {calendar_value}
                </p>
              </div>
              <div className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_calendar_open ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll` : 'h-0 border-[0px]'}`}>
                <div className="flex justify-between items-center p-[22px]">
                  <button onClick={() => changeMonth(-1)} className="cursor-pointer">
                    <img src={arrow_down_black_icon} className="w-[25px] h-[25px] object-contain rotate-90" alt="" />
                  </button>
                  <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                    {monthNames[currentDate.getMonth()]} <span className="font-[400]">{currentDate.getFullYear()}</span>
                  </p>
                  <button onClick={() => changeMonth(1)} className="cursor-pointer">
                    <img src={arrow_down_black_icon} className="w-[25px] h-[25px] object-contain -rotate-90" alt="" />
                  </button>
                </div>
                <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
                <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[400] leading-[12.1px] text-center text-[#292A34] text-[11.5px] mb-[10px]">
                  <p>Du</p><p>Se</p><p>Ch</p><p>Pa</p><p>Ju</p><p>Sh</p><p>Ya</p>
                </div>
                <div className="grid grid-cols-7 mt-[25px] px-[10px]">
                  {renderCalendar()}
                </div>
              </div>
            </div>
            <div
              className="w-[320px] h-[70px] bg-white rounded-[5px] relative"
            >
              <div
                className={`h-[70px] w-[320px] cursor-pointer flex items-center border-[#C5C5C5] ${is_student_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${teacher_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
                onClick={() => set_is_student_open(!is_student_open)}
              >
                <p className={`font-roboto font-[400] ${teacher_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                  {teacher_value}
                </p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_student_open ? '-rotate-180' : ''}`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_student_open ? `h-[250px] mt-[5px] border-[1.5px] ${students_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                      className={`px-4 py-2 ${teacher_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_student(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
