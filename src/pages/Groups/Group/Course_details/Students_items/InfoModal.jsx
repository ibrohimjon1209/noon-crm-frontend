import React, { useState, useEffect } from "react"

const Delete_modal = ({ isOpen, onClose, onConfirm }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            setTimeout(() => setIsAnimating(true), 10)
        } else {
            setIsAnimating(false)
            setTimeout(() => setShouldRender(false), 300) // Match this with the transition duration
        }
    }, [isOpen])

    if (!shouldRender) return null

    return (
        <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-end">
            <div
                className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-white  rounded-[20px] w-[625px] h-full z-50 transition-all duration-300 ease-out ${isAnimating ? "-translate-x-0 opacity-100" : " translate-x-full opacity-0"
                    }`}
            >
                <h2 className="font-roboto font-[400] p-6 text-[40px] leading-[23.44px] text-black mt-[50px]">
                    Ma'lumoti
                </h2>
                <div className="w-full h-auto">
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[#0D99FF] font-roboto text-[25px] font-[600]">Guruh:</h1>
                        <h1 className="text-[#0D99FF] font-roboto text-[25px] font-[600]">Beginner Ielts 1.0</h1>
                    </div>
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Kurs:</h1>
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Matematika</h1>
                    </div>
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">O'qituvchi:</h1>
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Xapizahon Qo'ziboyeva</h1>
                    </div>
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Moderator:</h1>
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Nicolas Cage</h1>
                    </div>
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Guruh holati:</h1>
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Active</h1>
                    </div>
                    <div className="w-[95%] m-auto h-auto flex justify-between items-center p-[3px]">
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">Boshlangan sanasi:</h1>
                        <h1 className="text-[black] font-roboto text-[25px] font-[600]">kk/oo/yyyy | ss:mm</h1>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Delete_modal