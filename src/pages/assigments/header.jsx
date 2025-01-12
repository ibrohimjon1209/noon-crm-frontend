import React, { useState } from "react";
import filter_icon from "./images/filter_icon.png";
import arrow_down_icon from "./images/arrow_down_icon.png";
import arrow_down_black_icon from "./images/arrow_down_black_icon.png";
import add_icon from "./images/add_icon.png";
import './style.css'

const Header = ({is_filter_open, set_is_filter_open}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [is_human_open, set_is_human_open] = useState(false);
    const [is_student_open, set_is_student_open] = useState(false);
    const [is_exercise_open, set_is_exercise_open] = useState(false);
    const [is_calendar_open, set_is_calendar_open] = useState(false);
    const [is_group_open, set_is_group_open] = useState(false);
    const [human_value, set_human_value] = useState("Mas'ul shaxs");
    const [student_value, set_student_value] = useState("O'quvchi");
    const [exercise_value, set_exercise_value] = useState("Topshiriq turi");

    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];

    const week_days = [
        'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'
    ];

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
        "Falonchi Pistonchiyeva"
    ]

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
        "Falonchi Pistonchiyev"
    ]

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
        "Falonchi Pistonchiyev"
    ]

    const [currentDate, setCurrentDate] = useState(new Date());
  
    // Oy va yilni o'zgartirish
    const changeMonth = (increment) => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + increment);
      setCurrentDate(newDate);
    };
  
    // Kalendarni yaratish
    const getDaysInMonth = (year, month) => {
      const date = new Date(year, month, 0);
      return date.getDate();
    };
  
    const getStartDayOfMonth = (year, month) => {
      const date = new Date(year, month, 1);
      return date.getDay(); // 0 = Sunday, 1 = Monday, ...
    };
  
    const renderCalendar = () => {
      const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
      const startDay = getStartDayOfMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
      const days = [];
  
      // Kalendar boshidan oldin bo'sh kunlarni qo'shish
      for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
      }
  
      // Oydagi kunlarni qo'shish
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(
          <div key={i} className="text-center text-[11px] font-medium py-[10px] cursor-pointer rounded-[5px] hover:bg-[#f0f0f0]">
            {i}
          </div>
        );
      }
  
      return days;
    };
  
    // Oylik nomlarni o'zbekcha qilish
    const monthNames = [
      "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", 
      "Iyul", "Avgust", "Sentabr", "Oktyabr", "Noyabr", "Dekabr"
    ];

    const handle_select_human = (human) => {
        set_human_value(human);
        set_is_human_open(false);
    };

    const handle_select_student = (student) => {
        set_student_value(student);
        set_is_student_open(false);
    };

    const handle_select_exercise = (student) => {
        set_exercise_value(student);
        set_is_exercise_open(false);
    };

    const handle_date_change = (date) => {
        setSelectedDate(date);
        set_is_calendar_open(false);
    };

    return (
        <>
        <div className="w-[100%] px-[2%] flex flex-row justify-between items-baseline">
            <h1 className="font-[roboto] font-[100] text-[20px] leading-[23.44px] text-[#264E86]">Topshiriqlar</h1>
            <div className="flex flex-row gap-[10px]">
            <div 
                className="w-[177px] h-[55px] bg-[#0D99FF] rounded-[5px] flex items-center justify-between px-[15px] cursor-pointer"
                onClick={() => {
                    set_is_filter_open(!is_filter_open);
                    set_is_human_open(false);
                    set_is_student_open(false);
                    set_is_exercise_open(false);
                }}
            >
                <img src={filter_icon} alt="" className="w-[31px] h-[31px] object-contain"/>
                <p className="font-[roboto] font-[600] text-[20px] leading-[23.44px] text-white">Filtr</p>
                <img src={arrow_down_icon} className={is_filter_open ? "w-[31px] h-[31px] object-contain -rotate-180 duration-[0.3s]" : "w-[31px] h-[31px] object-contain duration-[0.3s]"} alt="" />
            </div>
            <div className="w-[177px] h-[55px] bg-[#0D99FF] rounded-[5px] flex items-center justify-start pl-[15px] gap-[20px] cursor-pointer">
                <img src={add_icon} alt="" />
                <p className="font-[roboto] font-[600] text-[20px] leading-[23.44px] text-white">Qo’shish</p>
            </div>
            </div>
        </div>
        <div 
        className={`flex flex-row gap-[10px] pl-[130px] transition-all duration-[300ms] ease-out ${
            is_filter_open ? "translate-y-0 h-auto pt-[25px] -mb-[5px]" : "h-0 overflow-hidden"
        }`}
        >
        <div 
        className="w-[240px] h-[55px] bg-white rounded-[5px] relative" 
        >   
            <div
            className={`h-[55px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_human_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${human_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
            onClick={() => set_is_human_open(!is_human_open)}
            >
            <p className={`font-roboto font-[500] ${human_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                {human_value}
            </p>
            <img 
                src={arrow_down_black_icon} 
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_human_open ? '-rotate-180' : ''}`} 
                alt="" 
            />
            </div>
            <div 
            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] border-[1.5px] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                is_human_open ? `h-[250px] mt-[5px] ${ humans_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                className={`px-4 py-2 ${human_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                onClick={() => handle_select_human(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        </div>
        </div>
        <div
        className="w-[240px] h-[55px] bg-white rounded-[5px] relative" 
        >   
            <div
            className={`h-[55px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_student_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${student_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
            onClick={() => set_is_student_open(!is_student_open)}
            >
            <p className={`font-roboto font-[500] ${student_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                {student_value}
            </p>
            <img 
                src={arrow_down_black_icon} 
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_student_open ? '-rotate-180' : ''}`} 
                alt="" 
            />
            </div>
            <div 
            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] border-[1.5px] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
            is_student_open ? `h-[250px] mt-[5px] ${ students_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                className={`px-4 py-2 ${student_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                onClick={() => handle_select_student(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        </div>
        </div>
        <div
        className="w-[240px] h-[55px] bg-white rounded-[5px] relative" 
        >   
            <div
            className={`h-[55px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_exercise_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${exercise_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
            onClick={() => set_is_exercise_open(!is_exercise_open)}
            >
            <p className={`font-roboto font-[500] ${exercise_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                {exercise_value}
            </p>
            <img 
                src={arrow_down_black_icon} 
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_exercise_open ? '-rotate-180' : ''}`} 
                alt="" 
            />
            </div>
            <div 
            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] border-[1.5px] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
            is_exercise_open ? `h-[250px] mt-[5px] ${ exercises_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                className={`px-4 py-2 ${exercise_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                onClick={() => handle_select_exercise(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        </div>
        </div>
        {/* asd */}
        <div
        className="w-[240px] h-[55px] bg-white rounded-[5px] relative" 
        >   
            <div
            className={`h-[55px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_exercise_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${exercise_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
            onClick={() => set_is_exercise_open(!is_exercise_open)}
            >
            <p className={`font-roboto font-[500] ${exercise_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                {exercise_value}
            </p>
            <img 
                src={arrow_down_black_icon} 
                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_exercise_open ? '-rotate-180' : ''}`} 
                alt="" 
            />
            </div>
            <div 
            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] border-[1.5px] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
            is_exercise_open ? `h-[250px] mt-[5px] ${ exercises_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
            }`}
            >   
        <div className="flex justify-between items-center p-[15px]">
        <button onClick={() => changeMonth(-1)} className="cursor-pointer">
          <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain rotate-90" alt="" />
        </button>
        <p className="font-bold text-[15px]">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</p>
        <button onClick={() => changeMonth(1)} className="cursor-pointer">
          <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain -rotate-90" alt="" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-[11px] font-medium mb-[10px]">
        <p>Du</p>
        <p>Se</p>
        <p>Ch</p>
        <p>Pa</p>
        <p>Ju</p>
        <p>Sh</p>
        <p>Ya</p>
      </div>

      <div className="grid grid-cols-7 gap-[5px] p-[10px]">
        {renderCalendar()}
      </div>
        </div>
        </div>
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[28px]">
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    Guruh
                </p>
                <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
            </div>
        </div>
        </>
    );
};

export default Header;