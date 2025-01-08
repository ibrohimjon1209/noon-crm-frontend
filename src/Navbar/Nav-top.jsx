import React, { useState } from 'react';
import back from './Image/blue/back.png';
import profile from './Image/white/profile.png';
import search from './Image/black/search.png';
import question_icon from './Image/blue/question mark.png';
import message_icon from './Image/blue/message.png';
import notification_icon from './Image/blue/notification.png';

const Nav_top = () => {
  const [selectedOption, setSelectedOption] = useState('NOON');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[97px] flex px-[40px] justify-between shadow-[0px_2px_2px_0_#00000040] items-center bg-[rgba(255,255,255,1)] sticky top-0">
      <div className="flex gap-[25px]">
        <div className='flex items-center justify-center gap-[13px] cursor-pointer'>
          <img src={back} alt="" className='w-[24px] h-[24px]'/>
          <p className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black'>Orqaga</p>
        </div>
        <div className="cursor-pointer centerzones flex justify-center items-center w-[163px] h-[49px] rounded-[12px] border-[2px] border-[#0000004D] relative ml-[28px]">
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="cursor-pointer font-[roboto] font-[400] text-[18px] text-center leading-[21.09px] text-[rgba(0,0,0,1)] bg-transparent outline-none appearance-none w-full h-full"
            >
            <option className='cursor-pointer' value="NOON">NOON</option>
            <option className='cursor-pointer' value="Option 2">Option 2</option>
            <option className='cursor-pointer' value="Option 3">Option 3</option>
          </select>
        </div>
          <div className="relative flex items-center justify-center ml-[30px]">
            <input type="text" placeholder="Qidirish ..." className='w-[173px] h-[49px] pl-[10px] pr-[35px] text-black rounded-[12px] border-[2px] border-[#0000004D] bg-[rgba(255,255,255,1)]' />
            <img src={search} className="w-[20px] h-[20px] absolute right-[10px] object-contain cursor-pointer"/>
          </div>
      </div>

      <div className="flex gap-[20px]">
        <div className="flex items-center gap-[20px] pr-[30px]">
          <p className='font-[400] text-[16px] leading-[22.08px] text-[#0EA5E9] cursor-pointer' style={{ fontFamily: 'Alata' }}>O'zb</p>
          <p className='font-[400] text-[16px] leading-[22.08px] text-black cursor-pointer' style={{ fontFamily: 'Alata' }}>Рус</p>
          <p className='font-[400] text-[16px] leading-[22.08px] text-black cursor-pointer' style={{ fontFamily: 'Alata' }}>Eng</p>
          <img src={question_icon} className='w-[33px] h-[33px] cursor-pointer'/>
          <img src={message_icon} className='w-[33px] h-[33px] cursor-pointer'/>
          <img src={notification_icon} className='w-[33px] h-[33px] cursor-pointer'/>
        </div>
        <img src={profile} className="w-[39px] h-[39px] rounded-[50%] cursor-pointer"/>
      </div>
    </div>
  );
};

export default Nav_top;














