import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi';
import { RiPencilLine } from 'react-icons/ri';

const OfflineCourses = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    console.log(openDropdown);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const courses = [
        { title: "Korean", color: "bg-green-500", levels: ["Beginner", "Elementary"] },
        { title: "SAT", color: "bg-gray-700", levels: ["Math", "Reading"] },
        { title: "Notiqlik Kursi", color: "bg-gray-300", levels: ["Public Speaking", "Debate"] },
        { title: "English Kids", color: "bg-blue-700", levels: ["Phonics", "Storytelling"] },
        { title: "Logistika", color: "bg-green-500", levels: ["Supply Chain", "Warehouse"] },
        { title: "Tarix", color: "bg-red-500", levels: ["Ancient", "Modern"] },
        { title: "English", color: "bg-blue-500", levels: ["Grammar", "Writing"] },
        { title: "IT", color: "bg-blue-500", levels: ["Programming", "Networking"] },
        { title: "Arab Tili", color: "bg-gray-700", levels: ["Beginner", "Advanced"] },
        { title: "Rus Tili", color: "bg-gray-300", levels: ["Beginner", "Intermediate"] },
        { title: "Yapon Tili", color: "bg-blue-700", levels: ["Hiragana", "Kanji"] },
    ];

    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className='flex gap-8'>
                    <button className="bg-[#0D99FF] text-white w-[254px] h-[66px] rounded-lg flex items-center justify-center gap-2">
                        <CiCirclePlus size={25} />
                        O‘quvchi qo‘shish
                    </button>
                    <div className='flex gap-2'>
                        <button className="bg-[#0D99FF] text-white px-4 py-2 rounded-lg w-32 flex items-center gap-2">
                            <PiArrowCircleUp size={25} />
                            Export
                        </button>
                        <button className="bg-[#0D99FF] text-white px-4 py-2 rounded-lg w-32 flex items-center gap-2">
                            <PiArrowCircleDown size={25} />
                            Import
                        </button>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Qidirish"
                    className="ml-auto border rounded-lg w-[237px] h-btn-h indent-6 bg-white"
                />
            </div>
            <div className="w-full p-8 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className='flex items-center justify-end'>
                    <span className="text-gray-600 flex items-end">Umumiy Soni: {courses.length}</span>
                </div>
                <div className="flex justify-between items-center p-8 border-b text-gray-400">
                    <h2 className="text-lg font-bold">SARLAVXA</h2>
                    <h2 className="text-lg font-bold mr-[335px]">RANG</h2>
                </div>
                {/* Courses */}
                {courses.map((course, index) => (
                    <div key={index} className="border-b">
                        <div className="flex justify-around items-center cursor-pointer py-3 px-4 hover:bg-gray-50">
                            <span>{openDropdown === index ? <GoChevronUp size={30} className='text-black' /> : <GoChevronDown size={30} className='text-black' />}</span>
                            <span
                                className="text-lg h-10 flex-1 ml-2 text-black"
                                onClick={() => toggleDropdown(index)}
                            >{course.title}</span>
                            <div className='flex '>
                                <span className={`w-6 h-6 mr-72 ${course.color} rounded`} />
                                <RiPencilLine className="text-blue-500 size-7 cursor-pointer mr-4" />
                                <FaRegTrashAlt className="text-red-500 size-7 cursor-pointer" />
                            </div>
                        </div>
                        {/* Dropdown (Levels) */}
                        {openDropdown === index && (
                            <div className="bg-gray-50">
                                {course.levels.map((level, idx) => (
                                    <div key={idx} className="pl-8 py-2 border-b text-black last:border-none">
                                        {level}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfflineCourses;
