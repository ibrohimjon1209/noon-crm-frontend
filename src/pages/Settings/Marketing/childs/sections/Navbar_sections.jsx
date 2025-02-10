import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Student from './Student';
import Order from './Order';
import Lessons from './Lessons';

const Navbar_sections = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className='w-full h-[88px] mt-[30px] rounded-[15px]'>
      <ul className='w-[100%] h-[8%] mt-[20px] flex justify-start gap-[6%] pl-[40px] items-center'>
        <li>
          <Link className='text-[18px] text-[#404040] font-inter font-[600]' to="/settings/marketing/sections">O'quvchi</Link>
          {location.pathname === '/settings/marketing/sections' && (
            <div className='line-bottom mt-[5px] h-[1px] w-full bg-[#264E86]'></div>
          )}
        </li>
        <li>
          <Link className='text-[18px] text-[#404040] font-inter font-[600]' to="/settings/marketing/sections/order">Buyurtma</Link>
          {location.pathname === '/settings/marketing/sections/order' && (
            <div className='line-bottom mt-[5px] h-[1px] w-full bg-[#264E86]'></div>
          )}
        </li>
        <li>
          <Link className='text-[18px] text-[#404040] font-inter font-[600]' to="/settings/marketing/sections/lessons">Birinchi darsga keladiganlar</Link>
          {location.pathname === '/settings/marketing/sections/lessons' && (
            <div className='line-bottom mt-[5px] h-[1px] w-full  bg-[#264E86]'></div>
          )}
        </li>
      </ul>

      <Routes>
        <Route path='/student' element={<Student />} />
        <Route path='/order' element={<Order />} />
        <Route path='/lessons' element={<Lessons />} />
      </Routes>
    </div>
  );
}

export default Navbar_sections;
