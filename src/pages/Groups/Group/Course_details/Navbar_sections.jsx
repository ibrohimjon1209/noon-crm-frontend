import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Students from './Students';
import Assigment from './Assigment';
import Training from './Training';

const NavbarSections = () => {
    const location = useLocation(); // Hozirgi URL’ni olish
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="w-full h-[88px] mt-[30px] rounded-[15px]">
            <div className="flex items-center justify-between">
                <ul className="w-[80%] h-[8%] mt-[50px] flex justify-start gap-[6%] items-center">
                    <li
                        className="rounded-t-lg px-6 py-4 -mt-[5px]"
                        style={{
                            backgroundColor:
                                location.pathname === '/groups/course/students'
                                    ? 'white'
                                    : '#F5F8FA',
                        }}
                    >
                        <Link
                            className="text-[18px] text-[#404040] font-inter font-[600]"
                            to="/groups/course/students"
                        >
                            O'quvchilar
                        </Link>
                        {location.pathname === '/groups/course/students' && (
                            <div className="line-bottom mt-[5px] h-[1px] w-full bg-[#264E86]"></div>
                        )}
                    </li>
                    <li
                        className="rounded-t-lg px-6 py-4 -mt-[10px]"
                        style={{
                            backgroundColor:
                                location.pathname === '/groups/course/assigment'
                                    ? 'white'
                                    : '#F5F8FA',
                        }}
                    >
                        <Link
                            className="text-[18px] text-[#404040] font-inter font-[600] p-5"
                            to="/groups/course/assigment"
                        >
                            Topshiriqlar
                        </Link>
                        {location.pathname === '/groups/course/assigment' && (
                            <div className="line-bottom mt-[5px] h-[1px] w-full bg-[#264E86]"></div>
                        )}
                    </li>
                    <li
                        className="rounded-t-lg py-4 -mt-[12px]    "
                        style={{
                            backgroundColor:
                                location.pathname === '/groups/course/training'
                                    ? 'white'
                                    : '#F5F8FA',
                        }}
                    >
                        <Link
                            className="text-[18px] w-[20px] bg-black text-[#404040] font-inter font-[600]"
                            to="/groups/course/training"
                        >
                            Mashg'ulot biriktirish
                        </Link>
                        {location.pathname === '/groups/course/training' && (
                            <div className="line-bottom mt-[5px] h-[1px] w-full bg-[#264E86]"></div>
                        )}
                    </li>
                </ul>
                {location.pathname === '/groups/course/students' && (
                    <div className="w-[200px] flex items-center gap-3 bg-gray-100 p-2 rounded-lg mt-[30px]">
                        <span className="text-gray-600 text-lg">Arxiv Talabalar</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all"></div>
                        </label>
                    </div>
                )}
            </div>
            <Routes>
                <Route path="/" element={<Students />} />
                <Route path="/students" element={<Students />} />
                <Route path="/assigment" element={<Assigment />} />
                <Route path="/training" element={<Training />} />
            </Routes>
        </div>
    );
};

export default NavbarSections;