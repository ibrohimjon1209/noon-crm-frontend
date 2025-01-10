import React, { useState } from 'react';
import Test from './Test';

const Table = () => {
    const [selectedDay, setSelectedDay] = useState('Du');

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div className=''>


            <Test />
        </div>
    );
};

export default Table;
