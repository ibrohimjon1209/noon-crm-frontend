import React, { useState } from "react";
import arrow_down_black_icon from "../../../assigments/images/arrow_down_black_icon.png";

const ContractFilter = () => {
    const [is_human_open, set_is_human_open] = useState(false);
    const [is_student_open, set_is_student_open] = useState(false);
    const [moderator_value, set_moderator_value] = useState("Moderator");
    const [teacher_value, set_teacher_value] = useState("O'qituvchi");
    const [is_calendar_open, set_is_calendar_open] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

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
        "Falonchi Pistonchiyev"
    ]
    const handle_select_human = (human) => {
        set_moderator_value(human);
        set_is_human_open(false);
    };
    const handle_select_student = (student) => {
        set_teacher_value(student);
        set_is_student_open(false);
    };
      const monthNames = [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
        "Iyul", "Avgust", "Sentabr", "Oktyabr", "Noyabr", "Dekabr"
    ];

    return (
        <div className="flex ">
            <button className="w-[250px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2 mt-6 ml-8">
                Shartnoma yaratish
            </button>
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
                <div
                    className="w-[260px] h-[70px] bg-white rounded-[5px] relative"
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
            </div>
        </div>
    );
};

export default ContractFilter;
