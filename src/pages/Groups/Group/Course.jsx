import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Student from "./Course_details/Students";
import Assigment from "./Course_details/Assigment";
import Training from "./Course_details/Training";
import calendar from "../imgs/black-calendar.png";
import edit from "../imgs/edit2.png";
import arrowdown from "../imgs/arrowdown.png";
import archive from "../imgs/solar-history.png";
import plus from "../imgs/add_icon.png";
import exprt from "../imgs/export.png";
// import search from '../imgs/search-normal.png'

const Course = () => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const info = [
    {
      name: "Kriminalogiya",
      degre: "elementary",
      mentor: "Hafizullo Omon",
      room: "156 xona",
      type: "offline",
      l_duration: "10:00 - 11:30",
      g_duration: "30.01.2025 - 10.08.2026",
      days: "Du-Se-Chor",
    },
  ];

  return (
    <>
      <div className="w-[112vw] h-[350px] bg-white rounded-[10px] m-auto mt-[30px] block overflow-auto">
        <div className="w-[100%] h-[70px] flex justify-end">
          <div className="w-[300px] h-[40px] flex justify-around items-center mt-[30px]">
            <img className="h-[80%]" src={calendar} alt="" />
            <img className="h-[80%]" src={edit} alt="" />
            <img className="h-[80%]" src={arrowdown} alt="" />
            <img className="h-[80%]" src={archive} alt="" />
          </div>
        </div>

        <table className="w-[100%] mt-[30px]">
          <thead>
            <tr>
              <th>№</th>
              <th>Kurs Nomi</th>
              <th>Kurs Darajasi</th>
              <th>Mentor</th>
              <th>Xona</th>
              <th>Turi</th>
              <th>Dars Davomiyligi</th>
              <th>Guruh Davomiyligi</th>
              <th>Hafta Kunlari</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item, index) => (
              <tr key={index}>
                <td className="text-center h-[40px]">{index + 1}</td>
                <td className="text-center h-[40px]">{item.name}</td>
                <td className="text-center h-[40px]">{item.degre}</td>
                <td className="text-center h-[40px]">{item.mentor}</td>
                <td className="text-center h-[40px]">{item.room}</td>
                <td className="text-center h-[40px]">{item.type}</td>
                <td className="text-center h-[40px]">{item.l_duration}</td>
                <td className="text-center h-[40px]">{item.g_duration}</td>
                <td className="text-center h-[40px]">{item.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-[112vw] h-[100px] m-auto">
        <div className="w-[550px] h-[100%] flex justify-around items-center">
          <div className="bg-[#0D99FF] w-[300px] h-[60px] rounded-[50px] flex px-[35px] items-center gap-[15px] cursor-pointer hover:scale-[102%] active:scale-[98%] duration-300">
            <img className="w-[35px]" src={plus} alt="" />
            <h1 className="text-white text-[20px]">O'quvchini qo'shish</h1>
          </div>
          <div className="bg-[#0D99FF] w-[200px] h-[60px] rounded-[50px] flex px-[40px] items-center gap-[19px] cursor-pointer hover:scale-[102%] active:scale-[98%] duration-300">
            <img className="w-[28px]" src={exprt} alt="" />
            <h1 className="text-white text-[20px]">Export</h1>
          </div>
        </div>
      </div>

      <div className="w-[112vw] h-[400px] border-black border-[1px] m-auto">
        <div className="w-[100%] h-[100px] border-black border-[1px] flex justify-between items-center">
          <div className="w-[50%] h-[100%] border-black border-[1px] flex justify-around items-center">
            <ul className=" w-[60%] gap-8 flex justify-around items-center">
              <li className="bg-[red] ">
                <Link className="text-[18px] text-[#404040]" to="/Groups/Group/Course_details">
                  O'quvchilar
                </Link>
                {location.pathname === "/Groups/Group/Course_details" && <div className="h-[2px] w-full bg-[#264E86]"></div>}
              </li>
              <li>
                <Link className="text-[18px] text-[#404040]" to="/Groups/Group/Course_details/Assigment">
                  Topshiriqlar
                </Link>
                {location.pathname === "/Groups/Group/Course_details/Assigment" && <div className="h-[2px] w-full bg-[#264E86]"></div>}
              </li>
              <li>
                <Link className="text-[18px] text-[#404040]" to="/Groups/Group/Course_details/Training">
                  Mashg'ulot Biriktish
                </Link>
                {location.pathname === "/Groups/Group/Course_details/Training" && <div className="h-[2px] w-full bg-[#264E86]"></div>}
              </li>
            </ul>
            <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg">
              <span className="text-gray-600 text-lg">Arxiv Talabalar</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all"></div>
              </label>
            </div>

          </div>

          
          <input
              type="text"
              className="w-[300px] h-[80px] bg-white rounded-[5px] relative font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
              placeholder="Qidirish"
            />
          

        </div>
      </div>
      
      

      <Routes>
        <Route path="/Groups/Group/Course_details" element={<Student />} />
        <Route path="/Groups/Group/Course_details/Assigment" element={<Assigment />} />
        <Route path="/Groups/Group/Course_details/Training" element={<Training />} />
      </Routes>

    </>
  );
};

export default Course;

// import React from 'react'
// import Students from './Course_details/Students'
// const Course = () => {
//   return (
//     <div><Students /></div>
//   )
// }

// export default Course