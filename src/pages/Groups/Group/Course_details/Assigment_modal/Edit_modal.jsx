"use client"
import React, { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const Delete_modal = ({ isOpen, onClose, onConfirm }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [fileName, setFileName] = useState("") // Tanlangan fayl nomini saqlash uchun state
    const fileInputRef = useRef(null)

    const handleButtonClick = () => {
        fileInputRef.current.click() // Inputni ochish uchun
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setFileName(file.name) // Fayl nomini state'ga saqlaymiz
            console.log("Tanlangan fayl:", file.name)
        }
    }

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
                className={`flex justify-around items-center flex-col p-[20px] relative bg-white rounded-[20px] w-[625px] h-auto z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <h1 className="text-black font-[500] text-center text-[25px]">
                    Tahrirlash
                </h1>
                <div className="w-full h-[700px] overflow-auto">

                    <div className="w-full h-[100px]  flex item-center justify-evenly flex-col">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black">
                            Turi
                        </label>
                        <select className="w-full h-[40px] bg-gray-200 rounded-lg px-2">
                            <option value="">Vazifa</option>
                            <option value="">Vazifa2</option>
                        </select>
                    </div>


                    <div className="w-full h-[100px]  flex item-center justify-evenly flex-col">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black">
                            Nomi
                        </label>
                        <input
                            type="text"
                            className="w-full h-[40px] bg-gray-200 rounded-lg px-2"
                        />
                    </div>
                    <div className="w-full h-[100px]  flex item-center justify-evenly flex-col">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black">
                            Topshirish muddati
                        </label>
                        <input
                            type="date"
                            className="w-full h-[40px] bg-gray-200 rounded-lg px-2"
                        />
                    </div>
                    <div className="w-full h-[100px]  flex item-center justify-evenly flex-col">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black">
                            Maksimal ball
                        </label>
                        <input
                            type="number"
                            className="w-full h-[40px] bg-gray-200 rounded-lg px-2"
                        />
                    </div>

                    <div className="w-full h-[auto]  flex item-center justify-evenly flex-col">
                        <textarea
                            className="bg-gray-200 rounded-lg p-[10px] text-[18px] h-[200px]"
                            placeholder="Izoh (Ixtiyoriy)">
                        </textarea>
                    </div>






                    <div className="flex items-center space-x-2 mt-[20px]">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden" // Inputni yashiramiz
                        />
                        <button
                            onClick={handleButtonClick}
                            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Faylni tanlang
                        </button>
                        {/* Tanlangan fayl nomini ko‘rsatish */}
                        {fileName && <span className="text-gray-600">{fileName}</span>}
                    </div>
                </div>
                <div className="mt-[20px] flex justify-around items-center gap-4">
                    <button
                        onClick={onClose}
                        className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
                    >
                        Orqaga
                    </button>
                    <button
                        onClick={onConfirm}
                        className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
                    >
                        Saqlash
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Delete_modal