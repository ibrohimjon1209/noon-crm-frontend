"use client"
import React, { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"



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
        <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`flex justify-around items-center flex-col relative bg-white rounded-[20px] w-[625px] h-[150px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >

                <h1 className="text-black font-[500] text-center text-[25px] ">
                    Xaqiqatdan ham lidga qaytarmoqchimisiz?
                </h1>



                <div className="flex justify-around items-center gap-4">
                    <button
                        onClick={onClose}
                        className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
                    >
                        Yo'q
                    </button>
                    <button
                        onClick={onConfirm}
                        className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
                    >
                        Ha
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Delete_modal