import React, { useState } from 'react';
import arrow_down_black_icon from "../Finance/Action/Cassa/Images/arrow_down_black_icon.png";
import { Link, Route, Routes } from 'react-router-dom';
import Transaction_history from './Childs/Transaction_history';
import Student_payment from './Childs/Student_payment';
import Avans_history from './Childs/Avans_history';
import Unpayed_payment from './Childs/Unpayed_payment';
import History_unpay from './Childs/History_unpay';
import Action_history from './Childs/Action_history';
import { Note } from '@mui/icons-material';
import { Rating } from '@mui/material';
import Work_time from './Childs/Work_time';
import Work_time_history from './Childs/Work_time_history';

const Nav_profile_main = () => {
    const [is_student_open, set_is_student_open] = useState(false);
    const [is_group_open, set_is_group_open] = useState(false);
    const [student_value, set_student_value] = useState("O'qituvchi");
    const [group_value, set_group_value] = useState("Guruh");
    const [selectedLink, setSelectedLink] = useState('/profile/transaction'); // Default selected link

    const students_list = [
        "Falonchi Pistonchiyev",
        "Salima",
        "Falonchi Pistonchiyeva",
        "Diyorbek Omonboyev"
    ];

    const groups_list = [
        "Guruh 1",
        "Guruh 2",
        "Guruh 3",
        "Guruh 4"
    ];

    const handle_select_student = (student) => {
        set_student_value(student);
        set_is_student_open(false);
    };

    const handle_group_student = (group) => {
        set_group_value(group);
        set_is_group_open(false);
    };

    const handleLinkClick = (path) => {
        setSelectedLink(path);
    };

    return (
        <div>
            <div className='mt-[20px] flex justify-between'>
                <div className='flex gap-x-[12px] gap-y-[15px] w-[1031px] flex-wrap'>
                    <Link to="/profile/transaction" onClick={() => handleLinkClick('/profile/transaction')}>
                        <div className={`w-[203px] h-[53px] rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/transaction' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/transaction' ? 'text-[#0D99FF]' : 'text-black'}`}>Tranzaksiylar tarixi</h1>
                        </div>
                    </Link>

                    <Link to="/profile/student_payment" onClick={() => handleLinkClick('/profile/student_payment')}>
                        <div className={`w-[214px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/student_payment' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/student_payment' ? 'text-[#0D99FF]' : 'text-black'}`}>O’quvchilar to’lovlari</h1>
                        </div>
                    </Link>

                    <Link to="/profile/avans_history" onClick={() => handleLinkClick('/profile/avans_history')}>
                        <div className={`w-[140px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/avans_history' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/avans_history' ? 'text-[#0D99FF]' : 'text-black'}`}>Avans tarixi</h1>
                        </div>
                    </Link>

                    <Link to="/profile/unpaid_history" onClick={() => handleLinkClick('/profile/unpaid_history')}>
                        <div className={`w-[199px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/unpaid_history' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/unpaid_history' ? 'text-[#0D99FF]' : 'text-black'}`}>To’lanmagan tarixi</h1>
                        </div>
                    </Link>

                    <Link to="/profile/unpaid_payment" onClick={() => handleLinkClick('/profile/unpaid_payment')}>
                        <div className={`w-[226px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/unpaid_payment' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/unpaid_payment' ? 'text-[#0D99FF]' : 'text-black'}`}>To’lanmagan to’lovlar</h1>
                        </div>
                    </Link>

                    <Link to="/profile/action_history" onClick={() => handleLinkClick('/profile/action_history')}>
                        <div className={`w-[178px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/action_history' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/action_history' ? 'text-[#0D99FF]' : 'text-black'}`}>Harakatlar tarixi</h1>
                        </div>
                    </Link>

                    <Link to="/profile/note" onClick={() => handleLinkClick('/profile/note')}>
                        <div className={`w-[105px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/note' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/note' ? 'text-[#0D99FF]' : 'text-black'}`}>Eslatma</h1>
                        </div>
                    </Link>

                    <Link to="/profile/rating" onClick={() => handleLinkClick('/profile/rating')}>
                        <div className={`w-[98px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/rating' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/rating' ? 'text-[#0D99FF]' : 'text-black'}`}>Reyting</h1>
                        </div>
                    </Link>

                    <Link to="/profile/work_time" onClick={() => handleLinkClick('/profile/work_time')}>
                        <div className={`w-[110px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/work_time' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/work_time' ? 'text-[#0D99FF]' : 'text-black'}`}>Ish soati</h1>
                        </div>
                    </Link>

                    <Link to="/profile/work_time_history" onClick={() => handleLinkClick('/profile/work_time_history')}>
                        <div className={`w-[163px] h-[53px] hover:bg-[#CFEBFF] transition-all duration-300 active:scale-95 rounded-[6px] flex justify-center items-center ${selectedLink === '/profile/work_time_history' ? 'bg-[#CFEBFF]' : 'bg-[#FFFFFF]'}`}>
                            <h1 className={`font-roboto font-[400] text-[20px] leading-[23.44px] ${selectedLink === '/profile/work_time_history' ? 'text-[#0D99FF]' : 'text-black'}`}>Ish soati tarixi</h1>
                        </div>
                    </Link>
                </div>

                <div className='flex gap-[12px]'>
                    <div className="w-[214px] h-[53px] bg-white rounded-[5px] relative">
                        <div
                            className={`h-[53px] w-[214px] cursor-pointer flex items-center border-[#C5C5C5] ${is_group_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${group_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
                            onClick={() => set_is_group_open(!is_group_open)}
                        >
                            <p className={`font-roboto font-[500] ${group_value.length > 15 ? 'text-[15px]' : 'text-[19px]'} whitespace-nowrap leading-[23.44px] text-black`}>
                                {group_value}
                            </p>
                            <img
                                src={arrow_down_black_icon}
                                className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_group_open ? '-rotate-180' : ''}`}
                                alt=""
                            />
                        </div>
                        <div
                            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_group_open ? `h-[250px] mt-[5px] border-[1.5px] ${groups_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'}`}
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
                                        className={`px-4 py-2 ${group_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                                        onClick={() => handle_group_student(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-[214px] h-[53px] bg-white rounded-[5px] relative">
                        <div
                            className={`h-[53px] w-[214px] cursor-pointer flex items-center border-[#C5C5C5] ${is_student_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between ${student_value.length > 15 ? 'px-[20px]' : 'px-[28px]'}`}
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
                            className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_student_open ? `h-[250px] mt-[5px] border-[1.5px] ${students_list.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'} menu_scroll` : 'h-0 border-0'}`}
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
                                        className={`px-4 py-2 ${student_value === item ? 'bg-[#CFEBFF] text-[#264E86]' : ''} hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
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

            <Routes>
                <Route path="/transaction" element={<Transaction_history />} />
                <Route path="/student_payment" element={<Student_payment />} />
                <Route path="/avans_history" element={<Avans_history />} />
                <Route path="/unpaid_history" element={<History_unpay />} />
                <Route path="/unpaid_payment" element={<Unpayed_payment />} />
                <Route path="/action_history" element={<Action_history />} />
                <Route path="/note" element={<Note />} />
                <Route path="/rating" element={<Rating />} />
                <Route path="/work_time" element={<Work_time />} />
                <Route path="/work_time_history" element={<Work_time_history />} />
            </Routes>
        </div>
    );
}

export default Nav_profile_main;
