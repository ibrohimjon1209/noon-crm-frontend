import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';
// import { useLevel } from '../../../store/ContexApi';
import useFetchData from '../../../hook/useFetchData';

const Levels = () => {

    // const { selectedLevels } = useLevel();
    const { data: levels, error } = useFetchData("/courses");
    // console.log(levels, error, "useFetchData ishladi");
    // const courseLevel = levels?.[0]?.course_levels || "Ma'lumot yo‘q"
    const courseLevel = levels?.[0]?.course_levels ?? []; // Faqat array yoki bo‘sh massiv

    console.log(courseLevel);

    // course_levels


    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="p-3 text-left">№</th>
                        <th className="p-3 text-left">Turlari</th>
                        <th className="p-3 text-left">Rang</th>
                    </tr>
                </thead>
                <tbody>
                    {courseLevel.length > 0 ? (
                        courseLevel.map((level, index) => (
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
                        ))
                    ) : (
                        <p>Ma'lumot yo‘q</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Levels;