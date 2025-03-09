import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const RadioGroup = () => {
    const [selected, setSelected] = useState("");

    return (
        <div>
             <div className='mt-4 w-full rounded-md'>
                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Dars nomi
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        placeholder='Dars nomi...'
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
                            {/* ====== */}
                            <div className="flex gap-4 mt-5 rounded-lg w-full">
                                <label
                                    className={`flex items-center justify-between gap-4 px-4 py-2 rounded-lg cursor-pointer border w-1/3 ${selected === "video" ? "text-blue-600 font-medium" : "text-gray-600"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="toggle"
                                        value="video"
                                        checked={selected === "video"}
                                        onChange={() => setSelected("video")}
                                        className="hidden"
                                    />
                                    Video
                                    <div
                                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === "video" ? "border-blue-600" : "border-gray-400"
                                            }`}
                                    >
                                        {selected === "video" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                                    </div>
                                </label>
                                <label
                                    className={`flex items-center justify-between gap-4 px-4 py-2 rounded-lg cursor-pointer w-1/3 border ${selected === "dars tavsif" ? "text-blue-600 font-medium" : "text-gray-600"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="toggle"
                                        value="dars tavsif"
                                        checked={selected === "dars tavsif"}
                                        onChange={() => setSelected("dars tavsif")}
                                        className="hidden"
                                    />
                                    Dars Tavsif
                                    <div
                                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === "dars tavsif" ? "border-blue-600" : "border-gray-400"
                                            }`}
                                    >
                                        {selected === "dars tavsif" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                                    </div>
                                </label>

                                <label
                                    className={`flex items-center justify-between gap-2 px-4 py-2 rounded-lg cursor-pointer border w-1/3 ${selected === "Resurs yuklash" ? "text-blue-600 font-medium" : "text-gray-600"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="toggle"
                                        value="Resurs yuklash"
                                        checked={selected === "Resurs yuklash"}
                                        onChange={() => setSelected("Resurs yuklash")}
                                        className="hidden"
                                    />
                                    Resurs yuklash
                                    <div
                                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === "Resurs yuklash" ? "border-blue-600" : "border-gray-400"
                                            }`}
                                    >
                                        {selected === "Resurs yuklash" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                                    </div>
                                </label>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mt-4">
                                    Link
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="url" 
                                        placeholder="https://example.com"
                                        className="w-full mt-1 p-2 border rounded-md bg-[#EDF3F9] shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />

                                    <button className="text-red-500 hover:text-red-700">
                                        <FaRegTrashAlt size={20} />
                                    </button>
                                    <button className='text-blue-800 text-[20px]'>
                                        Saqlash
                                    </button>

                                </div>
                                <p className='flex items-center justify-center w-full h-12 rounded bg-[#EDF3F9] mt-4 text-red-600'>Video yuklanmagan!</p>
                            </div>
                            <p className='flex items-center justify-end p-2'>Qolgan bo'sh hotira: <span className='text-red-600'>MB</span> </p>

                           
                        </div>
        </div>
    );
}

export default RadioGroup;
