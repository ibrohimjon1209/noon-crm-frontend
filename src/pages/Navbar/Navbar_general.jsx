import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import assignment_icon from "./Image/blue/assignment.png";
import lydes_icon from "./Image/blue/lydes.png";
import group_icon from "./Image/blue/group.png";
import student_icon from "./Image/blue/students.png";
import study_division from "./Image/blue/study division.png";
import wallet_icon from "./Image/blue/wallet.png";
import control_icon from "./Image/blue/control.png";
import drive_icon from "./Image/blue/drive.png";
import marketing_icon from "./Image/blue/marketing.png";
import report_icon from "./Image/blue/report.png";
import settings_icon from "./Image/blue/settings.png";
import piramid from "./Image/piramid.png";
import logo from "./Image/black/logo vector.png";
import "./style.css";

const Navbar_general = () => {
  const [settings_is_hovered, set_settings_is_hovered] = useState(false);
  const [lids_is_hovered, set_lids_is_hovered] = useState(false);
  const [students_is_hovered, set_students_hovered] = useState(false);
  const [groups_is_hovered, set_groups_hovered] = useState(false);
  const [study_is_hovered, set_study_hovered] = useState(false);
  const [finance_is_hovered, set_finance_hovered] = useState(false);
  const [control_is_hovered, set_control_hovered] = useState(false);
  const location = useLocation();

  const isSettingsActive = location.pathname.startsWith("/settings");
  const isLidsActive = location.pathname.startsWith("/lids");
  const isStudentsActive = location.pathname.startsWith("/students");
  const isStudytsActive = location.pathname.startsWith("/study_section");
  const isFinanceActive = location.pathname.startsWith("/finance");
  const isControlActive = location.pathname.startsWith("/control");
  const isGroupsActive = location.pathname.startsWith("/groups");
  const toActiveSubmenu = location.pathname.split("/");
  const activeSubmenu = `/${toActiveSubmenu[1]}/${toActiveSubmenu[2]}`;
  const settings_submenu_items = [
    {
      path: "/settings/general/function",
      active: "/settings/general",
      label: "Umumiy sozlamalar",
    },
    {
      path: "/settings/finance/sponsors",
      active: "/settings/finance",
      label: "Moliya",
    },
    {
      path: "/settings/study/arrive",
      active: "/settings/study",
      label: "O'quv",
    },
    {
      path: "/settings/marketing/phone",
      active: "/settings/marketing",
      label: "Sotuv va marketing",
    },
    {
      path: "/settings/management/manager",
      active: "/settings/management",
      label: "Boshqaruv",
    },
    {
      path: "/settings/integration",
      active: "/settings/integration",
      label: "Integratsiyalar",
    },
  ];

  const studets_submenu_items = [
    {
      path: "/students/new-student-list",
      active: "/students/new-student-list",
      label: "Yangi o'quvchilar",
    },
    {
      path: "/students/students-active",
      active: "/students/students-active",
      label: "Aktiv o'quvchilar",
    },
    {
      path: "/students/students-archive",
      active: "/students/students-archive",
      label: "Arxiv o'quvchilar",
    },
    {
      path: "/students/students-list",
      active: "/students/students-list",
      label: "O'quvchilar ro'yxati",
    },
    {
      path: "/students/students-parent",
      active: "/students/students-parent",
      label: "Ota-ona",
    },
  ];
  const groups_submenu_items = [
    {
      path: "/groups/group",
      active: "/groups/group",
      label: "Guruh",
    },
    {
      path: "/groups/rooms",
      active: "/groups/rooms",
      label: "Xonalar",
    },
    {
      path: "/groups/students",
      active: "/group/students",
      label: "Guruh o'quvchilari",
    },
    {
      path: "/groups/table",
      active: "/groups/table",
      label: "Dars jadvali",
    },
    {
      path: "/groups/task",
      active: "/groups/task",
      label: "Barcha vazifalar",
    },
  ];

  const lids_submenu_items = [
    { path: "/lids/lesson", active: "/lids/lesson", label: "Birinchi dars" },
    { path: "/lids/orders", active: "/lids/orders", label: "Buyurtmalar" },
  ];

  const study_submenu_items = [
    {
      path: "/study_section/offlineCourses",
      active: "/study_section/offlineCourses",
      label: "Offline kurslar",
    },
    {
      path: "/study_section/onlineCourses",
      active: "/study_section/onlineCourses",
      label: "Online kurslar",
    },
    {
      path: "/study_section/categoryStudy",
      active: "/study_section/categoryStudy",
      label: "Kategoriyalar",
    },
  ];

  const finance_submenu_items_action = [
    {
      path: "/finance/cassa",
      active: "/finance/cassa",
      label: "Kassalar",
    },
    {
      path: "/finance/bonus",
      active: "/finance/bonus",
      label: "Bonus",
    },
    {
      path: "/finance/penalty",
      active: "/finance/penalty",
      label: "Jarima",
    },
    {
      path: "/finance/monthly_payment",
      active: "/finance/monthly_payment",
      label: "Oylik chiqarish",
    },
  ];

  const finance_submenu_items_report = [
    {
      path: "/finance/balance",
      active: "/finance/balance",
      label: "Balans",
    },
    {
      path: "/finance/input-output",
      active: "/finance/input-output",
      label: "Kirim chiqim",
    },
    {
      path: "/finance/revenue",
      active: "/finance/revenue",
      label: "Tushum rejasi",
    },
    {
      path: "/finance/unpaid-bills",
      active: "/finance/unpaid-bills",
      label: "O'quvchining umumiy to'lanmagan to'lovlari",
    },
    {
      path: "/finance/transaction-without-bills",
      active: "/finance/transaction-without-bills",
      label:
        "Kursni asl narxidan o'quvchi guruxni narxi boshqa bo'lib pul yechgan trannzaksiyalar",
    },
  ];

  const finance_submenu_items_info = [
    {
      path: "/finance/transaction",
      active: "/finance/transaction",
      label: "Tranzaksiya turi",
    },
    {
      path: "/finance/contract",
      active: "/finance/contract",
      label: "Shartnoma",
    },
  ];
  const control_submenu_items_action = [
    {
      path: "/finance/checkout",
      active: "/finance/checkout",
      label: "Davomat",
    },
    {
      path: "/groups/rooms",
      active: "/groups/rooms",
      label: "Fikr-mulohaza",
    },
  ];
  const control_submenu_items_report = [
    {
      path: "/finance/checkout",
      active: "/finance/checkout",
      label: "Xodimlar reytingi",
    },
    {
      path: "/groups/rooms",
      active: "/groups/rooms",
      label: "Davomat qilinmagan guruxlar",
    },
    {
      path: "/groups/rooms",
      active: "/groups/rooms",
      label: "Filliallar holati",
    },
  ];

  return (
    <div className="w-[230px] top-0 h-[132vh] flex flex-col justify-between bg-white">
      <div className="w-[100%] h-[67px] py-[10px] flex justify-center items-center shadow-[-0px_4px_0_0_#00000040]">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="scale-[75%] w-[67px] h-[67px] object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div
        className="duration-300 nav-left w-[100%] h-full mt-[28px] gap-[5px] overflow-y-auto pb-[50px] overflow-x-hidden flex flex-col items-center"
        style={{
          scrollbarColor: "#a9a9a9 transparent",
          overflow: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <Link
          to="/assigments"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 ${
            location.pathname === "/assigments"
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          } pl-[10px]`}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={assignment_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Topshiriqlar
            </h1>
          </div>
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isLidsActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_lids_is_hovered(true)}
          onMouseLeave={() => set_lids_is_hovered(false)}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={lydes_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Lidlar
            </h1>
          </div>
          {lids_is_hovered && (
            <div className="menu-settings flex absolute mt-[30px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[30px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-col gap-[20px] w-[221px] h-[106px] pl-[30px] pt-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {lids_submenu_items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <div
                        className={`gap-[10px] flex items-center transition-all duration-300 ${
                          activeSubmenu === item.active
                            ? "text-[#264E86] -ml-[30px] pl-[30px] w-[221px]"
                            : " text-black"
                        }`}
                      >
                        <div
                          className={`w-[5px] h-[5px] rounded-[50%] ${
                            activeSubmenu === item.path
                              ? "bg-[#264E86]"
                              : "bg-black"
                          }`}
                        ></div>
                        <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                          {item.label}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isGroupsActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_groups_hovered(true)}
          onMouseLeave={() => set_groups_hovered(false)}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={group_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Guruhlar
            </h1>
          </div>
          {groups_is_hovered && (
            <div className="menu-settings flex absolute mt-[165px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[20px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-col gap-[20px] w-[221px] h-[226px] pl-[30px] pt-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {groups_submenu_items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <div
                        className={`gap-[10px] flex items-center transition-all duration-300 ${
                          activeSubmenu === item.active
                            ? "text-[#264E86] -ml-[30px] pl-[30px] w-[221px]"
                            : " text-black"
                        }`}
                      >
                        <div
                          className={`w-[5px] h-[5px] rounded-[50%] ${
                            activeSubmenu === item.path
                              ? "bg-[#264E86]"
                              : "bg-black"
                          }`}
                        ></div>
                        <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                          {item.label}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isStudentsActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_students_hovered(true)}
          onMouseLeave={() => set_students_hovered(false)}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={student_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              O'quvchilar
            </h1>
          </div>
          {students_is_hovered && (
            <div className="menu-settings flex absolute mt-[165px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[20px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-col gap-[20px] w-[221px] h-[226px] pl-[30px] pt-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {studets_submenu_items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <div
                        className={`gap-[10px] flex items-center transition-all duration-300 ${
                          activeSubmenu === item.active
                            ? "text-[#264E86] -ml-[30px] pl-[30px] w-[221px]"
                            : " text-black"
                        }`}
                      >
                        <div
                          className={`w-[5px] h-[5px] rounded-[50%] ${
                            activeSubmenu === item.path
                              ? "bg-[#264E86]"
                              : "bg-black"
                          }`}
                        ></div>
                        <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                          {item.label}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isStudytsActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_study_hovered(true)}
          onMouseLeave={() => set_study_hovered(false)}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={study_division}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              O'quv bo'limi
            </h1>
          </div>

          {study_is_hovered && (
            <div className="menu-settings flex absolute mt-[85px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[20px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-col gap-[20px] w-[221px] h-[140px] pl-[30px] pt-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {study_submenu_items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <div
                        className={`gap-[10px] flex items-center transition-all duration-300 ${
                          activeSubmenu === item.active
                            ? "text-[#264E86] -ml-[30px] pl-[30px] w-[221px]"
                            : " text-black"
                        }`}
                      >
                        <div
                          className={`w-[5px] h-[5px] rounded-[50%] ${
                            activeSubmenu === item.path
                              ? "bg-[#264E86]"
                              : "bg-black"
                          }`}
                        ></div>
                        <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                          {item.label}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Link>

        {/* oquv bolim end */}

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isFinanceActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_finance_hovered(true)}
          onMouseLeave={() => set_finance_hovered(false)}
          to="/finance"
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={wallet_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Moliya
            </h1>
          </div>

          {finance_is_hovered && (
            <div className="menu-settings flex absolute mt-[420px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[20px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-row gap-[40px] w-[780px] h-auto px-[30px] py-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg mb-44">
                  {/* Amallar Qismi */}
                  <div className="flex flex-col gap-[15px] w-1/2">
                    <h1 className="font-roboto text-[#949494] font-[600] text-[18px]">
                      Amallar
                    </h1>
                    <div className="w-full bg-[#949494] h-[0.3px]"></div>
                    {finance_submenu_items_action.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <div
                          className={`gap-[10px] flex items-center transition-all duration-300 ${
                            activeSubmenu === item.path
                              ? "text-[#264E86] -ml-[30px] pl-[30px] w-full"
                              : " text-black"
                          }`}
                        >
                          <div
                            className={`w-[5px] h-[5px] rounded-[50%] ${
                              activeSubmenu === item.path
                                ? "bg-[#264E86]"
                                : "bg-black"
                            }`}
                          ></div>
                          <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                            {item.label}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Hisobotlar Qismi */}
                  <div className="flex flex-col gap-[15px] w-1/2">
                    <h1 className="font-roboto text-[#949494] font-[600] text-[18px]">
                      Hisobotlar
                    </h1>
                    <div className="w-full bg-[#949494] h-[0.3px]"></div>
                    {finance_submenu_items_report.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <div
                          className={`gap-[10px] flex items-center transition-all duration-300 ${
                            activeSubmenu === item.path
                              ? "text-[#264E86] -ml-[30px] pl-[30px] w-full"
                              : " text-black"
                          }`}
                        >
                          <div
                            className={`w-[5px] h-[5px] rounded-[50%] ${
                              activeSubmenu === item.path
                                ? "bg-[#264E86]"
                                : "bg-black"
                            }`}
                          ></div>
                          <div className="group relative">
                            <h1 className="hover:text-[#264E86] font-roboto font-medium text-[18px] max-w-[250px] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis">
                              {item.label}
                            </h1>
                            {item.label.length > 30 && (
                              <div className="absolute left-0 -top-16 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 w-[200px] break-words">
                                {item.label}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/*Malumotlar Qismi */}
                  <div className="flex flex-col gap-[15px] w-1/2">
                    <h1 className="font-roboto text-[#949494] font-[600] text-[18px]">
                      Ma'lumotlar
                    </h1>
                    <div className="w-full bg-[#949494] h-[0.3px]"></div>
                    {finance_submenu_items_info.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <div
                          className={`gap-[10px] flex items-center transition-all duration-300 ${
                            activeSubmenu === item.path
                              ? "text-[#264E86] -ml-[30px] pl-[30px] w-full"
                              : " text-black"
                          }`}
                        >
                          <div
                            className={`w-[5px] h-[5px] rounded-[50%] ${
                              activeSubmenu === item.path
                                ? "bg-[#264E86]"
                                : "bg-black"
                            }`}
                          ></div>
                          <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                            {item.label}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isControlActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
          onMouseEnter={() => set_control_hovered(true)}
          onMouseLeave={() => set_control_hovered(false)}
          to="/control"
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={control_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Nazorat
            </h1>
          </div>
          {control_is_hovered && (
            <div className="menu-settings flex absolute mt-[130px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[20px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-row gap-[40px] w-[660px] h-auto px-[30px] py-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {/* Hisobotlar Qismi */}
                  <div className="flex flex-col gap-[15px] w-1/2">
                    <h1 className="font-roboto text-[#949494] font-[600] text-[18px]">
                      Amallar
                    </h1>
                    <div className="w-full bg-[#949494] h-[0.3px]"></div>
                    {control_submenu_items_action.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <div
                          className={`gap-[10px] flex items-center transition-all duration-300 ${
                            activeSubmenu === item.path
                              ? "text-[#264E86] -ml-[30px] pl-[30px] w-full"
                              : " text-black"
                          }`}
                        >
                          <div
                            className={`w-[5px] h-[5px] rounded-[50%] ${
                              activeSubmenu === item.path
                                ? "bg-[#264E86]"
                                : "bg-black"
                            }`}
                          ></div>
                          <h1 className="hover:text-[#264E86] font-roboto font-medium text-[18px]  max-w-[200px] cursor-pointer">
                            {item.label}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/*Malumotlar Qismi */}
                  <div className="flex flex-col gap-[15px] w-1/2">
                    <h1 className="font-roboto text-[#949494] font-[600] text-[18px]">
                      Hisobotlar
                    </h1>
                    <div className="w-full bg-[#949494] h-[0.3px]"></div>
                    {control_submenu_items_report.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <div
                          className={`gap-[10px] flex items-center transition-all duration-300 ${
                            activeSubmenu === item.path
                              ? "text-[#264E86] -ml-[30px] pl-[30px] w-full"
                              : " text-black"
                          }`}
                        >
                          <div
                            className={`w-[5px] h-[5px] rounded-[50%] ${
                              activeSubmenu === item.path
                                ? "bg-[#264E86]"
                                : "bg-black"
                            }`}
                          ></div>
                          <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                            {item.label}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          to="/management"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            location.pathname === "/management"
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={drive_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Boshqaruv
            </h1>
          </div>
        </Link>

        <Link
          to="/marketing"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            location.pathname === "/marketing"
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={marketing_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px]">
              Sotuv va marketing
            </h1>
          </div>
        </Link>

        <Link
          to="/reports"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            location.pathname === "/reports"
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]"
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={report_icon}
              className="w-[32px] h-[32px] object-contain"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Hisobotlar
            </h1>
          </div>
        </Link>

        <Link
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[10px] ${
            isSettingsActive
              ? "bg-[#CFEBFF] text-[#264E86]"
              : "bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86] "
          }`}
          onMouseEnter={() => set_settings_is_hovered(true)}
          onMouseLeave={() => set_settings_is_hovered(false)}
        >
          <div className="w-[101px] h-[60px] flex gap-[15px] items-center">
            <img
              src={settings_icon || "/placeholder.svg"}
              className="w-[32px] h-[32px] object-contain"
              alt="Settings"
            />
            <h1 className="font-[SF Pro Display] font-[400] text-[19px] leading-[23.09px] whitespace-nowrap">
              Sozlamalar
            </h1>
          </div>
          {settings_is_hovered && (
            <div className="menu-settings flex absolute mt-[-210px] ml-[185px]">
              <img
                src={piramid || "/placeholder.svg"}
                className="w-[12px] object-cover z-50 border-[0px] h-[20px] mt-[235px]"
                alt=""
              />
              <div>
                <div className="flex cursor-auto flex-col gap-[20px] w-[221px] h-[286px] pl-[30px] pt-[20px] bg-white rounded-[10px] shadow-[rgba(0,0,0,0.25)] shadow-lg">
                  {settings_submenu_items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <div
                        className={`gap-[10px] flex items-center transition-all duration-300 ${
                          activeSubmenu === item.active
                            ? "text-[#264E86] -ml-[30px] pl-[30px] py-[5px] w-[221px]"
                            : " text-black"
                        }`}
                      >
                        <div
                          className={`w-[5px] h-[5px] rounded-[50%] ${
                            activeSubmenu === item.path
                              ? "bg-[#264E86]"
                              : "bg-black"
                          }`}
                        ></div>
                        <h1 className="hover:text-[#264E86] font-roboto font-[500] text-[18px] leading-[21.09px]">
                          {item.label}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar_general;
