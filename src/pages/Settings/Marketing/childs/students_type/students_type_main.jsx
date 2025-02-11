import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";

export default function CategoryList() {
    const [categories, setCategories] = useState([
        "Ism",
        "Talaba",
        "Abituriyent",
        "1-4 sinflar",
        "8-11 sinflar",
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [editIndex, setEditIndex] = useState(null);

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
            {/* Kategoriya qo'shish tugmasi */}
            <button onClick={() => setIsOpen(true)} className="flex items-center justify-center gap-2 w-64 h-16 rounded-full bg-[#0D99FF] text-gray-50 text-[20px]">
                <IoMdAdd size={25} />
                Kategoriya qo‘shish
            </button>

            {/* Kategoriya Ro'yxati */}
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

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="bg-slate-500 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">
                            {editIndex !== null ? "Kategoriyani tahrirlash" : "Kategoriya qo‘shish"}
                        </h2>
                        <input
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Kategoriya nomi..."
                            className="w-full p-2 border rounded-lg mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                                Bekor qilish
                            </button>
                            <button onClick={handleAddCategory} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
