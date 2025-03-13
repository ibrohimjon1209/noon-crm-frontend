import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, X } from "lucide-react";

const modalVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 1 } },
};

const Add_modal = ({ is_add_modal_open, set_is_add_modal_open }) => {
  const [is_student_open, set_is_student_open] = useState(false);
  const [is_course_open, set_is_course_open] = useState(false);
  const [is_lesson_days_open, set_is_lesson_days_open] = useState(false);
  const [is_teacher_open, set_is_teacher_open] = useState(false);
  const [is_group_open, set_is_group_open] = useState(false);
  const [is_calendar_open, set_is_calendar_open] = useState(false);
  const [is_first_lesson_open, set_is_first_lesson] = useState(false);

  const [student_value, set_student_value] = useState("O'quvchini tanlang");
  const [course_value, set_course_value] = useState("Kursni tanlang");
  const [lesson_days_value, set_lesson_days_value] = useState("Tanlang");
  const [teacher_value, set_teacher_value] = useState("Ustozni tanlang");
  const [group_value, set_group_value] = useState(
    "Yig'ilayotgan guruhni tanlang"
  );
  const [calendar_value, set_calendar_value] = useState("dd.mm.yyyyy");

  const students_list = [
    "Palonchiyev Pistonchi",
    "Halima Soliyeva Halima Soliyeva Soliyeva",
    "Murod To'xtasinov",
  ];
  const courses_list = ["IT", "Foundation", "Koreys tili", "Ingiliz tili"];
  const lesson_days_list = [
    "du",
    "chor",
    "sesh, pay",
    "pay, ju",
    "dushanba",
    "toq kunlar",
  ];
  const teachers_list = [
    "Palonchiyev Pistonchi",
    "Halima Soliyeva Halima Soliyeva Soliyeva",
    "Murod To'xtasinov",
    "Palonchiyev Pistonchi",
    "Murod To'xtasinov",
  ];

  const groups_list = ["IT", "Topic", "Elementary"];

  // Barcha dropdownlarni ref lari uchun obyekt
  const dropdownRefs = useRef({
    student: null,
    course: null,
    lesson_days: null,
    teacher: null,
    group: null,
    calendar: null,
  });

  const handle_select_student = (item) => {
    set_student_value(item);
    set_is_student_open(false);
  };
  const handle_select_course = (item) => {
    set_course_value(item);
    set_is_course_open(false);
  };

  const handle_select_lesson_day = (item) => {
    set_lesson_days_value(item);
    set_is_lesson_days_open(false);
  };

  const handle_select_teacher = (item) => {
    set_teacher_value(item);
    set_is_teacher_open(false);
  };

  const handle_select_group = (item) => {
    set_group_value(item);
    set_is_group_open(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key].contains(event.target)
        ) {
          if (key === "student") set_is_student_open(false);
          if (key === "course") set_is_course_open(false);
          if (key === "lesson_days") set_is_lesson_days_open(false);
          if (key === "teacher") set_is_teacher_open(false);
          if (key === "group") set_is_group_open(false);
          if (key === "calendar") set_is_calendar_open(false);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [lesson_start_hours, set_lesson_start_hours] = useState("");
  const [lesson_start_minutes, set_lesson_start_minutes] = useState("");
  const [first_lesson_hours, set_first_lesson_hours] = useState("");
  const [first_lesson_minutes, set_first_lesson_minutes] = useState("");

  const lesson_start_minutesInputRef = useRef(null);
  const first_lesson_minutesInputRef = useRef(null);
  const handleTimeChange = (value, setter, max, nextInput) => {
    const numericValue = value.replace(/[^0-9]/g, "");

    if (numericValue.length <= 2) {
      setter(numericValue);

      if (Number.parseInt(numericValue) > max) {
        setter(max.toString().padStart(2, "0"));
      }

      if (numericValue.length === 2 && nextInput && nextInput.current) {
        nextInput.current.focus();
      }
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 0);
    return date.getDate();
  };

  const getStartDayOfMonth = (year, month) => {
    const date = new Date(year, month - 1, 1);
    let day = date.getDay();
    return day === 0 ? 6 : day - 1;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const startDay = getStartDayOfMonth(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayValue = `${String(i).padStart(2, "0")}.${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}.${currentDate.getFullYear()}`;
      const isSelected = calendar_value === dayValue;

      days.push(
        <div
          key={i}
          onClick={() => {
            set_calendar_value(dayValue);
            set_is_calendar_open(false);
          }}
          className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${
            isSelected
              ? "bg-[rgba(38,78,134,1)] text-white"
              : "hover:bg-[#f0f0f0]"
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  return (
    <Modal
      open={is_add_modal_open}
      onClose={() => set_is_add_modal_open(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: "hidden", backdropFilter: "blur(5px)" }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate={is_add_modal_open ? "visible" : "hidden"}
        exit="exit"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "520px",
            height: "133vh",
            padding: "18px",
            backgroundColor: "white",
            overflowY: "auto",
            borderLeft: "1px solid #75718a",
          }}
        >
          <div className="flex flex-col gap-[34px]">
            <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-black">
              Yangi buyurtma
            </p>
            <p className="font-inter font-[400] text-[18px] leading-[16.94px] text-black">
              <span className="text-red-500 mr-2">*</span>Zarurligini bildiradi
            </p>
            <div className="bg-blue-600 w-[230px] h-[53px] cursor-pointer rounded-[10px] flex items-center justify-center font-inter font-[400] text-[21px] leading-[21px] text-white hover:bg-blue-700 active:bg-blue-600">
              O'quvchi qo'shish
            </div>
            {/* O'quvchi uchun */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                O'quvchi<span className="text-red-500 ml-[2px]">*</span>
              </p>
              <div
                className="w-full h-[55px] bg-white rounded-[5px] relative"
                ref={(el) => (dropdownRefs.current.student = el)}
              >
                <div
                  className={`h-[60px] w-full cursor-pointer flex items-center bg-[#F2EEEE] border-[#C5C5C5] ${
                    is_student_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${
                    student_value.length > 43 ? "px-[25px]" : "px-[28px]"
                  }`}
                  onClick={() => set_is_student_open(!is_student_open)}
                >
                  <p
                    className={`font-roboto font-[400] ${
                      student_value.length > 43 ? "text-[17px]" : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {student_value}
                  </p>
                  <div className="flex flex-row gap-2">
                    <X
                      width={28}
                      height={28}
                      className={`${
                        student_value !== "O'quvchini tanlang"
                          ? "block"
                          : "hidden"
                      }`}
                      onClick={() => set_student_value("O'quvchini tanlang")}
                    />
                    <ChevronDown
                      width={31}
                      height={31}
                      className={`duration-[0.3s] ${
                        is_student_open ? "-rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_student_open
                      ? `h-[400px] mt-[5px] border-[1.5px] ${
                          students_list.length > 4
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                        } menu_scroll`
                      : "h-0 border-0"
                  }`}
                >
                  <div className="flex justify-center mb-2 pt-[15px]">
                    <input
                      type="text"
                      className="w-[100%] mx-4 h-[45px] text-[20px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] px-[15px]"
                      placeholder="Qidirish"
                    />
                  </div>
                  <ul className="flex flex-col">
                    {students_list.length ? (
                      students_list.map((item, index) => (
                        <li
                          className={`px-4 py-3 ${
                            student_value === item
                              ? "bg-[#CFEBFF] text-[#264E86]"
                              : "text-[#494949]"
                          } hover:duration-[0.1s] text-[21px] hover:bg-[#CFEBFF] hover:text-[#264E86] cursor-pointer`}
                          onClick={() => handle_select_student(item)}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 mx-auto py-3 text-[21px]">
                        O'quvchilar topilmadi
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Kurslar uchun */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Kurs<span className="text-red-500 ml-[2px]">*</span>
              </p>
              <div
                className="w-full h-[55px] bg-white rounded-[5px] relative"
                ref={(el) => (dropdownRefs.current.course = el)}
              >
                <div
                  className={`h-[60px] w-full cursor-pointer flex items-center bg-[#F2EEEE] border-[#C5C5C5] ${
                    is_course_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${
                    course_value.length > 43 ? "px-[20px]" : "px-[28px]"
                  }`}
                  onClick={() => set_is_course_open(!is_course_open)}
                >
                  <p
                    className={`font-roboto font-[400] ${
                      course_value.length > 43 ? "text-[17px]" : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {course_value}
                  </p>
                  <div className="flex flex-row gap-2">
                    <X
                      width={28}
                      height={28}
                      className={`${
                        course_value !== "Kursni tanlang" ? "block" : "hidden"
                      }`}
                      onClick={() => set_course_value("Kursni tanlang")}
                    />
                    <ChevronDown
                      width={31}
                      height={31}
                      className={`duration-[0.3s] ${
                        is_course_open ? "-rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_course_open
                      ? `h-[400px] mt-[5px] border-[1.5px] ${
                          courses_list.length > 4
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                        } menu_scroll`
                      : "h-0 border-0"
                  }`}
                >
                  <div className="flex justify-center mb-2 pt-[15px]">
                    <input
                      type="text"
                      className="w-[100%] mx-4 h-[45px] text-[20px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] px-[15px]"
                      placeholder="Qidirish"
                    />
                  </div>
                  <ul className="flex flex-col">
                    {courses_list.length ? (
                      courses_list.map((item, index) => (
                        <li
                          className={`px-4 py-3 ${
                            course_value === item
                              ? "bg-[#CFEBFF] text-[#264E86]"
                              : "text-[#494949]"
                          } hover:duration-[0.1s] text-[21px] hover:bg-[#CFEBFF] hover:text-[#264E86] cursor-pointer`}
                          onClick={() => handle_select_course(item)}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 mx-auto py-3 text-[21px]">
                        Kurslar topilmadi
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Dars kunlari uchun */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Dars kunini tanlang
              </p>
              <div
                className="w-full h-[55px] bg-white rounded-[5px] relative"
                ref={(el) => (dropdownRefs.current.lesson_days = el)}
              >
                <div
                  className={`h-[60px] w-full cursor-pointer flex items-center bg-[#F2EEEE] border-[#C5C5C5] ${
                    is_lesson_days_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${
                    lesson_days_value.length > 43 ? "px-[20px]" : "px-[28px]"
                  }`}
                  onClick={() => set_is_lesson_days_open(!is_lesson_days_open)}
                >
                  <p
                    className={`font-roboto font-[400] ${
                      lesson_days_value.length > 43
                        ? "text-[17px]"
                        : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {lesson_days_value}
                  </p>
                  <ChevronDown
                    width={31}
                    height={31}
                    className={`duration-[0.3s] ${
                      is_lesson_days_open ? "-rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_lesson_days_open
                      ? `h-[400px] mt-[5px] border-[1.5px] ${
                          lesson_days_list.length > 4
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                        } menu_scroll`
                      : "h-0 border-0"
                  }`}
                >
                  <div className="flex justify-center mb-2 pt-[15px]">
                    <input
                      type="text"
                      className="w-[100%] mx-4 h-[45px] text-[20px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] px-[15px]"
                      placeholder="Qidirish"
                    />
                  </div>
                  <ul className="flex flex-col">
                    {lesson_days_list.length ? (
                      lesson_days_list.map((item, index) => (
                        <li
                          className={`px-4 py-3 ${
                            lesson_days_value === item
                              ? "bg-[#CFEBFF] text-[#264E86]"
                              : "text-[#494949]"
                          } hover:duration-[0.1s] text-[21px] hover:bg-[#CFEBFF] hover:text-[#264E86] cursor-pointer`}
                          onClick={() => handle_select_lesson_day(item)}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 mx-auto py-3 text-[21px]">
                        Dars kunlari topilmadi
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Dars boshlanish vaqti */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Darsning boshlanish vaqtini tanlang
              </p>
              <div className="rounded-[5px] px-[22px] w-full h-[64px] bg-[#F2EEEE]">
                <div className="w-full h-full flex pr-[8px] items-center">
                  <div className="flex items-center h-full w-full font-inter font-[500] text-black text-[18px]">
                    <input
                      type="text"
                      value={lesson_start_hours}
                      onChange={(e) =>
                        handleTimeChange(
                          e.target.value,
                          set_lesson_start_hours,
                          23,
                          lesson_start_minutesInputRef
                        )
                      }
                      className="w-6 text-center rounded-md bg-[#F2EEEE]"
                      placeholder="00"
                      maxLength={2}
                    />
                    <span>:</span>
                    <input
                      type="text"
                      ref={lesson_start_minutesInputRef}
                      value={lesson_start_minutes}
                      onChange={(e) =>
                        handleTimeChange(
                          e.target.value,
                          set_lesson_start_minutes,
                          59
                        )
                      }
                      className="w-6 text-center rounded-md bg-[#F2EEEE]"
                      placeholder="00"
                      maxLength={2}
                    />
                  </div>
                  <X
                    width={32}
                    height={32}
                    className="cursor-pointer"
                    onClick={() => {
                      set_lesson_start_hours(""), set_lesson_start_minutes("");
                    }}
                  />
                </div>
              </div>
            </div>
            {/* O'qituvchini tanlash */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                O'qituvchi
              </p>
              <div
                className="w-full h-[55px] bg-white rounded-[5px] relative"
                ref={(el) => (dropdownRefs.current.teacher = el)}
              >
                <div
                  className={`h-[60px] w-full cursor-pointer flex items-center bg-[#F2EEEE] border-[#C5C5C5] ${
                    is_teacher_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${
                    teacher_value.length > 15 ? "px-[20px]" : "px-[28px]"
                  }`}
                  onClick={() => set_is_teacher_open(!is_teacher_open)}
                >
                  <p
                    className={`font-roboto font-[400] ${
                      teacher_value.length > 43 ? "text-[17px]" : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {teacher_value}
                  </p>
                  <div className="flex flex-row gap-2">
                    <X
                      width={28}
                      height={28}
                      className={`${
                        teacher_value !== "Ustozni tanlang" ? "block" : "hidden"
                      }`}
                      onClick={() => set_teacher_value("Ustozni tanlang")}
                    />
                    <ChevronDown
                      width={31}
                      height={31}
                      className={`duration-[0.3s] ${
                        is_teacher_open ? "-rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_teacher_open
                      ? `h-[400px] mt-[5px] border-[1.5px] ${
                          teachers_list.length > 4
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                        } menu_scroll`
                      : "h-0 border-0"
                  }`}
                >
                  <div className="flex justify-center mb-2 pt-[15px]">
                    <input
                      type="text"
                      className="w-[100%] mx-4 h-[45px] text-[20px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] px-[15px]"
                      placeholder="Qidirish"
                    />
                  </div>
                  <ul className="flex flex-col">
                    {teachers_list.length ? (
                      teachers_list.map((item, index) => (
                        <li
                          className={`px-4 py-3 ${
                            teacher_value === item
                              ? "bg-[#CFEBFF] text-[#264E86]"
                              : "text-[#494949]"
                          } hover:duration-[0.1s] text-[21px] hover:bg-[#CFEBFF] hover:text-[#264E86] cursor-pointer`}
                          onClick={() => handle_select_teacher(item)}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 mx-auto py-3 text-[21px]">
                        O'qituvchi topilmadi
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Yig'ilayotgan guruhni tanlash */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Yig'ilayotgan guruhni tanlang
              </p>
              <div
                className="w-full h-[55px] bg-white rounded-[5px] relative"
                ref={(el) => (dropdownRefs.current.group = el)}
              >
                <div
                  className={`h-[60px] w-full cursor-pointer flex items-center bg-[#F2EEEE] border-[#C5C5C5] ${
                    is_group_open ? "border-[1.5px]" : "border-[0px]"
                  } rounded-[5px] justify-between ${
                    group_value.length > 43 ? "px-[20px]" : "px-[28px]"
                  }`}
                  onClick={() => set_is_group_open(!is_group_open)}
                >
                  <p
                    className={`font-roboto font-[400] ${
                      group_value.length > 43 ? "text-[17px]" : "text-[19px]"
                    } whitespace-nowrap leading-[23.44px] text-black`}
                  >
                    {group_value}
                  </p>
                  <div className="flex flex-row gap-2">
                    <X
                      width={28}
                      height={28}
                      className={`${
                        group_value !== "Yig'ilayotgan guruhni tanlang"
                          ? "block"
                          : "hidden"
                      }`}
                      onClick={() =>
                        set_group_value("Yig'ilayotgan guruhni tanlang")
                      }
                    />
                    <ChevronDown
                      width={31}
                      height={31}
                      className={`duration-[0.3s] ${
                        is_group_open ? "-rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_group_open
                      ? `h-[400px] mt-[5px] border-[1.5px] ${
                          groups_list.length > 4
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                        } menu_scroll`
                      : "h-0 border-0"
                  }`}
                >
                  <div className="flex justify-center mb-2 pt-[15px]">
                    <input
                      type="text"
                      className="w-[100%] mx-4 h-[45px] text-[20px] bg-white rounded-[5px] text-black border-[#C5C5C5] border-[1px] px-[15px]"
                      placeholder="Qidirish"
                    />
                  </div>
                  <ul className="flex flex-col">
                    {groups_list.length ? (
                      groups_list.map((item, index) => (
                        <li
                          className={`px-4 py-3 ${
                            group_value === item
                              ? "bg-[#CFEBFF] text-[#264E86]"
                              : "text-[#494949]"
                          } hover:duration-[0.1s] text-[21px] hover:bg-[#CFEBFF] hover:text-[#264E86] cursor-pointer`}
                          onClick={() => handle_select_group(item)}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 mx-auto py-3 text-[21px]">
                        Guruh topilmadi
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Kalendar */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Birinchi darsga kelish sanasi
              </p>
              <div className="w-full h-[58px] bg-[#F2EEEE] rounded">
                <div
                  className="w-full h-[55px] bg-transparent relative"
                  ref={(el) => (dropdownRefs.current.calendar = el)}
                >
                  <div
                    className={`h-[55px] w-full cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                    onClick={() => set_is_calendar_open(!is_calendar_open)}
                  >
                    <p
                      className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}
                    >
                      {calendar_value}
                    </p>
                    <Calendar width={33} height={33} />
                  </div>
                  <div
                    className={`absolute w-[253px] top-[60px] left-0 bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[14] overflow-hidden transition-all duration-[300ms] ease-out ${
                      is_calendar_open
                        ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll`
                        : "h-0 border-[0px]"
                    }`}
                  >
                    <div className="flex justify-between items-center p-[22px]">
                      <button
                        onClick={() => changeMonth(-1)}
                        className="cursor-pointer"
                      >
                        <ChevronDown
                          width={25}
                          height={25}
                          className="rotate-90"
                        />
                      </button>
                      <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                        {monthNames[currentDate.getMonth()]}{" "}
                        <span className="font-[400]">
                          {currentDate.getFullYear()}
                        </span>
                      </p>
                      <button
                        onClick={() => changeMonth(1)}
                        className="cursor-pointer"
                      >
                        <ChevronDown
                          width={25}
                          height={25}
                          className="-rotate-90"
                        />
                      </button>
                    </div>
                    <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
                    <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[500] leading-[12.1px] text-center text-[#292A34] text-[11.5px] font-medium mb-[10px]">
                      <p>Du</p>
                      <p>Se</p>
                      <p>Ch</p>
                      <p>Pa</p>
                      <p>Ju</p>
                      <p>Sh</p>
                      <p>Ya</p>
                    </div>
                    <div className="grid grid-cols-7 mt-[25px] px-[10px]">
                      {renderCalendar()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Birinchi darsga kelish vaqti */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Birinchi darsga kelish vaqti
              </p>
              <div className="rounded-[5px] px-[22px] w-full h-[64px] bg-[#F2EEEE]">
                <div className="w-full h-full flex pr-[8px] items-center">
                  <div className="flex items-center h-full w-full font-inter font-[500] text-black text-[18px]">
                    <input
                      type="text"
                      value={first_lesson_hours}
                      onChange={(e) =>
                        handleTimeChange(
                          e.target.value,
                          set_first_lesson_hours,
                          23,
                          first_lesson_minutesInputRef
                        )
                      }
                      className="w-6 text-center rounded-md bg-[#F2EEEE]"
                      placeholder="00"
                      maxLength={2}
                    />
                    <span>:</span>
                    <input
                      type="text"
                      ref={first_lesson_minutesInputRef}
                      value={first_lesson_minutes}
                      onChange={(e) =>
                        handleTimeChange(
                          e.target.value,
                          set_first_lesson_minutes,
                          59
                        )
                      }
                      className="w-6 text-center rounded-md bg-[#F2EEEE]"
                      placeholder="00"
                      maxLength={2}
                    />
                  </div>
                  <X
                    width={32}
                    height={32}
                    className="cursor-pointer"
                    onClick={() => {
                      set_first_lesson_hours(""), set_first_lesson_minutes("");
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Izoh */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-inter font-[400] text-[20px] leading-[21.78px] text-[#3d3d3d]">
                Izoh
              </p>
              <input
                type="text"
                className="rounded-[5px] text-[20px] px-[22px] w-full h-[64px] bg-[#F2EEEE]"
                placeholder="Izoh"
              />
            </div>
            <div className="h-[55px] w-full flex flex-row items-center justify-between px-[10px]">
              <div className="w-[30%] h-full flex items-center justify-center rounded-[15px] cursor-pointer text-[20px] font-inter font-[400] hover:bg-gray-200 duration-200 text-gray-700">Orqaga</div>
              <div className="w-[30%] h-full flex items-center justify-center rounded-[15px] cursor-pointer text-[20px] font-inter font-[400] text-white bg-blue-600">Saqlash</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default Add_modal;
