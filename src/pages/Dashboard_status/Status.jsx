import React, { useEffect, useState } from "react";
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
  const fillial_id = "9b447cc4d46b4e21";
  const API_URL = `https://mukhriddin.uz/api/home/statics/${fillial_id}/`;

  const [data, setData] = useState({
    orders: 0,
    first_lesson: 0,
    new_students: 0,
    active_students: 0,
    cancel_orders: 0,
    cancel_new_students: 0,
    active_student_dropouts: 0,
    debtors: 0,
    groups: 0,
    frozen: 0,
    archive: 0,
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dataItems = [
    { label: "Buyurtma", value: data.orders, icon: order },
    { label: "Birinchi daraga keladiganlar", value: data.first_lesson, icon: first_lesson },
    { label: "Yangi o'quvchi", value: data.new_students, icon: new_student },
    { label: "Aktiv o'quvchilar", value: data.active_students, icon: active_students },
    { label: "Buyurtmadan ketganlar", value: data.cancel_orders, icon: left_order },
    { label: "Yangi o'quvchidan ketganlar", value: data.cancel_new_students, icon: left_students },
    { label: "Aktiv o'quychidan ketganlar", value: data.active_student_dropouts, icon: left_aktiv_people },
    { label: "Qarzdor", value: data.debtors, icon: debtors },
    { label: "Guruhlar", value: data.groups, icon: groups },
    { label: "Birinchi to'lovni qilganlar", value: data.frozen, icon: first_payment },
    { label: "Muzlatilgan", value: data.frozen, icon: frozen },
    { label: "Arxiv", value: data.archive, icon: archive },
  ];

  return (
    <div className="px-[32px] pt-[33px] flex flex-col gap-[15px] mb-[26px]">
      <div className="first flex flex-wrap gap-y-[20px] gap-x-[1.7%]">
        {dataItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer w-[15.2%] h-[80px] pl-[27px] flex items-center gap-[11%] rounded-[10px] bg-[rgba(255,255,255,1)] shadow-md shadow-[#0D99FF40]"
          >
            <img src={item.icon} className="w-[55px] h-[55px] object-contain" alt={item.label} />
            <div className="flex flex-col gap-[5px] justify-center">
              <h1
                className={
                  item.label.length > 16
                    ? "font-[roboto] font-[400] text-[13px] leading-[14.6px] text-[rgba(0,0,0,0.5)]"
                    : "font-[roboto] font-[400] text-[16px] leading-[18.75px] text-[rgba(0,0,0,0.5)]"
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
