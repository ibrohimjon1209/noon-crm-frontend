import { useState } from "react";
import Header from "./header";
import "./Group_main.css";

const Group_main = () => {
  const [checkedRows, setCheckedRows] = useState({});

  const data = [
    { id: 123, group: "IT", course: "IT", level: "Boshlang‘ich", day: "Toq", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 124, group: "IT", course: "Ingliz Tili", level: "O‘rta", day: "Juft", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" },
    { id: 125, group: "IT", course: "Rus Tili", level: "Yuqori", day: "Du-Se", time: "11:25–13:05", date: "22.05.2024–22.05.2025", students: 31, teacher: "Ali Xasanov", room: "121-xona", status: "Active" }
  ];

  const handleAllChecked = (e) => {
    const isChecked = e.target.checked;
    const newCheckedRows = {};
    data.forEach((item) => {
      newCheckedRows[item.id] = isChecked;
    });
    setCheckedRows(newCheckedRows);
  };

  const handleSingleCheck = (id) => {
    setCheckedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Header />
      <div className="overflow-auto w-[112vw] h-[45vw] m-auto rounded-[10px] mt-[50px]">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left scale-[1.5]">
                <div className="flex -mt-[8px] flex-row gap-[30px] pr-4 w-[100%]">
                  <label className="relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={
                        Object.keys(checkedRows).length === data.length &&
                        Object.values(checkedRows).every(Boolean)
                      }
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                        ${
                          Object.keys(checkedRows).length === data.length &&
                          Object.values(checkedRows).every(Boolean)
                            ? "bg-[#0EA5E9]"
                            : "bg-white"
                        } 
                        after:content-[''] after:absolute 
                        after:top-[3px] after:left-[6px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${
                          Object.keys(checkedRows).length === data.length &&
                          Object.values(checkedRows).every(Boolean)
                            ? "after:block"
                            : "after:hidden"
                        }`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="py-3 px-4 text-left">№</th>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Guruh nomi</th>
              <th className="py-3 px-4 text-left">Kurs</th>
              <th className="py-3 px-4 text-left">Darajasi</th>
              <th className="py-3 px-4 text-left">Kun</th>
              <th className="py-3 px-4 text-left">Dars vaqti</th>
              <th className="py-3 px-4 text-left">Guruh vaqti</th>
              <th className="py-3 px-4 text-left">O‘quvchilar</th>
              <th className="py-3 px-4 text-left">O‘qituvchi</th>
              <th className="py-3 px-4 text-left">Xona</th>
              <th className="py-3 px-4 text-left">Guruh holati</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4 scale-[1.5]">
                  <label className="-mt-[8px] relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={checkedRows[item.id] || false}
                      onChange={() => handleSingleCheck(item.id)}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                        ${checkedRows[item.id] ? "bg-[#0EA5E9]" : "bg-white"} 
                        after:content-[''] after:absolute 
                        after:top-[3px] after:left-[6px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${checkedRows[item.id] ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </td>
                <td className="py-3 px-4 text-[black]">{index + 1}</td>
                <td className="py-3 px-4 text-[black]">{item.id}</td>
                <td className="py-3 px-4 text-[black]">{item.group}</td>
                <td className="py-3 px-4 text-[black]">{item.course}</td>
                <td className="py-3 px-4 text-[black]">{item.level}</td>
                <td className="py-3 px-4 text-[black]">{item.day}</td>
                <td className="py-3 px-4 text-[black]">{item.time}</td>
                <td className="py-3 px-4 text-[black]">{item.date}</td>
                <td className="py-3 px-4 text-[black]">{item.students}</td>
                <td className="py-3 px-4 text-[black]">{item.teacher}</td>
                <td className="py-3 px-4 text-[black]">{item.room}</td>
                <td className="py-3 px-4 text-green-500">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Group_main;
