import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { GoKebabHorizontal } from "react-icons/go";
import Student_add_modal from "./Students_list_addStudentModal";
import Students_list_filter from "./Students_list_filter";
import { Link } from "react-router-dom";

function Students_list() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
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
      paymentDate: "10.09.2024 | 13:25",
      createDate: "12.04.2024 | 12:00",
      moderator: "Asila opa",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "12",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      paymentDate: "10.09.2024 | 13:25",
      createDate: "12.04.2024 | 12:00",
      moderator: "Asila opa",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "13",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      paymentDate: "10.09.2024 | 13:25",
      createDate: "12.04.2024 | 12:00",
      moderator: "Asila opa",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "23",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      paymentDate: "10.09.2024 | 13:25",
      createDate: "12.04.2024 | 12:00",
      moderator: "Asila opa",
      appDownload: "11.02.2025",
    },
    {
      checked: false,
      id: "33",
      name: "Ilhomov Elyor Eldorvich",
      phone: "+998 90 762 92 82",
      balans: "-50.000 UZS",
      paymentDate: "10.09.2024 | 13:25",
      createDate: "12.04.2024 | 12:00",
      moderator: "Asila opa",
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

  const handleSendStudentComment = () => {
    setIs_open_student_modal_comment(true);
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
  return (
    <div className="w-full px-[40px] mt-[15px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-[250px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.213 3.014c-.241.075-.371.176-.491.38l-.108.184-.012 1.688-.012 1.689-1.669.011-1.669.012-.199.102a.76.76 0 0 0-.319.297c-.112.181-.12.222-.12.578 0 .347.011.401.111.572a.862.862 0 0 0 .3.3l.189.111 1.688.012 1.688.012.012 1.688.012 1.688.111.189a.862.862 0 0 0 .3.3c.171.1.225.111.572.111.356 0 .397-.008.578-.12a.76.76 0 0 0 .297-.319l.102-.199.012-1.669.011-1.669 1.692-.012 1.691-.012.195-.12c.247-.153.38-.397.408-.751.028-.344-.066-.664-.25-.847-.249-.249-.355-.262-2.146-.262H13V9.407c0-1.79-.013-1.897-.261-2.146-.234-.234-.735-.326-1.12-.205"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
            O'quvchi qo'shish
          </button>
          <button className="w-[150px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.301 3.043c-.15.072-.284.171-.336.247-.048.071-.757.803-1.577 1.628-.948.955-1.52 1.561-1.574 1.668-.176.352-.085.733.255 1.073.341.341.722.431 1.073.254.095-.049.484-.398.897-.807l.729-.721.011 2.977.011 2.976.111.189a.862.862 0 0 0 .3.3c.171.1.225.111.572.111.356 0 .397-.008.578-.12a.76.76 0 0 0 .297-.319l.102-.199.011-2.958.011-2.957.729.721c.413.409.802.758.897.807.351.177.732.087 1.073-.254.34-.34.431-.721.255-1.073-.054-.107-.626-.713-1.574-1.668-.82-.825-1.529-1.557-1.577-1.628-.054-.079-.185-.173-.346-.25-.345-.163-.587-.162-.928.003"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
            Export
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[400px] flex p-2 bg-white border-2 rounded-lg">
            <CiSearch
              style={{
                width: "15%",
                fontSize: "32px",
                fontWeight: "900",
                color: "rgb(161, 165, 183)",
              }}
            />
            <input
              type="text"
              className="w-[85%] outline-none text-[18px] bg-white placeholder:text-[18px]"
              placeholder="Qidirish"
            />
          </div>
          <button
            onClick={() => setIsOpenFilter(true)}
            className="w-[150px] bg-blue-600 p-3 text-[18px] text-white border-none rounded-md flex items-center justify-center gap-2"
          >
            <CiFilter style={{ fontSize: "25px" }} />
            Filter
          </button>
          <button className="w-[60px] bg-white p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2">
            <GoKebabHorizontal
              style={{
                color: "black",
                fontSize: "30px",
                transform: "rotate(90deg)",
              }}
            />
          </button>
        </div>
      </div>
      <div
        id="elka"
        className="flex-col bg-white w-[100%] text-[#404040] mt-[25px] pb-[0px] h-[990px] overflow-x-clip rounded-xl"
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
        <div className="w-full h-[96vh] pt-[8px] px-[25px] flex flex-col justify-between">
          <table className="w-full border-collapse">
            <thead>
              <tr
                className={`sticky top-[70px] left-0 w-full p-4 ${
                  isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
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
              ${
                students.every((student) => student.checked)
                  ? "bg-[#0EA5E9]"
                  : "bg-white"
              } 
              after:content-[''] after:absolute 
              after:top-[2px] after:left-[5px] 
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
                  To'lov sanasi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Yaratilingan sana
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Manba moderator
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Ilovani yuklab olish sanasi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl"></th>
                <th className="p-5 text-left border text-gray-400 text-xl"></th>
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
                    <Link
                      to={"/students/profile/general"}
                      className="hover:underline"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="p-5 border text-[18px]">{row.phone}</td>
                  <td className="p-5 border text-[18px]">{row.balans}</td>
                  <td className="p-5 border text-[18px]">{row.paymentDate}</td>
                  <td className="p-5 border text-[18px]">{row.createDate}</td>
                  <td className="p-5 border text-[18px]">{row.moderator}</td>
                  <td className="p-5 border text-[18px]">{row.appDownload}</td>
                  <td className="p-5 border text-[18px]">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="my-icon"
                    >
                      <path
                        d="M19.9994 19.2601H10.9294C10.4794 19.2601 10.1094 18.8901 10.1094 18.4401C10.1094 17.9901 10.4794 17.6201 10.9294 17.6201H19.9994C20.4494 17.6201 20.8194 17.9901 20.8194 18.4401C20.8194 18.9001 20.4494 19.2601 19.9994 19.2601Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M19.9994 12.9701H10.9294C10.4794 12.9701 10.1094 12.6001 10.1094 12.1501C10.1094 11.7001 10.4794 11.3301 10.9294 11.3301H19.9994C20.4494 11.3301 20.8194 11.7001 20.8194 12.1501C20.8194 12.6001 20.4494 12.9701 19.9994 12.9701Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M19.9994 6.66979H10.9294C10.4794 6.66979 10.1094 6.29978 10.1094 5.84978C10.1094 5.39978 10.4794 5.02979 10.9294 5.02979H19.9994C20.4494 5.02979 20.8194 5.39978 20.8194 5.84978C20.8194 6.29978 20.4494 6.66979 19.9994 6.66979Z"
                        fill="#292D32"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M4.90969 8.02992C4.68969 8.02992 4.47969 7.93992 4.32969 7.78992L3.41969 6.87992C3.09969 6.55992 3.09969 6.03992 3.41969 5.71992C3.73969 5.39992 4.25969 5.39992 4.57969 5.71992L4.90969 6.04992L7.04969 3.90992C7.36969 3.58992 7.88969 3.58992 8.20969 3.90992C8.52969 4.22992 8.52969 4.74992 8.20969 5.06992L5.48969 7.78992C5.32969 7.93992 5.12969 8.02992 4.90969 8.02992Z"
                        fill="#292D32"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M4.90969 14.3302C4.69969 14.3302 4.48969 14.2502 4.32969 14.0902L3.41969 13.1802C3.09969 12.8602 3.09969 12.3402 3.41969 12.0202C3.73969 11.7002 4.25969 11.7002 4.57969 12.0202L4.90969 12.3502L7.04969 10.2102C7.36969 9.89021 7.88969 9.89021 8.20969 10.2102C8.52969 10.5302 8.52969 11.0502 8.20969 11.3702L5.48969 14.0902C5.32969 14.2502 5.11969 14.3302 4.90969 14.3302Z"
                        fill="#292D32"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M4.90969 20.3302C4.69969 20.3302 4.48969 20.2502 4.32969 20.0902L3.41969 19.1802C3.09969 18.8602 3.09969 18.3402 3.41969 18.0202C3.73969 17.7002 4.25969 17.7002 4.57969 18.0202L4.90969 18.3502L7.04969 16.2102C7.36969 15.8902 7.88969 15.8902 8.20969 16.2102C8.52969 16.5302 8.52969 17.0502 8.20969 17.3702L5.48969 20.0902C5.32969 20.2502 5.11969 20.3302 4.90969 20.3302Z"
                        fill="#292D32"
                      ></path>
                    </svg>
                  </td>
                  <td className="p-5 border text-[18px]">
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="my-icon"
                    >
                      <path
                        d="M10.125 4H9V7.75L12.21 9.655L12.75 8.7475L10.125 7.1875V4ZM9.75 0.25C7.95979 0.25 6.2429 0.961159 4.97703 2.22703C3.71116 3.4929 3 5.20979 3 7H0.75L3.72 10.0225L6.75 7H4.5C4.5 5.60761 5.05312 4.27226 6.03769 3.28769C7.02226 2.30312 8.35761 1.75 9.75 1.75C11.1424 1.75 12.4777 2.30312 13.4623 3.28769C14.4469 4.27226 15 5.60761 15 7C15 8.39239 14.4469 9.72774 13.4623 10.7123C12.4777 11.6969 11.1424 12.25 9.75 12.25C8.3025 12.25 6.99 11.6575 6.045 10.705L4.98 11.77C6.2025 13 7.875 13.75 9.75 13.75C11.5402 13.75 13.2571 13.0388 14.523 11.773C15.7888 10.5071 16.5 8.79021 16.5 7C16.5 5.20979 15.7888 3.4929 14.523 2.22703C13.2571 0.961159 11.5402 0.25 9.75 0.25Z"
                        fill="#949494"
                        fill-rule="evenodd"
                        viewBox="0 0 24 24"
                      ></path>
                    </svg>
                  </td>
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
        <Student_add_modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
        <Students_list_filter
          isOpen={isOpenFilter}
          onClose={() => setIsOpenFilter(false)}
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
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`absolute flex justify-between flex-col bottom-9 right-5 rounded-tl-[100px]  bg-white rounded-[20px] w-[525px] h-[630px] z-50 transition-all duration-300 ease-out ${
          isAnimating
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
              className="w-[85%] h-[50px] border-none outline-none bg-white rounded-lg pl-2 text-[18px] placeholder:text-[18px]"
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

export default Students_list;
