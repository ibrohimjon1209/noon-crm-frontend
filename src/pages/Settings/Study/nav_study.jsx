import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import arrive_because from './imgs/arrive_because.png'
import extra_course from './imgs/extra_course.png'
import study_degree from './imgs/study_degree.png'


const Nav_finance = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActive = (path) => {
    return currentPath === path ? 'text-[rgba(38,78,134,1)] font-[500] ' : 'font-[500] text-[rgba(0,0,0,1)]';
  };

  return (
    <div className='pb-[45px]'>
      <div className='w-[30vw] h-[calc(135vh-180px)] pt-[5px] overflow-y-auto rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        <Link to="/settings/study/arrive" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={arrive_because} alt="arrive_because" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/study/arrive")}`}>Davomat sabablari</h1>
        </Link>
        <Link to="/settings/study/course" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={extra_course} alt="extra_course" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/study/course")}`}>Qo’shimcha mashg’ulotlar</h1>
        </Link>
        <Link to="/settings/study/degree" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={study_degree} alt="study_degree" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/study/degree")}`}>O’quvchini baholash darajalari</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_finance;