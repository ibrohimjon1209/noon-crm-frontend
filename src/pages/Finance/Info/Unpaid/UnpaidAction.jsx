import React, { useState } from 'react'
import calendar_icon from './imgs/calendar_icon.png'
import arrow_down_black_icon from './imgs/arrow_down_black_icon.png'

const UnpaidAction = () => {
    const [is_human_open, set_is_human_open] = useState(false);
    const [moderator_value, set_moderator_value] = useState("Aktiv");
    const [calendar_value, set_calendar_value] = useState("Oraliqni tanlang");
    const [is_calendar_open, set_is_calendar_open] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const monthNames = [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
        "Iyul", "Avgust", "Sentabr", "Oktyabr", "Noyabr", "Dekabr"
    ];

    const handle_select_human = (human) => {
        set_moderator_value(human);
        set_is_human_open(false);
    };

    const changeMonth = (increment) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + increment);
        setCurrentDate(newDate);
    };

    const getDaysInMonth = (year, month) => {
        const date = new Date(year, month, 0);
        return date.getDate();
    };

    const getStartDayOfMonth = (year, month) => {
        const date = new Date(year, month - 1, 1);
        let day = date.getDay();
        return day === 0 ? 6 : day - 1;
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
        const startDay = getStartDayOfMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
        const days = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayValue = `${String(i).padStart(2, '0')}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${currentDate.getFullYear()}`;
            const isSelected = calendar_value === dayValue;

            days.push(
                <div
                    key={i}
                    onClick={() => {
                        set_calendar_value(dayValue);
                        set_is_calendar_open(false);
                    }}
                    className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${isSelected ? 'bg-[rgba(38,78,134,1)] text-white' : 'hover:bg-[#f0f0f0]'}`}
                >
                    {i}
                </div>
            );
        }
        return days;
    };
    return(
         <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative ml-8 mt-4">
                        <div className={`h-[70px] w-[260px] cursor-pointer flex items-center border-[#C5C5C5] ${is_calendar_open ? 'border-[1.5px]' : 'border-[0px]'} rounded-[5px] justify-between px-[25px]`}
                            onClick={() => set_is_calendar_open(!is_calendar_open)}>
                            <img src={calendar_icon} className={`w-[33px] h-[33px] object-contain duration-[0.3s]`} alt=""/>
                            <p className={`font-roboto font-[400] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                                {calendar_value}
                            </p>
                        </div>
                        <div className={`absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${is_calendar_open ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll` : 'h-0 border-[0px]'}`}>
                            <div className="flex justify-between items-center p-[22px]">
                                <button onClick={() => changeMonth(-1)} className="cursor-pointer">
                                    <img src={arrow_down_black_icon} className="w-[25px] h-[25px] object-contain rotate-90" alt="" />
                                </button>
                                <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                                    {monthNames[currentDate.getMonth()]} <span className="font-[400]">{currentDate.getFullYear()}</span>
                                </p>
                                <button onClick={() => changeMonth(1)} className="cursor-pointer">
                                    <img src={arrow_down_black_icon} className="w-[25px] h-[25px] object-contain -rotate-90" alt="" />
                                </button>
                            </div>
                            <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
                            <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[400] leading-[12.1px] text-center text-[#292A34] text-[11.5px] mb-[10px]">
                                <p>Du</p><p>Se</p><p>Ch</p><p>Pa</p><p>Ju</p><p>Sh</p><p>Ya</p>
                            </div>
                            <div className="grid grid-cols-7 mt-[25px] px-[10px]">
                                {renderCalendar()}
                            </div>
                        </div>
                    </div>
    )
}

export default UnpaidAction