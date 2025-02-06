'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import classNames from 'classnames';

const Test = () => {
    const customScrollbar = {
        overflowY: 'auto', // Enable vertical scrolling
        scrollbarWidth: 'auto', // For Firefox
        scrollbarColor: 'rgba(0,53,95,1) rgba(0, 0, 95, 1)', // For Firefox
    };

    // WebKit scrollbar styles
    const webkitScrollbarStyles = {
        width: '100px', // Width of the scrollbar
    };

    const webkitScrollbarTrackStyles = {
        background: 'rgba(0,53,95,1)', // Background of the scrollbar track
        borderRadius: '100px', // Rounded corners for track
    };

    const webkitScrollbarThumbStyles = {
        background: 'rgb(51, 0, 255)', // Color of the scrollbar thumb
        borderRadius: '100px', // Rounded corners for thumb
    };




    const days = ["Yak", "Du", "Se", "Chor", "Pa", "Ju", "Sha"];
    const rooms = ["1-xona", "2-xona", "3-xona", "4-xona", "5-xona", "6-xona", "7-xona", "8-xona", "9-xona"];
    const timeSlots = [
        "08:00 - 08:30", "08:30 - 09:00", "09:00 - 09:30", "09:30 - 10:30",
        "10:30 - 11:00", "11:00 - 11:30", "11:30 - 12:00", "12:00 - 12:30",
        "12:30 - 13:00", "13:00 - 13:30", "13:30 - 14:00", "14:00 - 14:30",
        "14:30 - 15:00", "15:00 - 15:30", "15:30 - 16:00", "16:00 - 16:30",
    ];

    const getCurrentDay = () => {
        const today = new Date();
        const dayIndex = today.getDay(); // 0: Yak, 1: Du, ..., 6: Sha
        return days[dayIndex];
    };

    const [activeDay, setActiveDay] = useState(getCurrentDay());

    const classesByDay = {
        Du: [
            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 1
            },
        ],

        Se: [
            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 5
            },

            {
                room: "2-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 1
            },

            {
                room: "8-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 2
            },
        ],

        Chor: [
            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 1
            },
            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Toq kun Ertalab A1",
                teacher: "Oydin Yusupova",
                progress: "29/53",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 3
            },
        ],

        Pa: [

            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Juft kun Ertalab B1",
                teacher: "Oydin Yusupova",
                progress: "15/30",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 4
            },
            {
                room: "3-xona",
                startTime: "11:30 - 12:00",
                name: "IELTS Advanced",
                teacher: "John Smith",
                progress: "20/25",
                status: "O'tildi",
                color: "bg-blue-500",
                rowSpan: 3
            }
        ],

        Ju: [

            {
                room: "3-xona",
                startTime: "8:00 - 8:30",
                name: "Juft kun Ertalab B1",
                teacher: "Oydin Yusupova",
                progress: "15/30",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 4
            },
            {
                room: "3-xona",
                startTime: "11:30 - 12:00",
                name: "IELTS Advanced",
                teacher: "John Smith",
                progress: "20/25",
                status: "O'tildi",
                color: "bg-blue-500",
                rowSpan: 3
            }
        ],

        Sha: [

            {
                room: "5-xona",
                startTime: "10:30 - 11:00",
                name: "Juft kun Ertalab B1",
                teacher: "Oydin Yusupova",
                progress: "15/30",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 4
            },
            {
                room: "3-xona",
                startTime: "11:30 - 12:00",
                name: "IELTS Advanced",
                teacher: "John Smith",
                progress: "20/25",
                status: "O'tildi",
                color: "bg-blue-500",
                rowSpan: 3
            }
        ],


        Yak: [

            {
                room: "1-xona",
                startTime: "10:30 - 11:00",
                name: "Juft kun Ertalab B1",
                teacher: "Oydin Yusupova",
                progress: "15/30",
                status: "O'tildi",
                color: "bg-emerald-500",
                rowSpan: 2
            },
            {
                room: "3-xona",
                startTime: "11:30 - 12:00",
                name: "IELTS Advanced",
                teacher: "John Smith",
                progress: "20/25",
                status: "O'tildi",
                color: "bg-blue-500",
                rowSpan: 3
            }
        ],
    };

    return (
        <div className='pt-[0px] px-[32px] pb-[33px]'>
            <div className="w-full h-[calc(130vh-320px)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-[15px] pb-[15px] pt-[15px] px-[18px] bg-[rgba(255,255,255,1)] overflow-hidden">
                {/* Days header */}
                <div className="flex gap-[14px] mb-3">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={classNames(
                                "w-[70px] h-[30px] flex justify-center items-center text-sm rounded-full transition-all duration-300 transform hover:scale-110",
                                day === activeDay
                                    ? "bg-[rgba(38,78,134,1)] text-white shadow-lg"
                                    : "bg-[rgba(242,238,238,1)] text-[#767676] hover:bg-[#e6e4e4]"
                            )}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className='w-full h-full rounded-[12px] border-[rgba(161,161,161,1)] overflow-auto'>
                    <div className="table w-full h-full border-[2px] border-[rgba(161,161,161,1)] bg-white shadow-lg rounded-[12px]">

                        <div
                            className='flex-1'
                            style={{ ...customScrollbar, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,53,95,1) rgba(255, 255, 255, 1)', }}>
                            <div style={webkitScrollbarStyles} className="scrollbar">
                                <div style={webkitScrollbarTrackStyles} className="scrollbar-track">
                                    <div style={webkitScrollbarThumbStyles} className="scrollbar-thumb"></div>
                                </div>
                            </div>


                            <div className=''>
                                <div className={`grid grid-cols-10 border-b border-[rgba(161,161,161,1)]`}>
                                    <div className="border-r border-[rgba(161,161,161,1)]"></div>
                                    {rooms.map((room) => (
                                        <div key={room} className="h-[44px] flex justify-center items-center border-r border-[rgba(161,161,161,1)]">
                                            <h1 className='font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(0,0,0,1)]'>{room}</h1>
                                        </div>
                                    ))}
                                </div>

                                {/* Time slots */}
                                {timeSlots.map((time) => (
                                    <div key={time} className={`grid grid-cols-${10} border-b border-[rgba(161,161,161,1)]`}>
                                        <div className="h-[90px] flex justify-center items-center border-r border-[rgba(161,161,161,1)] text-sm text-center">
                                            <h1 className='font-[roboto] font-[100] text-[12px] leading-[14.06px] text-[rgba(0,0,0,0.5)]'>
                                                {time}
                                            </h1>
                                        </div>
                                        {rooms.map((room) => {
                                            const classItem = classesByDay[activeDay]?.find(
                                                c => c.room === room && c.startTime === time
                                            );

                                            return (
                                                <div key={`${room}-${time}`} className="border-r border-[rgba(161,161,161,1)] h-[90px] relative">
                                                    <AnimatePresence>
                                                        {classItem && (
                                                            <motion.div
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.9 }}
                                                                transition={{ duration: 0.2 }}
                                                                className={`${classItem.color} flex flex-col items-center text-white p-[5px] rounded-md text-sm absolute w-auto inset-1`}
                                                                style={{
                                                                    height: classItem.rowSpan ? `${classItem.rowSpan * 90 - 7}px` : 'auto',
                                                                }}
                                                            >
                                                                <div className='flex flex-col'><span className='whitespace-nowrap'>{classItem.name}</span><span className='whitespace-nowrap'>{classItem.teacher}</span></div>
                                                                <hr className='my-[5px] w-[115%] -ml-[1%] border-white' />
                                                                <div className='flex flex-col w-full h-full items-center justify-center'>
                                                                    <div className='flex items-center w-full justify-center gap-[10px]'><span className='whitespace-nowrap'>{classItem.progress}</span><span className='whitespace-nowrap text-[#4E33EA]'>{classItem.status}</span></div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
