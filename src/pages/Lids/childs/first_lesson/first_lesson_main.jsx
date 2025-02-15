import React from "react";
import Header from "./header";

const First_lesson = () => {
  const data = [
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
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <Header is_filter_open={true} />
      <div className="flex-col bg-white w-[96.1%] text-[#404040] my-[25px]">
        <div className="w-full pt-[15px] px-[15px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-12 p-2 text-left border">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-[#0EA5E9] checked:bg-[#0EA5E9] checked:border-[#0EA5E9]"
                  />
                </th>
                <th className="w-12 p-2 text-left border">№</th>
                <th className="p-2 text-left border">ID</th>
                <th className="p-2 text-left border">O'quvchining ismi</th>
                <th className="p-2 text-left border">Telefon raqami</th>
                <th className="p-2 text-left border">Yaratilgan sanasi</th>
                <th className="p-2 text-left border">
                  Birinchi darsga kelish sanasi
                </th>
                <th className="p-2 text-left border">O'qituvchi</th>
                <th className="p-2 text-left border">Kurs</th>
                <th className="p-2 text-left border">Kurs darajasi</th>
                <th className="p-2 text-left border">Moderator</th>
              </tr>
            </thead>
            <tbody>
              {Array(20)
                .fill(data[0])
                .map((row, index) => (
                  <tr key={index}>
                    <td className="p-2 border">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-[#0EA5E9] checked:bg-[#0EA5E9] checked:border-[#0EA5E9]"
                      />
                    </td>
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{row.id}</td>
                    <td className="p-2 border">{row.name}</td>
                    <td className="p-2 border">{row.phone}</td>
                    <td className="p-2 border">{row.createdDate}</td>
                    <td className="p-2 border">{row.firstLessonDate}</td>
                    <td className="p-2 border">{row.teacher}</td>
                    <td className="p-2 border">{row.course}</td>
                    <td className="p-2 border">{row.level}</td>
                    <td className="p-2 border">{row.moderator}</td>
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
