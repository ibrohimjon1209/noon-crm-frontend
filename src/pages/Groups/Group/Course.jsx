import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import calendar from "../imgs/black-calendar.png";
import edit from "../imgs/edit2.png";
import arrowdown from "../imgs/arrowdown.png";
import archive from "../imgs/solar-history.png";
import plus from "../imgs/add_icon.png";
import exprt from "../imgs/export.png";
import Nav_sec from "./Course_details/Navbar_sections";
import Students from './Course_details/Students';
import AddModal from './Course_addmodal/Add_modal';
import GraduateModal from './Course_addmodal/Graduate'; // Yangi import
import EditModal from './Course_addmodal/Edit_modal'
const Course = () => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isGraduateModalOpen, setIsGraduateModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null); // Yangi state
  const teacher_value = "Hafizullo Omon";
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
      <div className="w-[112vw] h-[350px] bg-white rounded-[10px] m-auto mt-[30px] block overflow-hidden">
        <div className="w-[100%] h-[70px] flex justify-end">
          <div className="w-[300px] h-[40px] flex justify-around items-center mt-[30px]">
            <img className="h-[80%]" src={calendar} alt="Kalendar" />
            <img
              className="h-[80%]"
              src={edit}
              alt="Tahrirlash"
              onClick={() => {
                setSelectedStudent(info[0]); // Tanlov qilish
                setIsEditModalOpen(true);
              }}
            />
            <img
              className="h-[80%]"
              src={arrowdown}
              alt="Pastga strelka"
              onClick={() => {
                setSelectedStudent(info[0]); // Tanlov qilish
                setIsGraduateModalOpen(true);
              }}
            />
            <img
              className="h-[80%]"
              src={archive}
              alt="Arxiv"

            />
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
          <div
            className="bg-[#0D99FF] w-[300px] h-[60px] rounded-[50px] flex px-[35px] items-center gap-[15px] cursor-pointer hover:scale-[102%] active:scale-[98%] duration-300"
            onClick={() => setIsAddModalOpen(true)}
          >
            <img className="w-[35px]" src={plus} alt="Qo'shish" />
            <h1 className="text-white text-[20px]">O'quvchini qo'shish</h1>
          </div>
          <div className="bg-[#0D99FF] w-[200px] h-[60px] rounded-[50px] flex px-[40px] items-center gap-[19px] cursor-pointer hover:scale-[102%] active:scale-[98%] duration-300">
            <img className="w-[28px]" src={exprt} alt="Eksport" />
            <h1 className="text-white text-[20px]">Eksport</h1>
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
            className="w-[300px] h-[80px] bg-white rounded-[5px] font-roboto font-[400] text-[19px] leading-[23.44px] text-black px-[20px]"
            placeholder="Qidirish"
          />
        </div>
      </div>

      {/* Modalni ko‘rsatish */}
      {isAddModalOpen && (
        <AddModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          teacher={teacher_value}
        />
      )}
      {isGraduateModalOpen && (
        <GraduateModal
          isOpen={isGraduateModalOpen}
          onClose={() => setIsGraduateModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          Students={selectedStudent}
        />
      )}
    </>
  );
};

export default Course;