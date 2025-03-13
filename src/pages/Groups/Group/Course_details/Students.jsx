import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../imgs/menu.png";
import closeIcon from "../../imgs/close.png";
import warningIcon from "../../imgs/warning-2.png";
import infoIcon from "../../imgs/info-circle.jpg";
import smsEditIcon from "../../imgs/sms-edit.jpg";
import repeatIcon from "../../imgs/repeat.jpg";
import teacherIcon from "../../imgs/teacher.jpg";
import archiveIcon from "../../imgs/Vector.jpg";
import trashIcon from "../../imgs/trash.png";
import undoIcon from "../../imgs/undo.png";
import ColorPickerModal from "./Students_items/color_picker";
import FreezeModal from './Students_items/Freeze';
import InfoModal from './Students_items/InfoModal';
import ChatModal from './Students_items/ChatModal';
import TransferModal from './Students_items/TransferModal';
import GraduateModal from './Students_items/Graduate';
import DeleteModal from './Students_items/Delete';
import ReturnToLidModal from './Students_items/ReturnToLid';
import './Students_items/Students.css';

const Students = () => {
  const navigate = useNavigate(); // Sahifalar o‘rtasida navigatsiya uchun hook

  // O‘quvchilar ro‘yxati va ularning holatini saqlash
  const [students, setStudents] = useState([
    { id: 1, name: "Nuraliyev Muhammad Sodiq", phone: "+998 90 990 09 99", balance: "892 765 uzs", price: "56 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 2, name: "Ismoilov Aziz", phone: "+998 91 111 11 11", balance: "750 000 uzs", price: "45 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 3, name: "Karimov Alisher", phone: "+998 93 222 22 22", balance: "620 500 uzs", price: "38 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 4, name: "Raxmatov Akmal", phone: "+998 94 333 33 33", balance: "500 000 uzs", price: "30 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
  ]);

  // Modal oynalar uchun holatlar
  const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isGraduateModalOpen, setIsGraduateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isReturnToLidModalOpen, setIsReturnToLidModalOpen] = useState(false);

  // Tanlangan o‘quvchi va menyu yopilish ID si uchun holatlar
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [closingMenuId, setClosingMenuId] = useState(null);

  // Rang tanlash modalining holati
  const [colorPickerState, setColorPickerState] = useState({
    isOpen: false,
    selectedStudentId: null,
  });

  const phoneRefs = useRef({}); // Telefon raqamlari uchun ref

  // Barcha checkbox’larni tanlash yoki bekor qilish
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents((prevStudents) => prevStudents.map((student) => ({ ...student, checked })));
  };

  // Har bir o‘quvchi uchun alohida checkbox’ni boshqarish
  const handleSingleCheck = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  // Telefon raqamiga bosilganda rang tanlash modalini ochish
  const handlePhoneClick = (studentId) => {
    setColorPickerState({
      isOpen: true,
      selectedStudentId: studentId,
    });
  };

  // Rang tanlash funksiyasi
  const handleColorSelect = (color) => {
    if (colorPickerState.selectedStudentId) {
      setStudents(
        students.map((student) =>
          student.id === colorPickerState.selectedStudentId ? { ...student, num_color: color } : student
        )
      );
      setColorPickerState((prev) => ({ ...prev, isOpen: false }));
    }
  };

  // Rangga qarab kontrast rangni aniqlash (qora yoki oq)
  const getContrastColor = (hexColor) => {
    if (!hexColor) return "black";
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
  };

  // Tashqariga bosilganda rang tanlash modalini yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerState.isOpen) {
        let isClickInsideModal = false;
        Object.values(phoneRefs.current).forEach((ref) => {
          if (ref && ref.contains(event.target)) {
            isClickInsideModal = true;
          }
        });
        if (!isClickInsideModal) {
          setColorPickerState((prev) => ({ ...prev, isOpen: false }));
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [colorPickerState.isOpen]);

  // Rang tanlash modal ochiq bo‘lsa sahifani aylantirishni bloklash
  useEffect(() => {
    document.body.style.overflow = colorPickerState.isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [colorPickerState.isOpen]);

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

  // Arxiv sahifasiga o‘tish
  const handleArchiveClick = () => {
    navigate('/groups/archive');
  };

  // Tanlangan o‘quvchilar sonini hisoblash
  const selectedCount = students.filter((student) => student.checked).length;

  return (
    <div className="w-[112vw] h-auto bg-[white] m-auto -mt-[12px] overflow-none ">
      <h2 className="text-[#747474] underline text-[20px] float-right mr-[30px] mt-[30px]">
        Umumiy son: {students.length}
      </h2>
      <table className="w-full mt-[30px] m-auto">
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
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">O‘quvchining ismi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Telefon raqami</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Balans</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Narxi</th>
            <th className="h-[25px] p-2 text-left w-[30%]"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="text-center relative duration-300 hover:bg-teal-100">
              <td className="h-[25px] p-2 scale-[1.5]">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  checked={student.checked}
                  onChange={() => handleSingleCheck(student.id)}
                />
              </td>
              <td className="h-[50px] p-2 text-left">{index + 1}</td>
              <td className="p-2 text-left">{student.name}</td>
              <td className="p-2 text-left">
                <div className="relative" ref={(el) => (phoneRefs.current[student.id] = el)}>
                  <span
                    className="py-[7px] cursor-pointer active-105 rounded-[10px] px-[9px] inline-block"
                    style={{
                      background: student.num_color,
                      color: getContrastColor(student.num_color),
                    }}
                    onClick={() => handlePhoneClick(student.id)}
                  >
                    {student.phone}
                  </span>
                  {colorPickerState.isOpen && colorPickerState.selectedStudentId === student.id && (
                    <ColorPickerModal
                      onClose={() => setColorPickerState((prev) => ({ ...prev, isOpen: false }))}
                      onColorSelect={handleColorSelect}
                    />
                  )}
                </div>
              </td>
              <td className="p-2 text-left">{student.balance}</td>
              <td className="p-2 text-left">{student.price}</td>
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
                  <div className="absolute z-10 right-[50px] -top-[32px] w-[490px] h-[80px] rounded-lg overflow-hidden">
                    <div
                      className={`ml-[60px] w-[410px] h-[40px] mt-[39px] bg-white shadow-md rounded-lg flex justify-evenly items-center p-2 z-50 ${closingMenuId === student.id ? "menuSlideOut" : "menuSlideIn"
                        }`}
                    >
                      {[
                        {
                          src: warningIcon,
                          label: "O‘quvchini guruhdan muzlatish",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsFreezeModalOpen(true);
                          },
                        },
                        {
                          src: infoIcon,
                          label: "Ma‘lumot",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsInfoModalOpen(true);
                          },
                        },
                        {
                          src: smsEditIcon,
                          label: "Izoh",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsChatModalOpen(true);
                          },
                        },
                        {
                          src: repeatIcon,
                          label: "Transfer",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsTransferModalOpen(true);
                          },
                        },
                        {
                          src: teacherIcon,
                          label: "Bitiruvchi",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsGraduateModalOpen(true);
                          },
                        },
                        {
                          src: archiveIcon,
                          label: "O‘quvchi tarixi",
                          onClick: handleArchiveClick,
                        },
                        {
                          src: trashIcon,
                          label: "Guruhdan chiqarish",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsDeleteModalOpen(true);
                          },
                        },
                        {
                          src: undoIcon,
                          label: "Lidga qaytarish",
                          onClick: () => {
                            setSelectedStudent(student);
                            setIsReturnToLidModalOpen(true);
                          },
                        },
                      ].map((ikonka, indeks) => (
                        <div key={indeks} className="icon-wrapper">
                          <img
                            className={`w-${indeks === 5 ? '[30px]' : '[35px]'} mx-2 hover:scale-[1.1]`}
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

      {/* Modal oynalar */}
      {isFreezeModalOpen && (
        <FreezeModal
          isOpen={isFreezeModalOpen}
          onClose={() => setIsFreezeModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isInfoModalOpen && (
        <InfoModal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isChatModalOpen && (
        <ChatModal
          isOpen={isChatModalOpen}
          onClose={() => setIsChatModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isTransferModalOpen && (
        <TransferModal
          isOpen={isTransferModalOpen}
          onClose={() => setIsTransferModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isGraduateModalOpen && (
        <GraduateModal
          isOpen={isGraduateModalOpen}
          onClose={() => setIsGraduateModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          Students={selectedStudent}
        />
      )}
      {isReturnToLidModalOpen && (
        <ReturnToLidModal
          isOpen={isReturnToLidModalOpen}
          onClose={() => setIsReturnToLidModalOpen(false)}
          Students={selectedStudent}
        />
      )}
    </div>
  );
};

export default Students;