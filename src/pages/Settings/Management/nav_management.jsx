import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import manager_icon from './imgs/manager.png'
import teacher_icon from './imgs/teacher.png'

const Nav_management = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActive = (path) => {
    return currentPath === path ? 'text-[rgba(38,78,134,1)] font-[500] ' : 'font-[500] text-[rgba(0,0,0,1)]';
  };

  return (
    <div className='pb-[px]'>
      <div className='w-[30vw] h-[calc(135vh-180px)] pt-[5px] overflow-y-auto rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        
        <Link to="/settings/management/manager" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={manager_icon} alt="Manager" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/management/manager")}`}>Menejer grading tizimi</h1>
        </Link>
        <Link to="/settings/management/teacher" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={teacher_icon} alt="Teacher" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/management/teacher")}`}>O'qituvchilar grading tizimi</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_management;
