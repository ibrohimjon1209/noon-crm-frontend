"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";

const EditModal = ({ isOpen, onClose, onConfirm }) => {
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const [groupStatusValue, setGroupStatusValue] = useState("");
    const [isGroupStatusOpen, setIsGroupStatusOpen] = useState(false);

    const [courseValue, setCourseValue] = useState("");
    const [isCourseOpen, setIsCourseOpen] = useState(false);

    const [courseLevelValue, setCourseLevelValue] = useState("");
    const [isCourseLevelOpen, setIsCourseLevelOpen] = useState(false);

    const [teacherValue, setTeacherValue] = useState("Tanlang yoki yozing");
    const [isTeacherOpen, setIsTeacherOpen] = useState(false);

    const [educationTypeValue, setEducationTypeValue] = useState("");
    const [isEducationTypeOpen, setIsEducationTypeOpen] = useState(false);

    const [roomValue, setRoomValue] = useState("");
    const [isRoomOpen, setIsRoomOpen] = useState(false);

    const [startHours, setStartHours] = useState("");
    const [startMinutes, setStartMinutes] = useState("");
    const startMinutesInputRef = useRef(null);

    const [endHours, setEndHours] = useState("");
    const [endMinutes, setEndMinutes] = useState("");
    const endMinutesInputRef = useRef(null);

    const handleTimeChange = (value, setter, max, nextInputRef) => {
        const numericValue = value.replace(/[^0-9]/g, "");
        if (numericValue.length <= 2) {
            if (numericValue === "") {
                setter("");
            } else if (Number.parseInt(numericValue) > max) {
                setter(max.toString().padStart(2, "0"));
            } else {
                setter(numericValue.padStart(2, "0"));
            }
            if (numericValue.length === 2 && nextInputRef && nextInputRef.current) {
                nextInputRef.current.focus();
            }
        }
    };

    const isStartHoursInvalid = startHours !== "" && Number.parseInt(startHours) > 23;
    const isStartMinutesInvalid = startMinutes !== "" && Number.parseInt(startMinutes) > 59;
    const isEndHoursInvalid = endHours !== "" && Number.parseInt(endHours) > 23;
    const isEndMinutesInvalid = endMinutes !== "" && Number.parseInt(endMinutes) > 59;

    const handleClear = (setter) => {
        setter("");
    };

    const handleSelect = (option, setter, setIsOpen) => {
        setter(option);
        setIsOpen(false);
    };

    const openGroupStatus = () => {
        setIsGroupStatusOpen(true);
        setIsCourseOpen(false);
        setIsCourseLevelOpen(false);
        setIsTeacherOpen(false);
        setIsEducationTypeOpen(false);
        setIsRoomOpen(false);
    };

    const openCourse = () => {
        setIsGroupStatusOpen(false);
        setIsCourseOpen(true);
        setIsCourseLevelOpen(false);
        setIsTeacherOpen(false);
        setIsEducationTypeOpen(false);
        setIsRoomOpen(false);
    };

    const openCourseLevel = () => {
        setIsGroupStatusOpen(false);
        setIsCourseOpen(false);
        setIsCourseLevelOpen(true);
        setIsTeacherOpen(false);
        setIsEducationTypeOpen(false);
        setIsRoomOpen(false);
    };

    const openTeacher = () => {
        setIsGroupStatusOpen(false);
        setIsCourseOpen(false);
        setIsCourseLevelOpen(false);
        setIsTeacherOpen(true);
        setIsEducationTypeOpen(false);
        setIsRoomOpen(false);
    };

    const openEducationType = () => {
        setIsGroupStatusOpen(false);
        setIsCourseOpen(false);
        setIsCourseLevelOpen(false);
        setIsTeacherOpen(false);
        setIsEducationTypeOpen(true);
        setIsRoomOpen(false);
    };

    const openRoom = () => {
        setIsGroupStatusOpen(false);
        setIsCourseOpen(false);
        setIsCourseLevelOpen(false);
        setIsTeacherOpen(false);
        setIsEducationTypeOpen(false);
        setIsRoomOpen(true);
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            ></div>

            <div
                className={`relative flex items-center justify-center flex-col p-5 bg-white rounded-[20px] w-[700px] h-[850px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
                <h1 className="text-black font-[500] text-center text-[25px]">
                    Tahrirlash
                </h1>
                <div className="relative rounded-lg flex flex-col w-[95%] h-[700px] overflow-auto mt-[30px]">
                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black">
                        Guruh nomi
                    </label>
                    <div className="relative flex items-center w-full mt-[10px]">
                        <input
                            type="text"
                            className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                            placeholder="Guruh nomini kiriting..."
                        />
                    </div>

                    {/* Guruh holati */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            Guruh holati
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={groupStatusValue}
                                onChange={(e) => setGroupStatusValue(e.target.value)}
                                onClick={openGroupStatus}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {groupStatusValue && (
                                    <button
                                        onClick={() => handleClear(setGroupStatusValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsGroupStatusOpen(!isGroupStatusOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isGroupStatusOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setGroupStatusValue, setIsGroupStatusOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Kurs */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            Kurs
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={courseValue}
                                onChange={(e) => setCourseValue(e.target.value)}
                                onClick={openCourse}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {courseValue && (
                                    <button
                                        onClick={() => handleClear(setCourseValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsCourseOpen(!isCourseOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isCourseOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setCourseValue, setIsCourseOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Kurs darajasi */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            Kurs darajasi
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={courseLevelValue}
                                onChange={(e) => setCourseLevelValue(e.target.value)}
                                onClick={openCourseLevel}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {courseLevelValue && (
                                    <button
                                        onClick={() => handleClear(setCourseLevelValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsCourseLevelOpen(!isCourseLevelOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isCourseLevelOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setCourseLevelValue, setIsCourseLevelOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                        Boshlanish vaqti
                    </label>
                    <div className="relative flex items-center h-[50px] w-full mt-[10px]">
                        <div className="flex gap-[2px] w-full bg-gray-200 border border-gray-300 rounded-lg items-center h-[50px] mt-[3px] font-inter font-[500] text-black text-[18px]">
                            <input
                                type="text"
                                id="startHours"
                                value={startHours}
                                onChange={(e) =>
                                    handleTimeChange(e.target.value, setStartHours, 23, startMinutesInputRef)
                                }
                                className={`w-12 text-center rounded-md border ${isStartHoursInvalid ? "bg-red-100 border-red-500" : "bg-white border-gray-200 "}`}
                                placeholder="00"
                                maxLength={2}
                            />
                            <span>:</span>
                            <input
                                type="text"
                                id="startMinutes"
                                ref={startMinutesInputRef}
                                value={startMinutes}
                                onChange={(e) => handleTimeChange(e.target.value, setStartMinutes, 59, null)}
                                className={`w-12 text-center rounded-md border ${isStartMinutesInvalid ? "bg-red-100 border-red-500" : "bg-white border-gray-200"}`}
                                placeholder="00"
                                maxLength={2}
                            />
                        </div>
                    </div>

                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                        Tugash vaqti
                    </label>
                    <div className="relative flex items-center w-full h-[50px] mt-[10px]">
                        <div className="flex gap-[2px] items-center bg-gray-200 rounded-lg border border-gray-300 h-[50px] w-full mt-[3px] font-inter font-[500] text-black text-[18px]">
                            <input
                                type="text"
                                id="endHours"
                                value={endHours}
                                onChange={(e) =>
                                    handleTimeChange(e.target.value, setEndHours, 23, endMinutesInputRef)
                                }
                                className={`w-12 text-center rounded-md border ${isEndHoursInvalid ? "bg-red-100 border-red-500" : "bg-white border-gray-200"}`}
                                placeholder="00"
                                maxLength={2}
                            />
                            <span>:</span>
                            <input
                                type="text"
                                id="endMinutes"
                                ref={endMinutesInputRef}
                                value={endMinutes}
                                onChange={(e) => handleTimeChange(e.target.value, setEndMinutes, 59, null)}
                                className={`w-12 text-center rounded-md border ${isEndMinutesInvalid ? "bg-red-100 border-red-500" : "bg-white border-gray-200"}`}
                                placeholder="00"
                                maxLength={2}
                            />
                        </div>
                    </div>

                    {/* O'qituvchi */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            O'qituvchi
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={teacherValue}
                                onChange={(e) => setTeacherValue(e.target.value)}
                                onClick={openTeacher}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {teacherValue && (
                                    <button
                                        onClick={() => handleClear(setTeacherValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsTeacherOpen(!isTeacherOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isTeacherOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setTeacherValue, setIsTeacherOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                        Yordamchi o'qituvchilar
                    </label>
                    <div className="relative flex items-center w-full mt-[10px]">
                        <input
                            type="text"
                            className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Ta'lim turi */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            Ta'lim turi
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={educationTypeValue}
                                onChange={(e) => setEducationTypeValue(e.target.value)}
                                onClick={openEducationType}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {educationTypeValue && (
                                    <button
                                        onClick={() => handleClear(setEducationTypeValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsEducationTypeOpen(!isEducationTypeOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isEducationTypeOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setEducationTypeValue, setIsEducationTypeOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Xona */}
                    <div className="relative">
                        <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                            Xona
                        </label>
                        <div className="relative flex items-center w-full mt-[10px]">
                            <input
                                type="text"
                                value={roomValue}
                                onChange={(e) => setRoomValue(e.target.value)}
                                onClick={openRoom}
                                className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                                placeholder="Tanlang yoki yozing..."
                            />
                            <div className="absolute right-0 flex items-center gap-1 px-2">
                                {roomValue && (
                                    <button
                                        onClick={() => handleClear(setRoomValue)}
                                        className="p-1 hover:text-gray-600"
                                        aria-label="Tozalash"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsRoomOpen(!isRoomOpen)}
                                    className="p-1 hover:text-gray-600"
                                    aria-label="Dropdownni ochish/yopish"
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {isRoomOpen && (
                            <div className="absolute top-[100%] left-0 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg z-10">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option, setRoomValue, setIsRoomOpen)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                        Boshlanish sanasi
                    </label>
                    <div className="relative flex items-center w-full mt-[10px]">
                        <input
                            type="date"
                            className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                        />
                    </div>
                    <label className="font-roboto font-[400] block text-[20px] leading-[21.09px] text-black mt-[30px]">
                        Tugash sanasi
                    </label>
                    <div className="relative flex items-center w-full mt-[10px]">
                        <input
                            type="date"
                            className="w-full h-[50px] text-[20px] rounded-md border border-gray-300 bg-gray-200 px-4 py-2 pr-12 focus:border-gray-300 focus:outline-none"
                        />
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
    );
};

export default EditModal;