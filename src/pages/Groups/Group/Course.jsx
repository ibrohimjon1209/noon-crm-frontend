import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Students from "./Course_details/Students";
import Assigment from "./Course_details/Assigment";
import Training from "./Course_details/Training";
import calendar from "../imgs/black-calendar.png";
import edit from "../imgs/edit2.png";
import arrowdown from "../imgs/arrowdown.png";
import archive from "../imgs/solar-history.png";
import plus from "../imgs/add_icon.png";
import exprt from "../imgs/export.png";
import Nav_sec from './Course_details/Navbar_sections'
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

      <div className="w-[112vw] h-[400px] m-auto">
        <div className="w-[100%] h-[100px] flex justify-between items-center">
          <div className="w-[50%] h-[100%] flex justify-around items-center">

            <Nav_sec />



          </div>


          <input
            type="text"
            className="w-[300px] h-[80px] bg-white rounded-[5px] relative font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
            placeholder="Qidirish"
          />



        </div>
        {/* <Students /> */}
      </div>




    </>
  );
};

export default Course;

