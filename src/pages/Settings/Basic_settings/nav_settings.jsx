import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import function_icon from './images/function.png';
import check_icon from './images/check.png';
import subs_icon from './images/subs.png';
import holiday_icon from './images/holiday.png';

const Nav_settings = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActive = (path) => {
    return currentPath === path ? 'text-[rgba(38,78,134,1)] font-[500] ' : 'font-[500] text-[rgba(0,0,0,1)]';
  };

  return (
    <div className='pb-[45px]'>
      <div className='w-[400px] h-[calc(100vh-180px)] pt-[5px] overflow-y-auto rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        
        <Link to="/settings/general/function" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={function_icon} alt="Function" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/general/function")}`}>Funksionallik</h1>
        </Link>

        <Link to="/settings/general/check" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={check_icon} alt="Check" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/general/check")}`}>Chek</h1>
        </Link>

        <Link to="/settings/general/follow" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={subs_icon} alt="Follow" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/general/follow")}`}>Obuna</h1>
        </Link>

        <Link to="/settings/general/holiday" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={holiday_icon} alt="Holiday" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/general/holiday")}`}>Bayram kunlari</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_settings;
