import React, { useState } from 'react';
import calendar_icon from '../../imgs/calendar_icon.png';

const months = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];

export function DateInput({ label, value, onChange }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(value || new Date());

  const formatDate = (date) => {
    return date ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}` : '';
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onChange(newDate);
    setShowCalendar(false);
  };

  const changeMonth = (delta) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className="text-[black] w-8 h-8 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {i}
        </button>
      );
    }

    return (
      <div className="ml-[50%] absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-2">
        <div className="flex justify-between mb-2">
          <button onClick={() => changeMonth(-1)}>&lt;</button>
          <span>{months[month]} {year}</span>
          <button onClick={() => changeMonth(1)}>&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map(day => (
            <div key={day} className="w-8 h-8 flex items-center justify-center font-semibold">{day}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      {label && <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">{label}</label>}
      <div className="relative text-black">
        <input
          value={formatDate(value)}
          placeholder="mm/dd/yyyy"
          readOnly
          className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md pr-10"
          onClick={() => setShowCalendar(!showCalendar)}
        />
        <img
          src={calendar_icon}
          alt="Calendar"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {showCalendar && renderCalendar()}
      </div>
    </div>
  );
}