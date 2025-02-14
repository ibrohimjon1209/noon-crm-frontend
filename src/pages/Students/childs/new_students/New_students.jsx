import React, { useEffect, useState } from "react";
import Header from "../../../Lids/childs/first_lesson/header";
import "./new_students.css";
import { div } from "framer-motion/client";

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
        className="flex-col bg-white w-[96.1%] text-[#404040] mt-[15px] pb-[80px] h-[990px] overflow-scroll rounded-xl"
      >
        <div
          className={`ml-6 mt-0 flex justify-between sticky top-0 left-0 w-full p-4 ${
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
                className={`sticky top-[70px] left-0 w-full p-4 ${
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
                <th className="p-5 text-left border text-gray-400 text-xl"></th>
              </tr>
            </thead>
            <tbody>
              {Array(30)
                .fill(data[0])
                .map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[rgb(226,239,248)] cursor-pointer"
                  >
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
                    <td className="p-5 border text-[18px] flex justify-center">
                      <svg
                        className="my-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#949494"
                        fill-rule="evenodd"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5.9 3.026c-.896.076-1.484.326-2.016.858-.491.491-.758 1.064-.841 1.807-.059.53-.059 9.088 0 9.618.108.965.55 1.69 1.352 2.217.601.395 1.091.474 2.932.474h1.251l1.441 1.435c1.282 1.275 1.463 1.441 1.638 1.5a.987.987 0 0 0 .686 0c.175-.059.356-.225 1.638-1.5L15.422 18h1.251c1.841 0 2.331-.079 2.932-.474.802-.527 1.244-1.252 1.352-2.217.059-.53.059-9.088 0-9.618-.058-.522-.197-.941-.431-1.296-.454-.69-1.077-1.127-1.866-1.306-.249-.057-.966-.064-6.44-.07a720.046 720.046 0 0 0-6.32.007m12.474 2.048c.212.071.489.358.554.572.074.246.077 9.452.003 9.694a.956.956 0 0 1-.481.546c-.187.093-.213.094-1.83.116-2.189.03-1.96-.067-3.53 1.492L12 18.577l-1.09-1.083c-1.57-1.559-1.341-1.462-3.53-1.492-1.617-.022-1.643-.023-1.83-.116a.988.988 0 0 1-.479-.526c-.064-.186-.094-8.935-.033-9.437.067-.549.31-.815.807-.88.14-.019 2.982-.031 6.315-.027 4.851.005 6.091.016 6.214.058"
                          fill="#949494"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

const Pagination = () => {
  return (
    <div className="w-[2240px] fixed flex justify-end p-3 rounded-xl bottom-[-299px] bg-white">
      <div className="flex items-center gap-2 p-4">
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:border-blue-500">
            <option>10 rows</option>
            <option>20 rows</option>
            <option>30 rows</option>
            <option>40 rows</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">
              2
            </button>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default New_students;
