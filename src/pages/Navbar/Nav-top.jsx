import React, { useState } from 'react';
import back from './Image/blue/back.png';
import profile from './Image/black/profile.png';
import search from './Image/black/search.png';
import question_icon from './Image/blue/question mark.png';
import message_have_icon from './Image/blue/message_have.png';
import notification_have_icon from './Image/blue/notification_have.png';
import { Link } from 'react-router-dom';

const Nav_top = () => {
  const [selectedOption, setSelectedOption] = useState('NOON');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[67px] shadow-[0px_4px_4px_0_#00000040] bg-[rgba(255,255,255,1)] sticky top-0">
      <div className='flex  w-full h-full scale-[90%] bg-[rgba(255,255,255,1)] justify-between  items-center'>
        <div className="flex ml-[3%] gap-[25px]">
          <div className='flex items-center justify-center gap-[13px]'>
            <Link to='/'>
              <img src={back} alt="" className='w-[24px] h-[24px] cursor-pointer object-contain' />
            </Link>
            <p className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black'>Orqaga</p>
          </div>
          <div className="cursor-pointer centerzones flex justify-center items-center w-[163px] h-[49px] rounded-[12px] border-[2px] border-[#0000004D] relative ml-[28px]">
            <select
              value={selectedOption}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="cursor-pointer font-roboto font-[500] text-[18px] text-center leading-[21.09px] text-[rgba(0,0,0,1)] bg-transparent outline-none appearance-none w-full h-full"
            >
              <option className='cursor-pointer' value="NOON">NOON</option>
              <option className='cursor-pointer' value="Option 2">Option 2</option>
              <option className='cursor-pointer' value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="relative flex items-center justify-center ml-[30px]">
            <input type="text" placeholder="Qidirish ..." className='w-[173px] h-[49px] pl-[10px] pr-[35px] text-black rounded-[12px] border-[2px] border-[#0000004D] bg-[rgba(255,255,255,1)]' />
            <img src={search} className="w-[20px] h-[20px] absolute right-[10px] object-contain cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-[20px] mr-[-45px]">
          <div className="flex items-center gap-[20px] pr-[30px]">
            <p className='font-[400] text-[16px] leading-[22.08px] text-[#0EA5E9] cursor-pointer' style={{ fontFamily: 'inter' }}>O'zb</p>
            <p className='font-[400] text-[16px] leading-[22.08px] text-black cursor-pointer' style={{ fontFamily: 'inter' }}>Рус</p>
            <p className='font-[400] text-[16px] leading-[22.08px] text-black cursor-pointer' style={{ fontFamily: 'inter' }}>Eng</p>
            <img src={question_icon} className='w-[33px] h-[33px] cursor-pointer' />
            <img src={message_have_icon} className='w-[33px] h-[33px] cursor-pointer' />
            <img src={notification_have_icon} className='w-[33px] h-[33px] cursor-pointer' />
          </div>
          <Link to={"/profile/transaction"}>
            <img src={profile} className="w-[39px] h-[39px] rounded-[50%] cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav_top;














