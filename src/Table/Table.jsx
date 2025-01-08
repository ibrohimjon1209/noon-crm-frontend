import React, { useState } from 'react';
import Test from './Test';

const Table = () => {
    const [selectedDay, setSelectedDay] = useState('Du');

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div className=''>
            <div className='relative top-[3px] pl-[40px] flex gap-[8px]'>
                <div
                    className={`${selectedDay === 'Du'
                            ? 'selected w-[102px] h-[44px] cursor-pointer flex justify-center items-center rounded-t-[5px] bg-[rgba(255,255,255,1)] border-[1.2px] border-[rgba(74,106,201,1)] border-b-0'
                            : 'nonselected w-[102px] h-[35px] cursor-pointer duration-200 hover:bg-[rgba(0,53,95,1)] flex justify-center items-center rounded-[5px] bg-[rgba(255,255,255,1)] border-[1.2px] border-[rgba(209,210,211,1)] group'
                        }`}
                    onClick={() => handleDayClick('Du')}
                >
                    <h1
                        className={`font-[roboto] font-[500] ${selectedDay === 'Du'
                                ? 'text-[rgba(74,106,201,1)]'
                                : 'text-[rgba(0,0,0,0.75)] group-hover:text-white'
                            } text-[16px] leading-[16px]`}
                    >
                        Du
                    </h1>
                </div>

                {['Se', 'Chor', 'Pa', 'Ju', 'Shan', 'Yak'].map((item, index) => (
                    <div
                        key={index}
                        className={`${selectedDay === item
                                ? 'selected w-[102px] h-[44px] cursor-pointer flex justify-center items-center rounded-t-[5px] bg-[rgba(255,255,255,1)] border-[1.2px] border-[rgba(74,106,201,1)] border-b-0'
                                : 'nonselected w-[102px] h-[35px] cursor-pointer duration-500 hover:bg-[rgba(0,53,95,1)] flex justify-center items-center rounded-[5px] bg-[rgba(255,255,255,1)] border-[1.2px] border-[rgba(209,210,211,1)] group'
                            }`}
                        onClick={() => handleDayClick(item)}
                    >
                        <h1
                            className={`font-[roboto] font-[500] ${selectedDay === item
                                    ? 'text-[rgba(74,106,201,1)]'
                                    : 'text-[rgba(0,0,0,0.75)] group-hover:text-white'
                                } text-[16px] leading-[16px]`}
                        >
                            {item}
                        </h1>
                    </div>
                ))}
            </div>

            <Test />
        </div>
    );
};

export default Table;
