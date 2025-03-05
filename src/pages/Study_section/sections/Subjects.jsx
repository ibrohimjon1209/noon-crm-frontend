import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Subjects = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [tavsifChecked, setTavsifChecked] = useState(false);
    const [savollarChecked, setSavollarChecked] = useState(false);


    return (
        <div className="max-w-6xl bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
            <form className="space-y-4">
                {/* Mavzu */}
                <div>
                    <label className="block text-gray-700 font-medium">
                        Mavzu <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Asides...'
                        className="w-full mt-1 p-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                {/* Mavzu Tavsifi */}
                <div>
                    <label className="block text-gray-700 font-medium">
                        Mavzu Tavsifi <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Asides...'
                        className="w-full mt-1 p-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                {/* Select Button */}
                <div>
                    <button className="w-10 h-10 flex items-center justify-center border rounded-md bg-white shadow-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown(!openDropdown);
                        }}

                    >
                        ⌄
                    </button>



                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md cursor-not-allowed"
                        disabled
                    >
                        Bekor qilish
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Saqlash
                    </button>
                </div>

                {/* ===================== */}

                {openDropdown && (
                    <div className="mt-2 w-full bg-white border rounded-md shadow-lg p-4">
                        <div>
                            <label className="block text-gray-700 font-medium">
                                Vazifa <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="text"
                                    placeholder='Asides...'
                                    className="w-full mt-1 p-2 border rounded-md bg-[#EDF3F9] shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                />

                                <button className="text-red-500 hover:text-red-700">
                                    <FaRegTrashAlt size={20} />
                                </button>
                                <button className='text-blue-800 text-[20px]'>
                                    Saqlash
                                </button>

                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <div className=' flex items-center justify-between w-1/2 border-2 border-gray-400 border-dotted p-4'>
                                <span className='border-dashed'>Tavsif</span>
                                <input type="checkbox" />
                            </div>

                            <div className='flex items-center justify-between w-1/2 border-2 border-gray-400 border-dotted p-4'>
                                <span className='border-dashed'>Savollar</span>
                                <input type="checkbox" />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            {/* Tavsif qismi */}
                            <div
                                className={`flex items-center justify-between w-1/2 border-2 p-4 cursor-pointer transition border-dashed ${tavsifChecked ? "border-[#0D99FF]" : "border-gray-400"
                                    }`}
                                onClick={() => setTavsifChecked(!tavsifChecked)}
                            >
                                <span>Tavsif</span>
                                <input
                                    type="checkbox"
                                    checked={tavsifChecked}
                                    onChange={() => setTavsifChecked(!tavsifChecked)}
                                    className="hidden"
                                />
                            </div>

                            {/* Savollar qismi */}
                            <div
                                className={`flex items-center justify-between w-1/2 border-2 p-4 cursor-pointer transition border-dashed ${savollarChecked ? "border-[#0D99FF]" : "border-gray-400"
                                    }`}
                                onClick={() => setSavollarChecked(!savollarChecked)}
                            >
                                <span>Savollar</span>
                                <input
                                    type="checkbox"
                                    checked={savollarChecked}
                                    onChange={() => setSavollarChecked(!savollarChecked)}
                                    className="hidden"
                                />
                            </div>
                        </div>
                        <div>

                        </div>


                    </div>




                )}

                {/* ===================== */}



            </form>
        </div>
    );
}

export default Subjects;
