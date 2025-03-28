import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import HashtagModal from '../../Settings/Marketing/childs/hashtag/hashtag_modal';
import DeleteModal from '../../Settings/Marketing/childs/hashtag/DeleteModal';

const OnlineCourses = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Edit qilingan index
    const [editValue, setEditValue] = useState("");   // Eski qiymatni inputga yuklash
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [courses, setCourses] = useState([
        {
            title: "IELTS FOUNDATION",
            price: "650.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        },
        {
            title: "IELTS FOUNDATION",
            price: "600.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        },
        {
            title: "IELTS FOUNDATION",
            price: "350.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        },
        {
            title: "IELTS FOUNDATION",
            price: "450.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        },
        {
            title: "IELTS FOUNDATION",
            price: "500.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        },
        {
            title: "IELTS FOUNDATION",
            price: "350.000 UZS",
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
    ]);


    const handleSaveHashtag = (newCourses) => {
        if (editIndex !== null) {
            const updatedHashtags = [...courses];
            updatedHashtags[editIndex] = { ...updatedHashtags[editIndex], name: newCourses };
            setCourses(updatedHashtags);
            setEditIndex(null);
        } else {
            setCourses([...courses, { id: Date.now(), name: newCourses }]);
        }
        setIsOpen(false);
    };

    const handleEditHashtag = (index) => {
        setEditIndex(index);
        setEditValue(courses[index].name);
        setIsOpen(true);
    };

    const confirmDeleteHashtag = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (deleteIndex !== null) {
            setCourses(courses.filter((_, i) => i !== deleteIndex));
        }
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };



    return (
        <div className='w-full p-6'>
            <div className='flex flex-col gap-4'>
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }
                    }
                    className='bg-[#0D99FF] text-white text-[20px] w-[222px] h-[66px] rounded-lg flex items-center justify-center gap-2'>
                    <CiCirclePlus size={25} />
                    Kurs qo'shish
                </button>
                <div className='flex gap-4'>
                    <button className='text-black bg-gray-300 px-4 py-2 rounded-lg w-36 h-11 flex items-center justify-center gap-2'>
                        Active kurslar
                    </button>
                    <button className='text-gray-400 rounded-lg w-48 flex items-center justify-center gap-2'>
                        Yakunlanmagan kurslar
                    </button>
                </div>
            </div>
            <div className='mt-4'>
                <div className='rounded-lg grid grid-cols-3 gap-6'>
                    {
                        courses.map((course, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg'>
                                <Link to='/'>
                                    <img className='rounded-lg' src={course.img} alt="" />
                                </Link>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col items-start justify-between gap-4'>
                                        <h2 className='font-medium text-lg text-black mt-2'>{course.title}</h2>
                                        <span>{course.price}</span>
                                    </div>
                                    <div className='flex items-end justify-end gap-4'>
                                        <RiPencilFill onClick={() => handleEditHashtag(index)} className="text-blue-500 size-7 cursor-pointer mr-4" />
                                        <FaRegTrashAlt onClick={() => confirmDeleteHashtag(index)} className="text-red-500 size-7 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>

            <HashtagModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={handleSaveHashtag}
                // editValue={editIndex !== null ? editValue : ""}
                editValue={editValue}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
}

export default OnlineCourses;
