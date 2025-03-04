import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { RiPencilLine } from 'react-icons/ri';
// import HashtagModal from '../../Settings/Marketing/childs/hashtag/hashtag_modal';
// import DeleteModal from '../../Settings/Marketing/childs/hashtag/DeleteModal';

const TransactionTable = () => {
    const [open, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [category, setcategory] = useState([
        { id: 1, name: "Aniq Fanlar" },
        { id: 2, name: "Tabiy Fanlar" },
        { id: 3, name: "Ijtimoiy Fanlar" },
        { id: 4, name: "Tillar" },
        { id: 5, name: "It" },
    ]);

    const handleSaveHashtag = (newCategory) => {
        if (editIndex !== null) {
            const updatedHashtags = [...category];
            updatedHashtags[editIndex] = { ...updatedHashtags[editIndex], name: newCategory };
            setcategory(updatedHashtags);
            setEditIndex(null);
        } else {
            setcategory([...category, { id: Date.now(), name: newCategory }]);
        }
        setIsOpen(false);
    };

    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(category[index].name);
        setIsOpen(true);
    };

    const confirmDeleteHashtag = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (deleteIndex !== null) {
            setcategory(category.filter((_, i) => i !== deleteIndex));
        }
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };

    return (
        <div className="w-full p-6">2
            <div className="bg-white shadow-md rounded-lg max-h-[770px] overflow-y-auto mt-4 p-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b h-[4rem]">
                            <th className="py-3 px-4 text-left text-gray-800 font-semibold">№</th>
                            <th className="py-3 text-left text-gray-800 font-semibold">SARLAVXA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((hashtag, index) => (
                            <tr key={hashtag.id} className=" border-b hover:bg-gray-50 ">
                                <td className="h-[5rem] py-3 px-4 text-gray-800">{index + 1}</td>
                                <td className="py-3 text-gray-800 text-base font-medium">{hashtag.name}</td>
                                <td className="py-3 px-6 text-right space-x-2">
                                    <button className="text-blue-700 hover:text-blue-500">
                                        <RiPencilLine className='size-7' onClick={() => handleEditHashtag(index)} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-500">
                                        <FaRegTrashAlt className='size-7' onClick={() => confirmDeleteHashtag(index)} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <HashtagModal
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
            /> */}


        </div>
    );
}

export default TransactionTable;
