import { useState, useEffect } from "react"
import { CgClose } from "react-icons/cg";

const StudentsModal = ({ isOpen, onClose, onSave, editValue }) => {
    const [newHashtag, setNewHashtag] = useState("");
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)

    // 🔄 Edit rejimida eski qiymat inputga tushishi kerak
    useEffect(() => {
        if (editValue) {
            setNewHashtag(editValue);
        } else {
            setNewHashtag(""); // Agar yangi hashtag bo‘lsa, input tozalansin
        }
    }, [editValue]);

    const handleAddHashtag = () => {
        if (newHashtag.trim() !== "") {
            onSave(newHashtag); // 🔥 Saqlash funksiyasini chaqiramiz
            setNewHashtag("");
        }
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            setTimeout(() => setIsAnimating(true), 30)
        } else {
            setIsAnimating(false)
            setTimeout(() => setShouldRender(false), 300)
        }
    }, [isOpen])

    if (!shouldRender) return null
    if (!isOpen) return null;

    return (
        <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-white rounded-[10px] w-[625px] h-96 z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"}`}
            >
                <div className="flex justify-between items-center pt-6 px-6 mb-6">
                    <h2 className="font-roboto font-[400] text-[20px] uppercase text-black">
                        {editValue ? "KATEGORIYA TAHRIRLASH" : "KATEGORIYA QO‘SHISH"}
                    </h2>
                    <button
                        onClick={onClose}
                        className=" text-black font-roboto font-[700] hover:text-gray-700"
                    >
                        <CgClose size={25} />
                    </button>
                </div>
                <hr className="border-[#00000080] w-[100%]" />
                <div className="pt-[20px] px-6 flex h-[100%] flex-col w-[100%]">
                    <div className="space-y-[20px]">
                        <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                            Sarlavha
                        </label>
                        <input
                            value={newHashtag}
                            onChange={(e) => setNewHashtag(e.target.value)}
                            placeholder="Hashtag kiriting..."
                            type="text"
                            className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
                            required
                        />
                    </div>
                    <div className="w-[100%] h-[100%] text-right mt-8 ">
                        <button
                            onClick={handleAddHashtag}
                            type="submit"
                            className="w-[140px] h-[60px] text-[20px] py-2 px-4 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF]"
                        >
                            {editValue ? "Saqlash" : "Qo‘shish"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsModal;
