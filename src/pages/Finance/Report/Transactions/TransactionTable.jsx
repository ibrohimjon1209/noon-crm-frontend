import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { RiPencilLine } from 'react-icons/ri';
// import HashtagModal from '../../Settings/Marketing/childs/hashtag/hashtag_modal';
// import DeleteModal from '../../Settings/Marketing/childs/hashtag/DeleteModal';
import { useNavigate } from 'react-router-dom';

const TransactionTable = () => {
    const [open, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const navigate = useNavigate();

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
        <div className="w-full p-6">
            <div className="bg-white shadow-md rounded-lg max-h-[770px] overflow-y-auto mt-4 p-6">
             <div className='flex justify-end'>
            <button
            onClick={() => navigate('/transaction-actions')}
            className="w-[300px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.213 3.014c-.241.075-.371.176-.491.38l-.108.184-.012 1.688-.012 1.689-1.669.011-1.669.012-.199.102a.76.76 0 0 0-.319.297c-.112.181-.12.222-.12.578 0 .347.011.401.111.572a.862.862 0 0 0 .3.3l.189.111 1.688.012 1.688.012.012 1.688.012 1.688.111.189a.862.862 0 0 0 .3.3c.171.1.225.111.572.111.356 0 .397-.008.578-.12a.76.76 0 0 0 .297-.319l.102-.199.012-1.669.011-1.669 1.692-.012 1.691-.012.195-.12c.247-.153.38-.397.408-.751.028-.344-.066-.664-.25-.847-.249-.249-.355-.262-2.146-.262H13V9.407c0-1.79-.013-1.897-.261-2.146-.234-.234-.735-.326-1.12-.205"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
          Tranzaksiya turini qo'shish
          </button>
          </div>
                <table className="w-full border-collapse">
                    <thead>
                    <h1 style={{fontSize: 23}} className='font-semibold'>Tranzaksiya turi</h1>

                        <tr className="flex items-center gap-5 p-5">
                            <button className="px-6 py-3 text-xl rounded-xl" style={{ backgroundColor: "#ECFEF5", color: "#72CB9E" }}>Kirim</button>
                            <button className="px-6 py-3 text-xl rounded-xl" style={{ backgroundColor: "#FEF7F9", color: "#ed5353" }}>Chiqim</button>
                            <button className="px-6 py-3 text-xl rounded-xl" style={{ backgroundColor: "#F4FCFE", color: "#6586FF" }}>Vaucher</button>
                            <button className="px-6 py-3 text-xl rounded-xl" style={{ backgroundColor: "#F4FCFE", color: "#B17D6D" }}>Jarima</button>
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
