import React, { useState } from 'react';
import noon_logo from './Image/blue/noon_logo.png';
import bell_icon from './Image/blue/bell_icon.png';
import profile from './Image/blue/profile.jpg';

const Nav_top = () => {
  const [selectedOption, setSelectedOption] = useState('NOON');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[63px] flex px-[40px] justify-between items-center bg-[rgba(255,255,255,1)] sticky top-0">
      <div className="flex gap-[25px]">
        <img src={noon_logo} className="w-[35px] h-[35px] object-cover" />
        <div className="centerzones flex justify-center items-center w-[122px] h-[37px] rounded-[5px] border-[2px] border-[rgba(0,53,95,1)] bg-[rgba(255,255,255,1)] relative">
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(0,0,0,1)] bg-transparent outline-none appearance-none w-full h-full pl-8"
          >
            <option className='' value="NOON">Hello World</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="flex gap-[20px]">
        <div className="flex items-center gap-[19.55px]">
          <img src={bell_icon} />
          <h1 className="font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(171,184,190,1)]">
            Ma'mirov M
          </h1>
        </div>
        <img src={profile} className="w-[39px] h-[39px] rounded-[50%]" />
      </div>
    </div>
  );
};

export default Nav_top;














