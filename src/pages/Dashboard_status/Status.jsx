import React, { useEffect } from "react";
import order from "./Image/order.png";
import first_lesson from "./Image/first_lesson.png";
import new_student from "./Image/new_student.png";
import active_students from "./Image/active_students.png";
import left_order from "./Image/left_order.png";
import left_aktiv_people from "./Image/remove_aktiv_people.png";
import left_students from "./Image/left_students.png";
import debtors from "./Image/debtors.png";
import groups from "./Image/groups.png";
import first_payment from "./Image/first_payment.png";
import frozen from "./Image/frozen.png";
import archive from "./Image/archive.png";

const Status = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://a7db-202-79-188-194.ngrok-free.app/api/home/statics/');
        const apiData = await response.json();

        // Log the API data to the console
        console.log(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { label: "Buyurtma", value: 8, icon: order },
    { label: "Birinchi daraga keladiganlar", value: 564, icon: first_lesson },
    { label: "Yangi o'quvchi", value: 38, icon: new_student },
    { label: "Aktiv o'quvchilar", value: 135, icon: active_students },
    { label: "Buyurtmadan ketganlar", value: 0, icon: left_order },
    { label: "Yangi o'quvchidan ketganlar", value: 0, icon: left_students },
    { label: "Aktiv o'quychidan ketganlar", value: 0, icon: left_aktiv_people },
    { label: "Qarzdor", value: 45, icon: debtors },
    { label: "Guruhlar", value: 16, icon: groups },
    { label: "Birinchi to'lovni qilganlar", value: 2, icon: first_payment },
    { label: "Muzlatilgan", value: 0, icon: frozen },
    { label: "Arxiv", value: 0, icon: archive },
  ];

  return (
    <div className="px-[32px] pt-[33px] flex flex-col gap-[15px] mb-[26px]">
      <div className="first flex flex-wrap gap-y-[20px] gap-x-[1.7%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden w-[15.2%] h-[80px] pl-[27px] flex items-center gap-[11%] rounded-[10px] bg-[rgba(255,255,255,1)] shadow-md shadow-[#0D99FF40]"
          >
            <img src={item.icon} className="w-[55px] h-[55px] object-contain" />
            <div className="flex flex-col gap-[5px] justify-center">
              <h1
                className={
                  item.label.length > 16
                    ? `font-[roboto] font-[400] text-[13px] leading-[14.6px] text-[rgba(0,0,0,0.5)]`
                    : `font-[roboto] font-[400] text-[16px] leading-[18.75px] text-[rgba(0,0,0,0.5)]`
                }
              >
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
