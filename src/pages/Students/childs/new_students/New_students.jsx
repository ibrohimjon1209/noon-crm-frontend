import React, { useEffect, useState } from "react";
import Header from "../../../Lids/childs/first_lesson/header";
import "./new_students.css";

function New_students() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      id: "123",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      group: "Web Dasturlash",
      teacher: "Falonchi Falonchiyev",
      moderator: "Asila opa",
      level: "O'rta",
      appDownload: "11.02.2025",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Header is_filter_open={true} />
      <div
        id="elka"
        className="flex-col bg-white w-[96.1%] text-[#404040] mt-[15px] h-[1000px] overflow-scroll rounded-xl"
      >
        <div
          className={`ml-6 mt-2 flex justify-between sticky top-0 left-0 w-full p-4 ${
            isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
          } transition-all duration-300`}
        >
          <div className="flex gap-[40px]">
            <p className="text-[25px] text-red-500">Qarzdor: -45229917</p>
            <p className="text-[25px] text-green-500">Haqdor: 0</p>
          </div>
          <p className="mr-9 text-[25px] text-gray-400 ">Umumiy 44</p>
        </div>
        <div className="w-full pt-[8px] px-[25px]">
          <table className="w-full border-collapse">
            <thead>
              <tr
                className={`sticky top-[50px] left-0 w-full p-4 ${
                  isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
                } transition-all duration-300`}
              >
                <th className="w-12 p-2 text-left border">
                  <input
                    type="checkbox"
                    className="w-10 h-4 border-[#0EA5E9] checked:bg-[#0EA5E9] checked:border-[#0EA5E9]"
                  />
                </th>
                <th className="w-12 p-5 text-left border text-gray-400 text-xl">
                  №
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  ID
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  O'quvchining ismi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Telefon raqami
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Balans
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Guruh
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  O'qituvchi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Moderator
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Ilovani yuklab olish sanasi
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(30)
                .fill(data[0])
                .map((row, index) => (
                  <tr key={index}>
                    <td className="p-2 border">
                      <input
                        type="checkbox"
                        className="w-10 h-4 border-[#0EA5E9] checked:bg-[#0EA5E9] checked:border-[#0EA5E9]"
                      />
                    </td>
                    <td className="p-5 border text-[18px]">{index + 1}</td>
                    <td className="p-5 border text-[18px]">{row.id}</td>
                    <td className="p-5 border text-[18px]">{row.name}</td>
                    <td className="p-5 border text-[18px]">{row.phone}</td>
                    <td className="p-5 border text-[18px]">{row.balans}</td>
                    <td className="p-5 border text-[18px]">{row.group}</td>
                    <td className="p-5 border text-[18px]">{row.teacher}</td>
                    <td className="p-5 border text-[18px]">{row.moderator}</td>
                    <td className="p-5 border text-[18px]">
                      {row.appDownload}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default New_students;
