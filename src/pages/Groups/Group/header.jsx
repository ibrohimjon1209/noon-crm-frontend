import React, { useState } from "react";
import arrow_down_black_icon from "../imgs/arrow_down_black_icon.png";
import calendar_icon from "../imgs/calendar_icon.png"
import plus from "../imgs/add_icon.png"
import exprt from "../imgs/export.png"
import imprt from "../imgs/import.png"
import './style.css'

const Header = () => {
    const [is_human_open, set_is_human_open] = useState(false);
    const [is_colors_open, set_is_colors_open] = useState(false);
    const [is_student_open, set_is_student_open] = useState(false);
    const [is_group_open, set_is_group_open] = useState(false);
    const [moderator_value, set_moderator_value] = useState("Moderator");
    const [teacher_value, set_teacher_value] = useState("O'qituvchi");
    const [exercise_value, set_exercise_value] = useState("Topshiriq turi");
    const [calendar_value, set_calendar_value] = useState("Oraliqni tanlang");
    const [course_value, set_course_value] = useState('Kurs');
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

    const groups_list = [
        "Ingiliz tili",
        "IT",
        "Ko'reys tili",
        "IT Back End",
        "IT Front End"
    ]

    const colors_list = [
        "Qizil",
        "Ko'k",
        "Yashil",
        "Sariq"
    ]

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
                    className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${isSelected ? 'bg-[rgba(38,78,134,1)] text-white' : 'hover:bg-[#f0f0f0]'
                        }`}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    const monthNames = [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
        "Iyul", "Avgust", "Sentabr", "Oktyabr", "Noyabr", "Dekabr"
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
    }
    return (
        <>
            <div className="w-[112vw] h-[auto] m-auto flex items-center justify-between">
                <div className="w-[380px] h-[160px] mt-[21px]">
                    <div className="w-[50%] h-[50%] flex justify-around items-center ">
                        <div className="bg-[#0D99FF] w-[170px] h-[60px] ms-[3%] rounded-[50px] flex justify-center items-center gap-[15px] cursor-pointer hover:scale-[1.05] active:scale-[0.95]">
                            <img className="w-[20%]" src={plus || "/placeholder.svg"} alt="" />
                            <h1 className="text-white text-[20px]">Qo'shish</h1>
                        </div>
                    </div>
                    <div className="w-[100%] h-[50%] flex justify-around items-end">
                        <div
                            className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
                        // onClick={() => setIsAddModalOpen(true)}
                        >
                            <img className="w-[20%]" src={exprt || "/placeholder.svg"} alt="" />
                            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Export</h1>
                        </div>
                        <div
                            className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
                        // onClick={() => setIsAddModalOpen(true)}
                        >
                            <img className="w-[20%]" src={imprt || "/placeholder.svg"} alt="" />
                            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Import</h1>
                        </div>
                    </div>

                </div>
                <div className="w-[85vw]">
                    <div
                        className="flex flex-row justify-end  gap-[10px] pl-[130px] h-auto pt-[25px]">

                        <div
                            className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center"
                        >
                            <div
                                className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_student_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${teacher_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
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
                        <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center">
                            <p className="p-[10px]">Boshlanish vaqti</p>
                            <input type="time"/>
                        </div>
                        <div className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center">
                            <p className="p-[10px]">Tugash vaqti</p>
                            <input type="time"/>
                        </div>
                        <div
                            className="w-[240px] h-[70px] bg-white rounded-[5px] relative flex justify-evenly items-center"
                        >
                            <div
                                className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_group_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${course_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
                                onClick={() => set_is_group_open(!is_group_open)}
                            >
                                <p className={`font-roboto font-[400] ${course_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                                    {course_value}
                                </p>
                                <img
                                    src={arrow_down_black_icon}
                                    className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_group_open ? '-rotate-180' : ''}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_group_open ? `h-[250px] mt-[5px] border-[1.5px] ${groups_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                                            className={`px-4 py-2 ${course_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                                            onClick={() => handle_select_group(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-end gap-[10px] pl-[130px] h-auto mt-[15px]">
                        <div
                            className="w-[240px] h-[70px] bg-white rounded-[5px] relative"
                        >
                            <div
                                className={`h-[70px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_human_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${moderator_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
                                onClick={() => set_is_human_open(!is_human_open)}
                            >
                                <p className={`font-roboto font-[400] ${moderator_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                                    {moderator_value}
                                </p>
                                <img
                                    src={arrow_down_black_icon}
                                    className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_human_open ? '-rotate-180' : ''}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_human_open ? `h-[250px] mt-[5px] border-[1.5px] ${humans_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                                            className={`px-4 py-2 ${moderator_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                                            onClick={() => handle_select_human(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="w-[240px] h-[70px] bg-white rounded-[5px] relative z-10 flex justify-evenly items-center "
                        >
                            <div
                                className={`h-[70px] w-[240px] cursor-pointer flex items-center border-[#C5C5C5] ${is_colors_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${colors_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
                                onClick={() => set_is_colors_open(!is_colors_open)}
                            >
                                <p className={`font-roboto font-[400] ${colors_value.length > 17 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                                    {colors_value}
                                </p>
                                <img
                                    src={arrow_down_black_icon}
                                    className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_colors_open ? '-rotate-180' : ''}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-9 overflow-hidden transition-all duration-[300ms] ease-out ${is_colors_open ? `h-[250px] mt-[5px] border-[1.5px] ${humans_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'
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
                                            className={`px-4 py-2 ${colors_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
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
                            className="w-[240px] h-[70px] bg-white rounded-[5px] relative font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
                            placeholder="Qidirish"
                        />
                    </div>

                </div>
            </div></>
    );
};

export default Header;