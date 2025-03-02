import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';

const CourseTimes = () => {
    const hours = [
        "08:00 - 09:00",
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
    ]

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="p-3 text-left">№</th>
                        <th className="p-3 text-left">Turlari</th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map((level, index) => (
                        <tr key={level.id || index} className="border-b text-black">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{level}</td>
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
        </div>
    );
}

export default CourseTimes;
