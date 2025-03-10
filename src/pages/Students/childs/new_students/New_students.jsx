import React, { useEffect, useState } from "react";
import Header from "../../../Lids/childs/first_lesson/header";
import "./new_students.css";
import { Link } from "react-router-dom";

function New_students() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [is_open_student_modal_comment, setIs_open_student_modal_comment] =
    useState(false);
  const [selectRows, setSelectRows] = useState(15);

  const [students, setStudents] = useState([
    {
      checked: false,
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
    {
      checked: false,
      id: "12",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      group: "Web Dasturlash",
      teacher: "Falonchi Falonchiyev",
      moderator: "Asila opa",
      level: "O'rta",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "13",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      group: "Web Dasturlash",
      teacher: "Falonchi Falonchiyev",
      moderator: "Asila opa",
      level: "O'rta",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "23",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      group: "Web Dasturlash",
      teacher: "Falonchi Falonchiyev",
      moderator: "Asila opa",
      level: "O'rta",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "33",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      group: "Web Dasturlash",
      teacher: "Falonchi Falonchiyev",
      moderator: "Asila opa",
      level: "O'rta",
      appDownload: "11.02.2025",
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

  const handleCloseMopdalComment = () => {
    setIs_open_student_modal_comment(false);
  };

  const handleSelectedRows = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectRows(value);
  };

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

  const handleSendStudentComment = () => {
    setIs_open_student_modal_comment(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Header is_filter_open={true} />
      <div
        id="elka"
        className="flex-col bg-white w-[96.1%] text-[#404040] mt-[15px] pb-[0px] h-[990px] overflow-x-clip rounded-xl"
      >
        <div
          className={`ml-6 mt-0 flex justify-between sticky top-0 left-0 w-full p-4 ${isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
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
                className={`sticky top-[70px] left-0 w-full p-4 ${isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
                  } transition-all duration-300`}
              >
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
              ${students.every((student) => student.checked)
                            ? "bg-[#0EA5E9]"
                            : "bg-white"
                          } 
              after:content-[''] after:absolute 
              after:top-[2px] after:left-[5px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${students.every((student) => student.checked)
                            ? "after:block"
                            : "after:hidden"
                          }`}
                      ></span>
                    </label>
                  </div>
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
              {students.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-[rgb(226,239,248)] cursor-pointer"
                >
                  <td className="p-2 py-[10px]">
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
              after:top-[2px] after:left-[5px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${row.checked ? "after:block" : "after:hidden"}`}
                      ></span>
                    </label>
                  </td>
                  <td className="p-5 border text-[18px]">{index + 1}</td>
                  <td className="p-5 border text-[18px]">{row.id}</td>
                  <td className="p-5 border text-[18px]">
                    <Link to={"/students/profile/general"} className="hover:underline">
                      {row.name}
                    </Link>
                  </td>
                  <td className="p-5 border text-[18px]">{row.phone}</td>
                  <td className="p-5 border text-[18px]">{row.balans}</td>
                  <td className="p-5 border text-[18px]">{row.group}</td>
                  <td className="p-5 border text-[18px]">{row.teacher}</td>
                  <td className="p-5 border text-[18px]">{row.moderator}</td>
                  <td className="p-5 border text-[18px]">{row.appDownload}</td>
                  <td className="p-5 border text-[18px] flex justify-center">
                    <button onClick={() => handleSendStudentComment()}>
                      {" "}
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
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sticky bottom-0">
            <Pagination handleSelectedRows={handleSelectedRows} />
          </div>
        </div>
        <StudentSendComment
          onClose={handleCloseMopdalComment}
          isOpen={is_open_student_modal_comment}
        />
      </div>
    </div>
  );
}

const Pagination = ({ handleSelectedRows }) => {
  return (
    <div className="w-[100%] flex justify-between items-center p-3 rounded-xl bg-white">
      <p></p>
      <div className="flex justify-between gap-2 p-4">
        <div className="relative">
          <select
            onChange={handleSelectedRows}
            className="appearance-none bg-white text-[18px] rounded px-3 py-1 pr-8 focus:outline-none focus:border-blue-500"
          >
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
            <option value={50}>50 rows</option>
            <option value={100}>100 rows</option>
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

const StudentSendComment = ({ onClose, isOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      ></div>
      <div
        className={`absolute flex justify-between flex-col bottom-9 right-5 rounded-tl-[100px]  bg-white rounded-[20px] w-[525px] h-[630px] z-50 transition-all duration-300 ease-out ${isAnimating
          ? "translate-y-1 opacity-100"
          : "-translate-y-20 opacity-0"
          }`}
      >
        <div className="p-6 border-b-[10px] rounded-tl-[100px] flex pl-[60px]  justify-between border-black/30">
          <p className="text-3xl">Ilhomov</p>
          <button
            onClick={onClose}
            className="text-black text-[20px] font-roboto font-[800] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-5">
          <p className="text-[22px]">salom !</p>
        </div>
        <div className="p-5">
          <div className="p-2 flex border-2 rounded-xl border-gray-500">
            <input
              type="text"
              className="w-[85%] h-[50px] border-none bg-white outline-none rounded-lg pl-2 text-[18px] placeholder:text-[18px]"
              placeholder="Izoh..."
            />
            <button
              onClick={onClose}
              className="w-[80px] rounded-lg bg-blue-500 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_students;
