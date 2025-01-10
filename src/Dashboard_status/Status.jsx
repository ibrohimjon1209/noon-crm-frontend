import React from 'react';
import student_icon from './Image/students_icon.png';
import lid_icon from './Image/lid_icon.png';
import debtor_icon from './Image/debtor_icon.png';
import freeze_icon from './Image/freeze_icon.png';
import graduate_icon from './Image/graduate_icon.png';
import money_icon from './Image/money_icon.png';
import archive_icon from './Image/archive_icon.png';
import icon from './Image/icon.png';

const Status = () => {
  const data = [
    { label: 'Buyurtma', value: 8, icon: icon },
    { label: 'Birinchi daraga keladiganlar', value: 18, icon: icon },
    { label: 'Yangi o\'quvchi', value: 38, icon: icon },
    { label: 'Aktiv o\'quvchilar', value: 135, icon: icon },
    { label: 'Buyurtmadan ketganlar', value: 0, icon: icon },
    { label: 'Yangi o\'quvchidan ketganlar', value: 0, icon: icon },
    { label: 'Aktiv o\'quychidan ketganlar', value: 0, icon: icon },
    { label: 'Qarzdor', value: 45, icon: icon },
    { label: 'Guruhlar', value: 16, icon: icon },
    { label: 'Birinchi to\'lovni qilganlar', value: 2, icon: icon },
    { label: 'Muzlatilgan', value: 0, icon: icon },
    { label: 'Arxiv', value: 0, icon: icon },
  ];

  return (
    <div className="px-[32px] pt-[33px] flex flex-col gap-[15px] mb-[26px]">
      <div className="first flex flex-wrap gap-y-[20px] gap-x-[1.7%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[15.2%] h-[80px] pl-[27px] flex items-center gap-[10%] rounded-[10px] bg-[rgba(255,255,255,1)] shadow-lg shadow-[rgba(13,153,255,0.25)]"
          >
            <img src={item.icon} className="w-[55px] h-[55px] object-cover" />
            <div className="flex flex-col gap-[5px] justify-center">
              <h1 className="font-[roboto] font-[400] text-[13px] leading-[18.75px] text-[rgba(0,0,0,0.5)]">
                {item.label}
              </h1>
              <h1 className="font-[alata] font-[400] text-[14px] leading-[19.32px] text-[rgba(0,0,0,1)]">
                {item.value}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
