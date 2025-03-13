"use client"

import * as React from "react"

export default function DatePicker({ dateRange, onDateChange }) {
  const { startDate, endDate } = dateRange; // dateRange dan sanalarni olamiz
  const [showStartCalendar, setShowStartCalendar] = React.useState(false);
  const [showEndCalendar, setShowEndCalendar] = React.useState(false);

  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleStartDateChange = (date) => {
    const newEndDate = endDate < date ? date : endDate; // Agar endDate startDate dan kichik bo‘lsa, tenglashtiramiz
    onDateChange({ startDate: date, endDate: newEndDate });
    setShowStartCalendar(false);
  };

  const handleEndDateChange = (date) => {
    if (date >= startDate) {
      onDateChange({ startDate, endDate: date });
      setShowEndCalendar(false);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (startRef.current && !startRef.current.contains(event.target)) {
        setShowStartCalendar(false);
      }
      if (endRef.current && !endRef.current.contains(event.target)) {
        setShowEndCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-500 mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      <div className="flex items-center text-xl">
        <div ref={startRef} className="relative">
          <button
            className="focus:outline-none"
            onClick={() => {
              setShowStartCalendar(!showStartCalendar);
              setShowEndCalendar(false);
            }}
          >
            {formatDate(startDate)}
          </button>
          {showStartCalendar && (
            <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-lg p-2">
              <Calendar selectedDate={startDate} onChange={handleStartDateChange} />
            </div>
          )}
        </div>

        <span className="mx-2">-</span>

        <div ref={endRef} className="relative">
          <button
            className="focus:outline-none"
            onClick={() => {
              setShowEndCalendar(!showEndCalendar);
              setShowStartCalendar(false);
            }}
          >
            {formatDate(endDate)}
          </button>
          {showEndCalendar && (
            <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-lg p-2 -right-4">
              <Calendar
                selectedDate={endDate}
                onChange={handleEndDateChange}
                minDate={startDate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Calendar({ selectedDate, onChange, minDate }) {
  const [currentMonth, setCurrentMonth] = React.useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = React.useState(selectedDate.getFullYear());

  const monthNames = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr",
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;
      const isDisabled = minDate && date < minDate;

      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center rounded-full
            ${isSelected ? "bg-blue-500 text-white" : ""}
            ${isDisabled ? "text-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-gray-100"}`}
          onClick={() => !isDisabled && onChange(date)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-64">
      <div className="flex justify-between mb-2">
        <button className="p-1 hover:bg-gray-100 rounded-full" onClick={prevMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="font-medium">{monthNames[currentMonth]} {currentYear}</div>
        <button className="p-1 hover:bg-gray-100 rounded-full" onClick={nextMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
        <div>Ya</div><div>Du</div><div>Se</div><div>Ch</div><div>Pa</div><div>Ju</div><div>Sh</div>
      </div>
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
}