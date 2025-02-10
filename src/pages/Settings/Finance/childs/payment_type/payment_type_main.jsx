import React, { useState } from "react";
import plus from "../../../../assigments/images/add_icon.png";
import editIcon from "../../imgs/edit_icon.png";
import deleteIcon from "../../imgs/delete_icon.png";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";
import AddModal from "./add_modal";

const Sponsors_main = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [currentHoliday, setCurrentHoliday] = useState(null);

    const payment_type = [
        {
            name: "Naqd",
            status: "Faol",
        },
        {
            name: "Plastik",
            status: "Faol",
        },
        {
            name: "Terminal",
            status: "Faol",
        },
        {
            name: "Payme",
            status: "Nofaol",
        },
    ];

    const formatPhoneNumber = (number) => {
        const cleaned = ('' + number).replace(/\D/g, ''); // Raqamlarni tozalash
        const match = cleaned.match(/^(\+998)(\d{2})(\d{3})(\d{2})(\d{2})$/);

        if (match) {
            return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`; // Formatlangan raqam
        }

        // Agar formatga mos kelmasa, raqamni joylar bilan formatlash
        const formattedNumber = cleaned.replace(/(\d{3})(\d{2})(\d{2})/, '$1 $2 $3');
        return cleaned.length > 0 ? ` +${formattedNumber}` : number; // Joylar bilan qaytaradi
    };


    const handleDelete = (holiday) => {
        setCurrentHoliday(holiday);
        setIsDeleteModalOpen(true);
    };

    const handleEdit = (holiday) => {
        setCurrentHoliday(holiday);
        setIsEditModalOpen(true);
    };

    return (
        <div>
            <div className="flex w-full h-[100%] flex-col justify-center gap-[16px] items-center">
                <div className="flex flex-row w-[100%] justify-start">
                    <div
                        className="flex flex-row justify-center items-center gap-[15px] bg-[#0D99FF] w-auto px-[35px] h-[60px] rounded-[50px] cursor-pointer duration-300 scale-100 hover:scale-105 active:scale-95"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        <img className="w-[32px] h-[32px] object-contain" src={plus || "/placeholder.svg"} alt="Add icon" />
                        <p className="font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
                            To'lov turi
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[calc(50vw)] overflow-y-scroll h-auto bg-white rounded-t-[15px] rounded-b-[1px] shadow-lg" style={{ scrollbarWidth: "thin" }}>
                    <div className="flex mt-[10px] flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
                        <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">№</p>
                        <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">Nomi</p>
                        <p className="font-inter font-[600] text-[16px] leading-[18.15px] text-[#404040] w-[45%]">Holati</p>
                    </div>f
                    {payment_type.map((item, index) => (
                        <div key={index} className="flex flex-row items-center w-[90%] py-[19px] border-b-[1px] border-[#D9D9D9]">
                            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[5%]">{index + 1}</p>
                            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[35%]">{item.name}</p>
                            <p className="font-inter font-[500] text-[16px] leading-[18.15px] text-[#404040] w-[14%]">{item.status}</p>

                            <div className="ml-[35%] flex gap-[34px] w-[10%] justify-center">
                                <img
                                    src={editIcon}
                                    alt="Edit"
                                    className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                                    onClick={() => handleEdit(item)}
                                />
                                <img
                                    src={deleteIcon}
                                    alt="Delete"
                                    className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                                    onClick={() => handleDelete(item)}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="flex pr-[34px] mt-[50px] mb-[15px]">
                        <h1 className="font-inter font-[600] text-[15px] text-[rgba(64,64,64,1)]">Umumiy son: {payment_type.length}</h1>
                    </div>
                </div>


                <EditModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    holiday={currentHoliday}
                />

                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    holiday={currentHoliday}
                />



                <AddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
            </div>
        </div>
    )
};

export default Sponsors_main;