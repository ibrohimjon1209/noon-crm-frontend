import { useState } from "react";
import StudentsModal from "./students_modal";
import { IoMdAdd } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteModal from "../hashtag/DeleteModal";

const StudentType = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hashtags, setHashtags] = useState([
        "Ism",
        "Talaba",
        "O'quvchi",
        "Abiturient",
        "1-4 sinflar",
    ]);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSaveHashtag = (newHashtag) => {
        if (editIndex !== null) {
            const updatedHashtags = [...hashtags];
            updatedHashtags[editIndex] = newHashtag;
            setHashtags(updatedHashtags);
            setEditIndex(null);
        } else {
            setHashtags([...hashtags, newHashtag]);
        }
        setIsOpen(false);
    };
    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(hashtags[index]);
        setIsOpen(true);
    };

    const confirmDeleteHashtag = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (deleteIndex !== null) {
            setHashtags(hashtags.filter((_, i) => i !== deleteIndex));
        }
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };

    return (
        <div className="p-5 bg-white rounded-lg shadow-md max-w-7xl mr-4">
            <button onClick={() => setIsOpen(true)} className="flex items-center justify-center w-64 gap-2 h-16 rounded-full bg-[#0D99FF] text-gray-50 text-[20px]">
                <IoMdAdd size={25} />
                Kategoria qo'shish
            </button>

            <StudentsModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={handleSaveHashtag}
                editValue={editValue}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
            />

            <div className="mt-4">
                <ul>
                    {hashtags.map((tag, index) => (
                        <li key={index} className="flex justify-between items-center p-4 h-[5rem] border-b">
                            <span className="text-gray-800 t-[15px] font-medium">{tag}</span>
                            <div>
                                <button
                                    onClick={() => handleEditHashtag(index)}
                                    className=" text-gray-800 hover:text-blue-500"
                                >
                                    <RiPencilLine size={25} />
                                </button>

                                <button
                                    onClick={() => confirmDeleteHashtag(index)}
                                    className="ml-2 text-gray-800 hover:text-red-500"
                                >
                                    <FaRegTrashAlt size={25} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentType;
