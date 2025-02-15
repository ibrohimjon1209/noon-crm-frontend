import React, { useState } from "react";
import plus from "../imgs/add_icon.png";
import exprt from "../imgs/export.png";
import imprt from "../imgs/import.png";
import arrow_down_black_icon from "../imgs/arrow_down_black_icon.png";
import clear from '../imgs/clear.png';
import "./Group_main.css"

const Group_main = () => {
  const [human_value, set_human_value] = useState("O'qituvchi");
  const [is_human_open, set_is_human_open] = useState(false);

  const [course_value, set_course_value] = useState("Kurs");
  const [is_course_open, set_is_course_open] = useState(false);

  const [moderator_value, set_moderator_value] = useState("Moderator");
  const [is_moderator_open, set_is_moderator_open] = useState(false);

  const [colors_value, set_colors_value] = useState("Ranglar bo'yicha");
  const [is_colors_open, set_is_colors_open] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [search, setSearch] = useState("");

  const data = [
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
  ];




  const humans_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Salima",
  ];
  const course_list = [
    "Ingliz tili",
    "Rus tili",
    "Arab tili",
    "IT",
    "Matematika"
  ];
  const moderator_list = [
    "Diyorbek Omonboyev",
    "Falonchi Pistonchiyev",
    "Falonchi Pistonchiyeva",
    "Salima",
  ];

  const colors_list = [
    "yashil",
    "ko'k",
    "sariq",
    "olovrang",
    "qizil"
  ];

  const handle_select_human = (human) => {
    set_human_value(human);
    set_is_human_open(false);
  };

  const handle_select_course = (course) => {
    set_course_value(course);
    set_is_course_open(false);
  };

  const handle_select_moderator = (moderator) => {
    set_moderator_value(moderator);
    set_is_moderator_open(false);
  };
  const handle_select_colors = (colors) => {
    set_colors_value(colors);
    set_is_colors_open(false);
  };
  return (
    <>
      <div className="w-[112vw] h-[150px] flex justify-around items-center mt-[30px] ms-[20px]">
        <div className="w-[25%] h-[100%] flex justify-around items-center flex-wrap">
          <div className="bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] cursor-pointer hover:scale-[1.05] active:scale-[0.95]">
            <img className="w-[20%]" src={plus} alt="" />
            <h1 className="text-white text-[20px]">Qo'shish</h1>
          </div>
          <div className="w-[100%] h-[50%] flex justify-around items-center">
            <div
              className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
            // onClick={() => setIsAddModalOpen(true)}
            >
              <img className='w-[20%]' src={exprt} alt="" />
              <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Export</h1>
            </div>
            <div
              className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
            // onClick={() => setIsAddModalOpen(true)}
            >
              <img className='w-[20%]' src={imprt} alt="" />
              <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Import</h1>
            </div>
          </div>
        </div>

        {/* O'qituvchi tanlash dropdown */}
        <div className="w-[75%] h-[100%] flex justify-around items-start flex-row flex-wrap">



          <div className="w-[100%] h-[50%] flex justify-around items-center">
            <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative  ">
              <div
                className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
                onClick={() => set_is_human_open(!is_human_open)}
              >
                <p className="text-[19px]">{human_value}</p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] duration-300 ${is_human_open ? "-rotate-180" : ""}`}
                  alt=""
                />
              </div>

              {is_human_open && (
                <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
                  {/* 🔍 Qidirish input */}
                  <div className="p-2 border-b border-gray-300">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded focus:outline-none"
                      placeholder="Qidirish..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  {/* 🔽 O‘qituvchilar ro‘yxati */}
                  <ul className="max-h-[200px] overflow-y-auto">
                    {humans_list
                      .filter((item) =>
                        item.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
                          onClick={() => handle_select_human(item)}
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Boshlanish vaqti input */}
            <div className="w-[300px] h-[70px] bg-white rounded-[5px] flex items-center justify-around">
              <label className="text-gray-700 text-[25px]">Boshlanish vaqti</label>
              <input
                type="time"
                className="ml-2 bg-transparent text-gray-500 focus:outline-none"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
                {startTime && (
                  <button
                    onClick={() => setStartTime("")}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <img src={clear} alt="clear" className="w-4 h-4" />
                  </button>
                )}
            </div>

            <div className="w-[300px] h-[70px] bg-white rounded-[5px] flex items-center justify-around">
              <label className="text-gray-700 text-[25px]">Tugash vaqti</label>
              <input
                type="time"
                className="ml-2 bg-transparent text-gray-500 focus:outline-none"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              {endTime && (
                <button
                  onClick={() => setEndTime("")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <img src={clear} alt="clear" className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
              <div
                className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
                onClick={() => set_is_course_open(!is_course_open)}
              >
                <p className="text-[19px]">{course_value}</p>
                <img
                  src={arrow_down_black_icon}
                  className={`w-[31px] h-[31px] duration-300 ${is_course_open ? "-rotate-180" : ""}`}
                  alt=""
                />
              </div>

              {is_course_open && (
                <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
                  {/* 🔍 Qidirish input */}
                  <div className="p-2 border-b border-gray-300">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded focus:outline-none"
                      placeholder="Qidirish..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  {/* 🔽 O‘qituvchilar ro‘yxati */}
                  <ul className="max-h-[200px] overflow-y-auto">
                    {course_list
                      .filter((item) =>
                        item.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
                          onClick={() => handle_select_course(item)}
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>



          <div className="w-[70%] h-[50%] flex justify-around items-center">
          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative ">
            <div
              className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
              onClick={() => set_is_moderator_open(!is_moderator_open)}
            >
              <p className="text-[19px]">{moderator_value}</p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] duration-300 ${is_moderator_open ? "-rotate-180" : ""}`}
                alt=""
              />
            </div>

            {is_moderator_open && (
              <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
                {/* 🔍 Qidirish input */}
                <div className="p-2 border-b border-gray-300">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                    placeholder="Qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* 🔽 O‘qituvchilar ro‘yxati */}
                <ul className="max-h-[200px] overflow-y-auto">
                  {moderator_list
                    .filter((item) =>
                      item.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
                        onClick={() => handle_select_moderator(item)}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>




          <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
            <div
              className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
              onClick={() => set_is_colors_open(!is_colors_open)}
            >
              <p className="text-[19px]">{colors_value}</p>
              <img
                src={arrow_down_black_icon}
                className={`w-[31px] h-[31px] duration-300 ${is_colors_open ? "-rotate-180" : ""}`}
                alt=""
              />
            </div>

            {is_colors_open && (
              <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
                {/* 🔍 Qidirish input */}
                <div className="p-2 border-b border-gray-300">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                    placeholder="Qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* 🔽 O‘qituvchilar ro‘yxati */}
                <ul className="max-h-[200px] overflow-y-auto">
                  {colors_list
                    .filter((item) =>
                      item.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
                        onClick={() => handle_select_colors(item)}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <input className="search1" style={{ "width": "260px", "height": "70px", "borderRadius": "5px", "padding": "0 20px", "transform": "scale(0.9)" }} type="search" placeholder="Qidirish" />
        </div>
          </div>

          
      </div>
            
      <div className="overflow-scroll w-[112vw] h-[45vw] m-auto rounded-[10px] mt-[10px]">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-3 px-4 text-left scale-[1.5]"><input type="checkbox"/></th>  
            <th className="py-3 px-4 text-left">№</th>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Guruh nomi</th>
            <th className="py-3 px-4 text-left">Kurs</th>
            <th className="py-3 px-4 text-left">Darajasi</th>
            <th className="py-3 px-4 text-left">Kun</th>
            <th className="py-3 px-4 text-left">Dars vaqti</th>
            <th className="py-3 px-4 text-left">Guruh vaqti</th>
            <th className="py-3 px-4 text-left">O‘quvchilar</th>
            <th className="py-3 px-4 text-left">O‘qituvchi</th>
            <th className="py-3 px-4 text-left">Xona</th>
            <th className="py-3 px-4 text-left">Guruh holati</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 scale-[1.5]"><input type="checkbox" /></td>
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.group}</td>
              <td className="py-3 px-4">{item.course}</td>
              <td className="py-3 px-4">{item.level}</td>
              <td className="py-3 px-4">{item.day}</td>
              <td className="py-3 px-4">{item.time}</td>
              <td className="py-3 px-4">{item.date}</td>
              <td className="py-3 px-4">{item.students}</td>
              <td className="py-3 px-4">{item.teacher}</td>
              <td className="py-3 px-4">{item.room}</td>
              <td className="py-3 px-4 text-green-500">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default Group_main;
// import React from 'react'

// const Group_main = () => {
//   return (
//     <div>Group_main</div>
//   )
// }

// export default Group_main;