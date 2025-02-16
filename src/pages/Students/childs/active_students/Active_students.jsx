import React, { useEffect, useState } from "react";
import Header from "../../../Lids/childs/first_lesson/header";

function Active_students() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [is_open_student_modal_comment, setIs_open_student_modal_comment] =
    useState(false);
  const [selectRows, setSelectRows] = useState(15);

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
      paymentDate: "12.01.2024 | 00:00",
      createdDate: "14.11.2023 | 12:00",
      moderator: "Asila opa",
      appDownload: "11.02.2025",
    },
  ];

  const handleSendStudentComment = () => {
    setIs_open_student_modal_comment(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full pl-[40px]">
        <div className="flex gap-4 h-[70px] mt-[25px]">
          <button className="w-[150px] bg-blue-600 p-3 text-[18px] text-white rounded-md flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.08 2.045c-1.874.165-3.723.904-5.28 2.109-.437.339-1.307 1.209-1.646 1.646-1.8 2.326-2.505 5.195-1.976 8.046.29 1.566.959 3.04 1.976 4.354.339.437 1.209 1.307 1.646 1.646 2.441 1.889 5.453 2.566 8.44 1.895 2.487-.559 4.752-2.144 6.145-4.301.806-1.247 1.283-2.527 1.521-4.08.098-.641.098-2.079 0-2.72-.285-1.858-.936-3.388-2.06-4.84-.339-.437-1.209-1.307-1.646-1.646-2.067-1.599-4.554-2.336-7.12-2.109m1.752 1.997a8.182 8.182 0 0 1 4.208 1.747c.354.286 1.027.972 1.286 1.311A8.123 8.123 0 0 1 20 12a8.1 8.1 0 0 1-1.789 5.04c-.286.354-.972 1.027-1.311 1.286A8.123 8.123 0 0 1 12 20a8.123 8.123 0 0 1-4.9-1.674c-.339-.259-1.025-.932-1.311-1.286A7.99 7.99 0 0 1 4.8 8.529a7.375 7.375 0 0 1 1.459-2.083 7.632 7.632 0 0 1 2.267-1.645 8.025 8.025 0 0 1 4.306-.759m-1.213 3.014c-.241.075-.371.176-.491.38l-.108.184-.011 2.976-.011 2.977-.729-.721c-.413-.409-.802-.758-.897-.807-.351-.177-.732-.087-1.073.254-.34.34-.431.721-.255 1.073.054.107.626.713 1.574 1.668.82.825 1.529 1.558 1.578 1.629.125.183.533.371.804.371s.679-.188.804-.371c.049-.071.758-.804 1.578-1.629.948-.955 1.52-1.561 1.574-1.668.176-.352.085-.733-.255-1.073-.341-.341-.722-.431-1.073-.254-.095.049-.484.399-.898.808l-.73.722v-2.88c0-3.208.003-3.169-.261-3.434-.234-.234-.735-.326-1.12-.205"
                fill-rule="evenodd"
                fill="#ffffff"
              ></path>
            </svg>
            Import
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
        <Header is_filter_open={true} />
      </div>
      <div
        id="elka"
        className="flex-col bg-white w-[96.1%] text-[#404040] mt-[15px] pb-[0px] h-[990px] overflow-scroll rounded-xl"
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
                  To'lov sanasi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Yaratilgan sana
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Moderator
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl">
                  Taklif qilganlari ilovani yuklab olish sanasi
                </th>
                <th className="p-5 text-left border text-gray-400 text-xl"></th>
              </tr>
            </thead>
            <tbody>
              {Array(selectRows)
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
                    <td className="p-5 border text-[18px]">
                      {row.paymentDate}
                    </td>
                    <td className="p-5 border text-[18px]">
                      {row.createdDate}
                    </td>
                    <td className="p-5 border text-[18px]">{row.moderator}</td>
                    <td className="p-5 border text-[18px]">
                      {row.appDownload}
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
              className="w-[85%] h-[50px] border-none outline-none rounded-lg pl-2 text-[18px] placeholder:text-[18px]"
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

export default Active_students;
