import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';

const Mentors = () => {
    const info = [
        {
            id: 1,
            name: "Martin Elephants",
            male: "Erkak",
            age: "25",
            job: "Dasturchi",
            filial: "Toshkent",
            phone: "998 97 123 45 67",
        },

    ]
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="p-3 text-left">№</th>
                        <th className="p-3 text-left">Ism</th>
                        <th className="p-3 text-left">Tug’ulgan sanasi</th>
                        <th className="p-3 text-left">Jinsi</th>
                        <th className="p-3 text-left">Filial</th>
                        <th className="p-3 text-left">Telefon raqam</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((level, index) => (
                        <tr key={level.id || index} className="border-b text-black">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{level.name}</td>
                            <td className="p-3">{level.age}</td>
                            <td className="p-3">{level.male}</td>
                            <td className="p-3">{level.filial}</td>
                            <td className="p-3">{level.phone}</td>
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

export default Mentors;
