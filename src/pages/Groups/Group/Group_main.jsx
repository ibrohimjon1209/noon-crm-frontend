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
        <table className="w-full h-auto border-none bg-white rounded-[10px] text-black">
          <thead>
            <tr>
              <th className="w-12 px-6 pt-[20px] pb-[25px] text-left">
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
                        after:top-[2px] after:left-[5px] 
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
              <th className="w-12 px-6 pt-[20px] pb-[25px] text whitespace-nowrap-left">№</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">ID</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh nomi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Kurs</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Darajasi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Kun</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Dars vaqti</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh vaqti</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">O‘quvchilar</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">O‘qituvchi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Xona</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh holati</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 pb-[25px]">
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
                        after:top-[2px] after:left-[5px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${checkedRows[item.id] ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{index + 1}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.id}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.group}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.course}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.level}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.day}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.time}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.date}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.students}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.teacher}</td>
                <td className="px-6 pb-[25px] whitespace-nowrap">{item.room}</td>
                <td className="px-6 pb-[25px] text-green-500 whitespace-nowrap">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Group_main;