import { useState } from "react";
import StudentsModal from "./students_modal";
import { IoMdAdd } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";

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

    // Kategoriya qo‘shish yoki yangilash
    const handleSaveHashtag = (newHashtag) => {
        if (editIndex !== null) {
            // 🔄 Eski hashtagni yangilash
            const updatedHashtags = [...hashtags];
            updatedHashtags[editIndex] = newHashtag;
            setHashtags(updatedHashtags);
            setEditIndex(null);
        } else {
            // Yangi hashtag qo‘shish
            setHashtags([...hashtags, newHashtag]);
        }
        setIsOpen(false); // Modalni yopish
    };

    // Edit tugmasini bosganda modal ochiladi
    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(hashtags[index]);
        setIsOpen(true);
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
                                    onClick={() => setHashtags(hashtags.filter((_, i) => i !== index))}
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
