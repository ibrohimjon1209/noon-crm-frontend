import React, { useState, useEffect, useRef } from "react";
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
import InfoModal from './Students_items/InfoModal'
import ChatModal from './Students_items/ChatModal'
import TransferModal from './Students_items/TransferModal'
import './Students_items/Students.css';

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Nuraliyev Muhammad Sodiq", phone: "+998 90 990 09 99", balance: "892 765 uzs", price: "56 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 2, name: "Ismoilov Aziz", phone: "+998 91 111 11 11", balance: "750 000 uzs", price: "45 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 3, name: "Karimov Alisher", phone: "+998 93 222 22 22", balance: "620 500 uzs", price: "38 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
    { id: 4, name: "Raxmatov Akmal", phone: "+998 94 333 33 33", balance: "500 000 uzs", price: "30 000 uzs", checked: false, menuOpen: false, num_color: "#ffffff" },
  ]);

  const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [closingMenuId, setClosingMenuId] = useState(null);
  const [colorPickerState, setColorPickerState] = useState({
    isOpen: false,
    selectedStudentId: null,
  });
  const phoneRefs = useRef({});

  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents((prevStudents) => prevStudents.map((student) => ({ ...student, checked })));
  };

  const handleSingleCheck = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  const handlePhoneClick = (studentId) => {
    setColorPickerState({
      isOpen: true,
      selectedStudentId: studentId,
    });
  };

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

  const getContrastColor = (hexColor) => {
    if (!hexColor) return "black";
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
  };

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

  useEffect(() => {
    document.body.style.overflow = colorPickerState.isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [colorPickerState.isOpen]);

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

  // useEffect(() => {
  //   const closeMenu = (event) => {
  //     if (!event.target.closest(".menu-container")) {
  //       setStudents((prevStudents) =>
  //         prevStudents.map((student) => {
  //           if (student.menuOpen) {
  //             setClosingMenuId(student.id);
  //             setTimeout(() => {
  //               setStudents((prev) => prev.map((s) => ({ ...s, menuOpen: false })));
  //               setClosingMenuId(null);
  //             }, 300);
  //           }
  //           return student;
  //         })
  //       );
  //     }
  //   };
  //   document.addEventListener("click", closeMenu);
  //   return () => document.removeEventListener("click", closeMenu);
  // }, []);

  return (
    <div className="w-[112vw] h-[400px] bg-[white] m-[auto] overflow-auto">
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
            <th className="h-[25px] p-2 text-left">№</th>
            <th className="h-[25px] p-2 text-left">O'quvchini Ismi</th>
            <th className="h-[25px] p-2 text-left">Telefon Raqam</th>
            <th className="h-[25px] p-2 text-left">Balans</th>
            <th className="h-[25px] p-2 text-left">Narxi</th>
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
                  <div className="absolute z-10 right-[50px] -top-[32px] w-[490px] h-[80px] rounded-lg overflow-hidden ">
                    <div
                      className={`ml-[60px] w-[410px] h-[40px] mt-[39px] bg-white shadow-md rounded-lg  flex justify-evenly items-center p-2 z-50 ${closingMenuId === student.id ? "menuSlideOut" : "menuSlideIn"
                        }`}
                    >
                      {[
                        {
                          src: warningIcon, label: "O'quvchini gurhdan muzlatish", onClick: () => {
                            setSelectedStudent(student);
                            setIsFreezeModalOpen(true);
                          }
                        },
                        {
                          src: infoIcon, label: "Ma'lumot", onClick: () => {
                            setSelectedStudent(student);
                            setIsInfoModalOpen(true);
                          }
                        },
                        {
                          src: smsEditIcon, label: "Izoh", onClick: () => {
                            setSelectedStudent(student);
                            setIsChatModalOpen(true);
                          }
                        },
                        {
                          src: repeatIcon, label: "Transfer", onClick: () => {
                            setSelectedStudent(student);
                            setIsTransferModalOpen(true);
                          }
                        },
                        { src: teacherIcon, label: "Bitiruvchi" },
                        { src: archiveIcon, label: "O'quvchini tarixi" },
                        { src: trashIcon, label: "Guruhdan chiqarish" },
                        { src: undoIcon, label: "Lidga qaytarish" },
                      ].map((ikonka, indeks) => (
                        <div key={indeks} className="icon-wrapper">
                          <img
                            className={`w-${indeks === 5 ? '[30px]' : '[35px]'} mx-2 hover:scale-[1.1]`}
                            src={ikonka.src}
                            alt={ikonka.label.toLowerCase()}
                            onClick={ikonka.onClick}
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
    </div>
  );
};

export default Students;