import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const OnlineCourses = () => {
    const OnlineCourses = [
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

    ]
    return (
        <div className='w-full p-6'>
            <div className='flex flex-col gap-4'>
                <button className='bg-[#0D99FF] text-white w-[222px] h-[66px] rounded-lg flex items-center justify-center gap-2'>
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
                        OnlineCourses.map((course, index) => (
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
                                        <RiPencilFill className=" size-7 cursor-pointer mr-4" />
                                        <FaRegTrashAlt className="text-red-500 size-7 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default OnlineCourses;
