import React from 'react';
import { Link } from 'react-router-dom';
import function_icon from './Images/function.png';
import check_icon from './Images/check.png';
import subs_icon from './Images/subs.png';
import holiday_icon from './Images/holiday.png';

const Nav_settings = ({ active, setActive }) => {
  return (
    <div className='pb-[45px]'>
      <div className='w-[calc(100vw-80vw)] h-[calc(100vh-180px)] pt-[5px] rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        <Link to="/settings/function" onClick={() => setActive("Function")} className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={function_icon} alt="Function" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${active === "Function" ? 'text-[rgba(38,78,134,1)]' : 'text-[rgba(0,0,0,1)]'}`}>Funksionallik</h1>
        </Link>

        <Link to="/settings/check" onClick={() => setActive("Check")} className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={check_icon} alt="Check" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${active === "Check" ? 'text-[rgba(38,78,134,1)]' : 'text-[rgba(0,0,0,1)]'}`}>Chek</h1>
        </Link>

        <Link to="/settings/follow" onClick={() => setActive("Follow")} className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={subs_icon} alt="Follow" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${active === "Follow" ? 'text-[rgba(38,78,134,1)]' : 'text-[rgba(0,0,0,1)]'}`}>Obuna</h1>
        </Link>

        <Link to="/settings/holiday" onClick={() => setActive("Holiday")} className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={holiday_icon} alt="Holiday" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${active === "Holiday" ? 'text-[rgba(38,78,134,1)]' : 'text-[rgba(0,0,0,1)]'}`}>Bayram kunlari</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_settings;
