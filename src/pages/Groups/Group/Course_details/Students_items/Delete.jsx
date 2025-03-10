"use client"
import React, { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const CustomDropdown = ({ options, placeholder, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState(value || "")
    const dropdownRef = useRef(null)

    // Dropdown tashqariga bosilganda yopish
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Tanlangan qiymatni o'zgartirish
    const handleSelect = (option) => {
        setInputValue(option)
        onChange(option)
        setIsOpen(false)
    }

    // Inputga yozish
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={() => setIsOpen(!isOpen)}
                    placeholder={placeholder}
                    className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
            </div>
            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const Delete_modal = ({ isOpen, onClose, onConfirm }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")

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

    const options = ["Variant 1", "Variant 2", "Variant 3"]

    return (
        <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`w-full h-[140vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-white rounded-[20px] w-[630px] h-[300px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >

                <h2 className="font-roboto font-[500] p-6 text-[20px] leading-[23.44px] uppercase text-black text-center">
                    O'quvchini guruhdan o'chirish uchun izoh qoldiring
                </h2>
                <p className="text-[20px] ml-[25px]">Sababi</p>
                <div className="p-6">
                    <CustomDropdown
                        options={options}
                        placeholder="Tanlang"
                        value={selectedOption}
                        onChange={(value) => setSelectedOption(value)}
                    />
                </div>

                <div className="flex justify-around items-center gap-4 mt-[25px] w-[60%] m-auto">
                    <button
                        onClick={onClose}
                        className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
                    >
                        Bekor qilish
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