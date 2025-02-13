import React, { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import HashtagModal from "../hashtag/hashtag_modal";
import DeleteModal from "./DeleteModal";

const HashtagTable = () => {

    const [open, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [hashtags, setHashtags] = useState([
        { id: 1, name: "Chegirmali (for Staff)" },
        { id: 2, name: "Kitob berildi (Elementary)" },
        { id: 3, name: "Kitob berildi (Pre Inter)" },
        { id: 4, name: "Kitob berildi (CEFR)" },
        { id: 5, name: "Kitob berildi (IELTS A)" },
    ]);

    const handleSaveHashtag = (newHashtag) => {
        if (editIndex !== null) {
            const updatedHashtags = [...hashtags];
            updatedHashtags[editIndex] = { ...updatedHashtags[editIndex], name: newHashtag };
            setHashtags(updatedHashtags);
            setEditIndex(null);
        } else {
            setHashtags([...hashtags, { id: Date.now(), name: newHashtag }]);
        }
        setIsOpen(false);
    };
    console.log(editValue);

    // Edit tugmasini bosganda modal ochiladi
    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(hashtags[index].name);
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
        <div className="max-w-7xl mr-4">
            <button
                onClick={() => {
                    setIsOpen(true);
                }
                }
                className="flex items-center justify-center gap-2 w-64 h-16 rounded-full bg-[#0D99FF] text-gray-50 text-[20px]">
                <IoMdAdd size={25} />
                Hashtag qo'shish
            </button>

            <div className="bg-white shadow-md rounded-lg min-h-[700px] mt-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b h-[4rem]">
                            <th className="py-3 px-4 text-left text-gray-800 font-semibold">№</th>
                            <th className="py-3 text-left text-gray-800 font-semibold">Hashtag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hashtags.map((hashtag, index) => (
                            <tr key={hashtag.id} className="border-b hover:bg-gray-50">
                                <td className="h-[5rem] py-3 px-4 text-gray-800">{index + 1}</td>
                                <td className="py-3 text-gray-800 text-base font-medium">{hashtag.name}</td>
                                <td className="py-3 px-6 text-right space-x-2">
                                    <button className="text-gray-800 hover:text-blue-500">
                                        <RiPencilLine size={25} onClick={() => handleEditHashtag(index)} />
                                    </button>
                                    <button className="text-gray-800 hover:text-red-500">
                                        <FaRegTrashAlt size={25} onClick={() => confirmDeleteHashtag(index)} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default HashtagTable;
