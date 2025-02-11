import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import StudentsModal from "./students_modal";

export default function StudentsType() {
    const [categories, setCategories] = useState([
        "Ism",
        "Talaba",
        "Abituriyent",
        "1-4 sinflar",
        "8-11 sinflar",
    ]);
    console.log(...categories);


    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    console.log(isOpen);



    const handleAddCategory = () => {
        if (newCategory.trim() !== "") {
            if (editIndex !== null) {
                const updatedCategories = [...categories];
                updatedCategories[editIndex] = newCategory;
                setCategories(updatedCategories);
                setEditIndex(null);
            } else {
                setCategories([...categories, newCategory]);
            }
        }
        setNewCategory("");
        setIsOpen(false);
    };

    const handleDelete = (index) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setNewCategory(categories[index]);
        setEditIndex(index);
        setIsOpen(true);
    };


    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl  mr-4">
            <button onClick={() => setIsOpen(true)} className="flex items-center justify-center gap-2 w-64 h-16 rounded-full bg-[#0D99FF] text-gray-50 text-[20px]">
                <IoMdAdd size={25} />
                Kategoriya qo‘shish
            </button>

            <ul className="rounded-lg divide-y">
                {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center p-4 h-[5rem]">
                        <span className="text-gray-800">{category}</span>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(index)} className="text-gray-600 hover:text-blue-500">
                                <RiPencilLine size={25} />
                            </button>
                            <button onClick={() => handleDelete(index)} className="text-gray-600 hover:text-red-500">
                                <FaRegTrashAlt size={25} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
                    <StudentsModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>


        </div>
    );
}
