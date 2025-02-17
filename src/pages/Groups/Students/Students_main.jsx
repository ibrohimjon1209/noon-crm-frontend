import React, { useState } from "react";

const Students_main = () => {
  const [students, setStudents] = useState([
    {
      id: "1",
      student_name: "Nuraliyev Muhammad Sodiq",
      teacher: "Ali Xasanov",
      group_name: "IT",
      status: "Active",
      checked: false,
    },
    {
      id: "2",
      student_name: "Nuraliyev Muhammad Sodiq",
      teacher: "Ali Xasanov",
      group_name: "Ingliz tili",
      status: "Muzlatilgan",
      checked: false,
    },
    {
      id: "3",
      student_name: "Nuraliyev Muhammad Sodiq",
      teacher: "Ali Xasanov",
      group_name: "Rus tili",
      status: "New",
      checked: false,
    },
  ]);

  const allChecked = students.length > 0 && students.every(student => student.checked);

  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents(students.map(student => ({ ...student, checked })));
  };

  const handleSingleCheck = (id) => {
    setStudents(
      students.map(student =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  return (
    <div className="m-auto flex-col bg-white w-[96.1%] h-[calc(150vh-250px)] rounded-[10px] overflow-x-auto text-[#404040] my-[25px]">
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
                      checked={allChecked}
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                        ${allChecked ? "bg-[#0EA5E9]" : "bg-white"} 
                        after:content-[''] after:absolute 
                        after:top-[3px] after:left-[6px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${allChecked ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="w-12 p-2 text-left">№</th>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">O'quvchining ismi</th>
              <th className="p-2 text-left">O'qituvchi</th>
              <th className="p-2 text-left">Guruh nomi</th>
              <th className="p-2 text-left">Guruh holati</th>
              <th className="p-2 text-left">
                <p>Umumiy son</p>
                {students.length}
              </th>
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
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.student_name}</td>
                <td className="p-2">{row.teacher}</td>
                <td className="p-2">{row.group_name}</td>
                <td className="p-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students_main;
