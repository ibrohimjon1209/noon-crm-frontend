import React, { useState, useEffect } from "react"
import Warning from './imgs/Sariq.jpg'
const Graduate = ({ isOpen, onClose, onConfirm }) => {
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
        <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-none rounded-[20px] w-[350px] h-[450px] z-50 flex justify-center flex-col items-center transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="w-[80%] h-[80%] bg-white  rounded-lg flex justify-center flex-col items-center">
                    <img className="w-[20%] pb-6" src={Warning} alt="" />
                    <h1 className="text-[black] pb-10 text-center font-roboto font-[500] text-[25px]">Ushbu o'quvchi <br/> guruhni bitirsinmi?</h1>
                </div>


                <div className=" flex justify-evenly items-center gap-4 mt-[10px] w-[80%] h-[15%]">
                    <button
                        onClick={onClose}
                        className="font-roboto w-[48%] font-[400] text-[20px] h-full leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
                    >
                        Yo'q
                    </button>
                    <button
                        onClick={onConfirm}
                        className="font-roboto w-[48%] h-full font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
                    >
                        Ha
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Graduate
