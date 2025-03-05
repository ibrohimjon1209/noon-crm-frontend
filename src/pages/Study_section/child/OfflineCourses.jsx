import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi';
import { RiPencilLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import instance from '../../../api/instance';
import GenericModal from '../GenericModal';
import ConfirmDelModal from '../ConfirmDeleteModal';
import { useDeleteData, useFetchData } from '../../../hook/useFetchData';


const OfflineCourses = () => {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null);

    const navigate = useNavigate();

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const [data, loading, fetchData, setData] = useFetchData("/courses");  // API dan ma'lumotlarni olish, Get uchun.
    const [deleteData, deleteLoading] = useDeleteData(); // O‘chirish hooki
    console.log(data);


    const course_levels = data?.course_levels || [];

    // Kursni tahrirlash
    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(data[index].name);
        setIsEditModalOpen(true);
    };

    const handleSaveHashtag = async (newName) => {
        if (editIndex !== null) {
            try {
                await instance.put(`/courses/${data[editIndex].id}`, { name: newName });
                fetchData(); // API dan qayta yuklash
            } catch (error) {
                console.error("Tahrirlashda xatolik:", error);
            }
            setIsEditModalOpen(false);
            setEditIndex(null);
        }
    };

    // Kursni o‘chirish
    const confirmDeleteCourse = (id) => {
        setDeleteIndex(id); // ID ni saqlaymiz
        setIsDeleteModalOpen(true);
    };

    const handleDeleteCourse = async () => {
        if (deleteIndex !== null) {
            try {
                await deleteData(`/courses/${deleteIndex}/delete`);
                setData((prevData) => prevData.filter(course => course.id !== deleteIndex)); // UI dan o‘chiramiz
            } catch (error) {
                console.error("O‘chirishda xatolik:", error);
            }
            setIsDeleteModalOpen(false);
            setDeleteIndex(null);
        }
    };

    const handleSelectLanguage = (level) => {
        navigate("/study_section/tabsComponent");
    };

    const handleAddCourse = () => {
        navigate("/study_section/addCourse");
    };

    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className='flex gap-8'>
                    <button
                        onClick={handleAddCourse}
                        className="bg-[#0D99FF] text-white text-[20px] w-[254px] h-[66px] rounded-lg flex items-center justify-center gap-2">
                        <CiCirclePlus size={25} />
                        Kurs qo‘shish
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

            {/* Kurslar jadvali */}
            <div className="w-full p-8 max-h-[805px] mx-auto bg-white shadow-md rounded-lg overflow-y-auto">
                <div className="flex justify-between items-center p-8 border-b text-gray-400">
                    <h2 className="text-lg font-bold">SARLAVHA</h2>
                    <h2 className="text-lg font-bold mr-[335px]">RANG</h2>
                </div>

                {/* Courses */}
                {loading ? (
                    <p>Yuklanmoqda...</p>
                ) : (
                    data?.map((course, index) => (
                        <div key={index} className="border-b">
                            <div className="flex justify-around items-center cursor-pointer py-3 px-4 hover:bg-gray-50">
                                <span onClick={() => toggleDropdown(index)}>
                                    {openDropdown === index ? (
                                        <GoChevronUp size={30} className='text-black' />
                                    ) : (
                                        <GoChevronDown size={30} className='text-black' />
                                    )}
                                </span>
                                <span
                                    onClick={() => handleSelectLanguage(course.levels)}
                                    className="flex items-center text-lg h-10 flex-1 ml-2 text-black"
                                >
                                    {course.name}
                                </span>

                                {/* <span className="px-2 py-1"rounded style={{ backgroundColor: course.color }}>
                                    {course.color}
                                </span> */}


                                <div className='flex '>
                                    <span className={`w-6 h-6 mr-72 ${course.color} rounded`} />
                                    <RiPencilLine
                                        onClick={() => handleEditHashtag(index)}
                                        className="text-blue-500 size-7 cursor-pointer mr-4"
                                    />
                                    <FaRegTrashAlt
                                        onClick={() => confirmDeleteCourse(course.id)}
                                        // onClick={() => confirmDeleteCourse(index)}
                                        className="text-red-500 size-7 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {openDropdown === index && (
                                <div className="bg-gray-50">
                                    {course_levels?.map((level, idx) => (
                                        <div key={idx} className="pl-8 py-2 border-b text-black last:border-none">
                                            {level.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Modal oynalar */}
            <GenericModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleSaveHashtag}
                editValue={editValue}
                onDelete={handleDeleteCourse}
            />
            <ConfirmDelModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteCourse}
            />
        </div>
    );
};

export default OfflineCourses;

