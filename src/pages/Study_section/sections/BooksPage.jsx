import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';

const BooksPage = () => {
    const books = [
        { id: 1, name: "Men" },
    ]
    
    return (
        <div className="w-full min-h-[500px] overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="p-3 text-left">№</th>
                        <th className="p-3 text-left">Turlari</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((level, index) => (
                        <tr key={level.id || index} className="border-b text-black">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{level.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BooksPage;
