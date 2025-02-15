import React, { useState } from "react";
import Header from "./header";

const First_lesson = () => {
  const [students, setStudents] = useState([
    {
      id: "123",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: true,
    },
    {
      id: "23",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: true,
    },
    {
      id: "13",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: true,
    },
    {
      id: "12",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: true,
    },
    {
      id: "34123",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: true,
    },
  ]);

  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents(students.map((student) => ({ ...student, checked })));
  };

  const handleSingleCheck = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex-col bg-white w-[96.1%] h-[calc(125vh-250px)] rounded-[10px] overflow-x-auto text-[#404040] my-[25px]">
        <div className="w-full py-[15px] px-[15px]">
          <table className="w-full border-none">
            <thead>
              <tr>
                <th className="w-12 p-2 text-left">
                  <div className="flex -mt-[8px] flex-row gap-[30px] pr-4 w-[100%]">
                    <label className="relative block cursor-pointer text-lg select-none">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                        checked={students.every((student) => student.checked)}
                        onChange={handleAllChecked}
                      />
                      <span
                        className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
              ${
                students.every((student) => student.checked)
                  ? "bg-[#0EA5E9]"
                  : "bg-white"
              } 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${
                students.every((student) => student.checked)
                  ? "after:block"
                  : "after:hidden"
              }`}
                      ></span>
                    </label>
                  </div>
                </th>
                <th className="w-12 p-2 text whitespace-nowrap-left ">№</th>
                <th className="p-2 text-left whitespace-nowrap">ID</th>
                <th className="p-2 text-left whitespace-nowrap">
                  O'quvchining ismi
                </th>
                <th className="p-2 text-left whitespace-nowrap">
                  Telefon raqami
                </th>
                <th className="p-2 text-left whitespace-nowrap">
                  Yaratilgan sanasi
                </th>
                <th className="p-2 text-left whitespace-nowrap">
                  Birinchi darsga kelish sanasi
                </th>
                <th className="p-2 text-left whitespace-nowrap">O'qituvchi</th>
                <th className="p-2 text-left whitespace-nowrap">Kurs</th>
                <th className="p-2 text-left whitespace-nowrap">
                  Kurs darajasi
                </th>
                <th className="p-2 text-left whitespace-nowrap">Moderator</th>
              </tr>
            </thead>
            <tbody>
              {students.map((row, index) => (
                <tr key={row.id}>
                  <td className="p-2">
                    <label className="-mt-[8px] relative block cursor-pointer text-lg select-none">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                        checked={row.checked}
                        onChange={() => handleSingleCheck(row.id)}
                      />
                      <span
                        className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
              ${row.checked ? "bg-[#0EA5E9]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${row.checked ? "after:block" : "after:hidden"}`}
                      ></span>
                    </label>
                  </td>
                  <td className="p-2 whitespace-nowrap">{index + 1}</td>
                  <td className="p-2 whitespace-nowrap">{row.id}</td>
                  <td className="p-2 whitespace-nowrap">{row.name}</td>
                  <td className="p-2 whitespace-nowrap">{row.phone}</td>
                  <td className="p-2 whitespace-nowrap">{row.createdDate}</td>
                  <td className="p-2 whitespace-nowrap">
                    {row.firstLessonDate}
                  </td>
                  <td className="p-2 whitespace-nowrap">{row.teacher}</td>
                  <td className="p-2 whitespace-nowrap">{row.course}</td>
                  <td className="p-2 whitespace-nowrap">{row.level}</td>
                  <td className="p-2 whitespace-nowrap">{row.moderator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default First_lesson;
