import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';
import { useFetchData } from '../../../hook/useFetchData';
import Loader from '../../Loader/Loader';

const Levels = () => {

    const [data, loading] = useFetchData("/course-levels");
   


    return (
        <div className="w-full overflow-x-auto">
            {loading ? (
                <Loader />
            ) : data.length > 0 ? (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-500 border-b">
                            <th className="p-3 text-left">№</th>
                            <th className="p-3 text-left">Turlari</th>
                            <th className="p-3 text-left">Rang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((level, index) => (
                            <tr key={level.id || index} className="border-b text-black text-[20px]">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{level.name}</td>
                                <td className="p-3">
                                    <span
                                        className="w-6 h-6 inline-block rounded-md"
                                        style={{ backgroundColor: level.color || "#3EC483" }}
                                    />
                                </td>
                                <td className="p-3 text-right">
                                    <button className="text-blue-500 hover:text-blue-700 mr-3">
                                        <RiPencilLine size={25} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaRegTrashAlt size={25} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500 text-xl mt-5">Ma'lumot topilmadi</p>
            )}
        </div>

    );
}

export default Levels;