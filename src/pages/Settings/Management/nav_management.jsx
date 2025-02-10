import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav_management = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActive = (path) => {
    return currentPath === path ? 'text-[rgba(38,78,134,1)] font-[500] ' : 'font-[500] text-[rgba(0,0,0,1)]';
  };

  return (
    <div className='pb-[px]'>
      <div className='w-[30vw] h-[calc(135vh-180px)] pt-[5px] overflow-y-auto rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        
        <Link to="/settings/marketing/phone" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            {/* <img src={phone} alt="Phone" /> */}
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/marketing/phone")}`}>Menejer grading tizimi</h1>
        </Link>
        <Link to="/settings/marketing/hashtag" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[20.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            {/* <img src={hashtag} alt="Hashtag" /> */}
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/marketing/hashtag")}`}>Menejer grading tizimi</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_management;
