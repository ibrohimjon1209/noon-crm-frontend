import React, { useState } from 'react';
import editIcon from './img/edit_icon.png';
import deleteIcon from './img/delete_icon.png';
import menu from './img/menu.png';
import closeIcon from './img/close.png';
import './Assigment.css';
import DeleteModal from './Assigment_modal/Delete_modal';
import EditModal from './Assigment_modal/Edit_modal';

const Assigment = () => {
  // Tanlangan talaba uchun holatni saqlash
  const [selectedStudent, setSelectedStudent] = useState(null);
  // Menyu yopilish animatsiyasi uchun ID
  const [closingMenuId, setClosingMenuId] = useState(null);
  // O‘chirish modalini ochish/yopish holati
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // Tahrirlash modalini ochish/yopish holati
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Talabalar ro‘yxati va ularning holatini saqlash
  const [students, setStudents] = useState([
    {
      id: 1,
      type: 'Speaking',
      name: 'Mening topshirig‘im',
      date: 'kk.oo.yyyy',
      teacher: 'Hoshimjon Ro‘ziyev',
      group: '1a Kanada',
      score: '100 ball',
      comment: 'Qoniqarli',
      checked: false, // Tanlanganlik holati
      menuOpen: false, // Menyu ochiqlik holati
    },
  ]);

  // Barcha checkbox’larni tanlash yoki bekor qilish funksiyasi
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, checked }))
    );
  };

  // Har bir talaba uchun alohida checkbox’ni boshqarish funksiyasi
  const handleSingleCheck = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  // Menyuni ochish/yopish funksiyasi
  const toggleMenu = (id) => {
    const student = students.find((s) => s.id === id);
    if (student.menuOpen) {
      setClosingMenuId(id);
      setTimeout(() => {
        setStudents((prevStudents) =>
          prevStudents.map((s) => (s.id === id ? { ...s, menuOpen: false } : s))
        );
        setClosingMenuId(null);
      }, 300);
    } else {
      setStudents((prevStudents) =>
        prevStudents.map((s) =>
          s.id === id ? { ...s, menuOpen: true } : { ...s, menuOpen: false }
        )
      );
    }
  };

  // Tanlangan talabalarni hisoblash
  const selectedCount = students.filter((student) => student.checked).length;

  return (
    <div className="w-[112vw] h-auto bg-[white] m-[auto] -mt-[10px]">
      {/* Umumiy son va tanlanganlar sonini ko‘rsatish */}
      <div className="flex justify-end items-end relative top-[10px] ms-[30px] mr-[30px] gap-4">
        {selectedCount > 0 && (
          <h2 className="text-blue-400 text-[22px] mr-[30px]">
            {selectedCount} ta o'quvchi tanlangan
          </h2>
        )}
        <h2 className="text-[#747474] underline text-[20px]">
          Umumiy son: {students.length}
        </h2>
      </div>

      <table className="w-full mt-[10px] m-auto">
        <thead>
          <tr>
            <th className="h-[25px] p-2 scale-[1.5]">
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={students.every((student) => student.checked)}
                onChange={handleAllChecked}
              />
            </th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">№</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Turi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Nomi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Topshiriq muddati</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">O‘qituvchi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Guruh</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Maksimal ball</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Izoh</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-white w-[150px]"></th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr
              key={student.id}
              className="text-center relative duration-300 hover:bg-teal-100"
            >
              <td className="h-[25px] p-2 scale-[1.5]">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  checked={student.checked}
                  onChange={() => handleSingleCheck(student.id)}
                />
              </td>
              <td className="h-[50px] p-2 text-left">{index + 1}</td>
              <td className="p-2 text-left">{student.type}</td>
              <td className="p-2 text-left">{student.name}</td>
              <td className="p-2 text-left">{student.date}</td>
              <td className="p-2 text-left">{student.teacher}</td>
              <td className="p-2 text-left">{student.group}</td>
              <td className="p-2 text-left">{student.score}</td>
              <td className="p-2 text-left">{student.comment}</td>
              <td className="p-2 relative menu-container">
                <img
                  className="w-[30px] cursor-pointer float-right"
                  src={student.menuOpen ? closeIcon : menu}
                  alt="menyu"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(student.id);
                  }}
                />
                {student.menuOpen && (
                  <div className="absolute z-10 right-[40px] -top-[32px] w-[150px] h-[80px] rounded-lg overflow-hidden">
                    <div
                      className={`ml-[30px] w-[120px] h-[40px] mt-[36px] bg-white rounded-lg flex justify-evenly items-center p-2 z-50 ${closingMenuId === student.id ? 'menuSlideOut' : 'menuSlideIn'
                        }`}
                    >
                      {[
                        {
                          src: deleteIcon,
                          label: "O‘chirib tashlash",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsDeleteModalOpen(true);
                          },
                        },
                      ].map((ikonka, indeks) => (
                        <div key={indeks} className="icon-wrapper">
                          <img
                            className="w-[25px] mx-2 hover:scale-[1.1]"
                            src={ikonka.src}
                            alt={ikonka.label.toLowerCase()}
                            onClick={ikonka.onClick}
                            title={ikonka.label}
                          />
                          <div className="tooltip">
                            <div className="tooltip-text">{ikonka.label}</div>
                            <div className="tooltip-arrow" />
                          </div>
                        </div>
                      ))}

                      {[
                        {
                          src: editIcon,
                          label: "Tahrirlash",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsEditModalOpen(true);
                          },
                        },
                      ].map((ikonka, indeks) => (
                        <div key={indeks} className="icon-wrapper">
                          <img
                            className="w-[30px] mx-2 hover:scale-[1.1]"
                            src={ikonka.src}
                            alt={ikonka.label.toLowerCase()}
                            onClick={ikonka.onClick}
                            title={ikonka.label}
                          />
                          <div className="tooltip">
                            <div className="tooltip-text">{ikonka.label}</div>
                            <div className="tooltip-arrow" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* O‘chirish modali */}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {/* Tahrirlash modali */}
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          Students={selectedStudent}
        />
      )}
    </div>
  );
};

export default Assigment;