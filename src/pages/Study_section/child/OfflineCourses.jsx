 import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi';
import { RiPencilLine } from 'react-icons/ri';
import HashtagModal from '../../Settings/Marketing/childs/hashtag/hashtag_modal';
import DeleteModal from '../../Settings/Marketing/childs/hashtag/DeleteModal';

const OfflineCourses = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const [open, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [courses, setCourses] = useState([
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
    ])

    console.log(courses[3].color);


    const handleSaveHashtag = (newCourses) => {
        if (editIndex !== null) {
            const updatedHashtags = [...courses];
            updatedHashtags[editIndex] = { ...updatedHashtags[editIndex], title: newCourses, color: "bg-green-500", levels: ['Boshlangich'] };
            setCourses(updatedHashtags);
            setEditIndex(null);
        } else {
            setCourses([...courses, { title: newCourses, color: "bg-green-500", levels: ['Boshlangich'] }]);
        }
        setIsOpen(false);

    };

    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(courses[index].name);
        setIsOpen(true);
    };

    const confirmDeleteHashtag = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (deleteIndex !== null) {
            setCourses(courses.filter((_, i) => i !== deleteIndex));
        }
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };


    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className='flex gap-8'>
                    <button
                        onClick={() => {
                            setIsOpen(true);
                        }
                        }
                        className="bg-[#0D99FF] text-white taxt-[20px] w-[254px] h-[66px] rounded-lg flex items-center justify-center gap-2">
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
                    className="ml-auto border rounded-lg w-[237px] h-16 indent-6 bg-white"
                />
            </div>
            <div className="w-full p-8 max-h-[805px] mx-auto bg-white shadow-md rounded-lg overflow-y-auto">
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
                                <RiPencilLine onClick={() => handleEditHashtag(index)} className="text-blue-500 size-7 cursor-pointer mr-4" />
                                <FaRegTrashAlt onClick={() => confirmDeleteHashtag(index)} className="text-red-500 size-7 cursor-pointer" />
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

            <HashtagModal
                isOpen={open}
                onClose={() => setIsOpen(false)}
                onSave={handleSaveHashtag}
                // editValue={editIndex !== null ? editValue : ""}
                editValue={editValue}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default OfflineCourses;
