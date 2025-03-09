import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';
import { useFetchData, usePutData } from '../../../hook/useFetchData';
import Loader from '../../Loader/Loader';
import { Delete } from 'lucide-react';
import ConfirmDelModal from '../ConfirmDeleteModal';
import GenericModal from '../GenericModal';
import axios from 'axios';

const Levels = ({activeTab}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const [data, loading, fetchData] = useFetchData("/course-levels");
    const [putData] = usePutData();
    console.log(data);


    const handleSaveHashtag = async (updatedData) => {
        if (editIndex !== null) {
            const courseId = data[editIndex].id; // ID ni olish

            try {
                const updatedCourse = await putData(`/courses/${courseId}/update/`, updatedData);

                // ✅ Ma'lumotlarni oldingilarni o‘zgartirib yangilash
                setData(prevData =>
                    prevData.map(course =>
                        course.id === courseId ? { ...course, ...updatedData } : course
                    )
                );

                fetchData(); // API dan yangi ma’lumotlarni yuklash

            } catch (error) {
                console.error("Tahrirlashda xatolik:", error);
                if (error.response) {
                    console.error("Server javobi:", error.response.data);
                }
            }

            setIsEditModalOpen(false);
            setEditIndex(null);
        }
    };

    const handleDeleteCourse = async () => {
        if (deleteIndex !== null) {
            try {
                const response = await axios.delete(`${URL}/courses/${deleteIndex}/delete/`); // DELETE so‘rov jo‘natish
                console.log("O‘chirish natijasi:", response);

                setData(prevData => prevData.filter(course => course.id !== deleteIndex));

                fetchData(); // API dan yangi ma’lumotlarni yuklash

            } catch (error) {
                console.error("O‘chirishda xatolik:", error.response?.data || error.message);
            }
            setIsDeleteModalOpen(false);
            setDeleteIndex(null);
        }
    };

    const confirmDeleteCourse = (id) => {
        setDeleteIndex(id); // ID ni saqlaymiz
        setIsDeleteModalOpen(true);
    };

    const handleEditHashtag = (id) => {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            setEditIndex(index);
            setEditValue(data[index]);
            setIsEditModalOpen(true);
        }
    };


    return (
        <div className="w-full overflow-x-auto">
            {loading ? (
                <Loader />
            ) : data.length > 0 ? (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-500 border-b">
                            <th className="p-3 text-left">№</th>
                            <th className="p-3 text-left">Turlari</th>
                            <th className="p-3 text-left">Rang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((level, index) => (
                            <tr key={level.id || index} className="border-b text-black text-[20px]">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{level.name}</td>
                                <td className="p-3">
                                    <span
                                        className="w-8 h-8 inline-block rounded-md"
                                        style={{ backgroundColor: level.color || "#3EC483" }}
                                    />
                                </td>
                                <td className="p-3 text-right">
                                    <button
                                        onClick={() => handleEditHashtag(level.id)}
                                        className="text-blue-500 hover:text-blue-700 mr-3">
                                        <RiPencilLine size={25} />
                                    </button>
                                    <button
                                        onClick={() => confirmDeleteCourse(level.id)}
                                        className="text-red-500 hover:text-red-700">
                                        <FaRegTrashAlt size={25} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500 text-xl mt-5">Ma'lumot topilmadi</p>
            )}
            <GenericModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={(updatedData) => handleSaveHashtag(updatedData)}
                editValue={editValue || { name: '', color: '' }}
                onDelete={handleDeleteCourse}
            />
            <ConfirmDelModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteCourse}
            />
        </div>

    );
}

export default Levels;