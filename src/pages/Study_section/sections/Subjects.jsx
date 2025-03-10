import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Toolbar from './Toolbar';
import InputGroup from './chekboxType/InputGroup';
import RadioGroup from './chekboxType/RadioGroup';


const Subjects = () => {

    const [openDropdown, setOpenDropdown] = useState(false);


    return (
        <div className="max-w-6xl bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
            <form className="space-y-4">

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


                {openDropdown && (
                    <div>
                        <div className="mt-2 w-full bg-white border rounded-md p-4">

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

                            <InputGroup />

                            <div className='flex mt-5'>
                                <Toolbar />
                            </div>
                            <input type="text" className='w-full h-32 mt-4 rounded bg-[#EDF3F9] p-3' />

                            <RadioGroup />

                        </div>
                        <div className='flex items-center justify-between gap-4 mt-4'>
                            <button className='w-1/2 py-4  bg-white rounded'>Dars yaratish</button>
                            <button className='w-1/2 py-4  bg-white rounded'>Vazifa yaratish</button>
                        </div>
                      
                    </div>
                )}
            </form>
        </div>
    );
}

export default Subjects;
