// import React, { useState } from "react";
// import plus from "../imgs/add_icon.png";
// import exprt from "../imgs/export.png";
// import imprt from "../imgs/import.png";
// import arrow_down_black_icon from "../imgs/arrow_down_black_icon.png";
// import clear from '../imgs/clear.png';

// const Group_main = () => {
//   const [human_value, set_human_value] = useState("O'qituvchi");
//   const [course1_value, set_course1_value] = useState("Kurs");
//   const [is_human_open, set_is_human_open] = useState(false);
//   const [is_course_open, set_is_course_open] = useState(false);
//   const [time, setTime] = useState("");
//   const [search, setSearch] = useState("");

//   const humans_list = [
//     "Diyorbek Omonboyev",
//     "Falonchi Pistonchiyev",
//     "Falonchi Pistonchiyeva",
//     "Salima",
//   ];
//   const course_list = [
//     "Diyorbek Omonboyev",
//     "Falonchi Pistonchiyev",
//     "Falonchi Pistonchiyeva",
//     "Salima",
//   ];

//   const handle_select_human = (human) => {
//     set_teacher_value(human);
//     set_is_human_open(false);
//   };
  
//   const handle_select_course = (course) => {
//     set_course1_value(course);
//     set_is_course_open(false);
//   };

//   return (
//     <>
//       <div className="w-[112vw] h-[150px] border-black border-[1px] flex justify-around items-center mt-[30px] ms-[20px]">
//         <div className="w-[25%] h-[100%] border-[1px] border-black flex justify-around items-center flex-wrap">
//           <div className="bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] cursor-pointer hover:scale-[1.05] active:scale-[0.95]">
//             <img className="w-[20%]" src={plus} alt="" />
//             <h1 className="text-white text-[20px]">Qo'shish</h1>
//           </div>
//           <div className="w-[100%] h-[50%] flex justify-around items-center">
//             <div
//               className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
//             // onClick={() => setIsAddModalOpen(true)}
//             >
//               <img className='w-[20%]' src={exprt} alt="" />
//               <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Export</h1>
//             </div>
//             <div
//               className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
//             // onClick={() => setIsAddModalOpen(true)}
//             >
//               <img className='w-[20%]' src={imprt} alt="" />
//               <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Import</h1>
//             </div>
//           </div>
//         </div>

//         {/* O'qituvchi tanlash dropdown */}
//         <div className="w-[75%] h-[100%] border-[1px] border-black">




//           <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
//             <div
//               className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
//               onClick={() => set_is_human_open(!is_human_open)}
//             >
//               <p className="text-[19px]">{teacher_value}</p>
//               <img
//                 src={arrow_down_black_icon}
//                 className={`w-[31px] h-[31px] duration-300 ${is_human_open ? "-rotate-180" : ""}`}
//                 alt=""
//               />
//             </div>

//             {is_human_open && (
//               <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
//                 {/* 🔍 Qidirish input */}
//                 <div className="p-2 border-b border-gray-300">
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border rounded focus:outline-none"
//                     placeholder="Qidirish..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>

//                 {/* 🔽 O‘qituvchilar ro‘yxati */}
//                 <ul className="max-h-[200px] overflow-y-auto">
//                   {humans_list
//                     .filter((item) =>
//                       item.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((item, index) => (
//                       <li
//                         key={index}
//                         className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
//                         onClick={() => handle_select_human(item)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Boshlanish vaqti input */}
//           <div className="w-[300px] h-[70px] bg-white rounded-[5px] flex items-center justify-around">
//             <label className="text-gray-700 text-[25px]">Boshlanish vaqti</label>
//             <input
//               type="time"
//               className="ml-2 bg-transparent text-gray-500 focus:outline-none"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//             {time && (
//               <button
//                 onClick={() => setTime("")}
//                 className="ml-2 text-gray-500 hover:text-gray-700"
//               >
//                 <img src={clear} alt="clear" className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//           <div className="w-[300px] h-[70px] bg-white rounded-[5px] flex items-center justify-around">
//             <label className="text-gray-700 text-[25px]">Tugash vaqti</label>
//             <input
//               type="time"
//               className="ml-2 bg-transparent text-gray-500 focus:outline-none"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//             {time && (
//               <button
//                 onClick={() => setTime("")}
//                 className="ml-2 text-gray-500 hover:text-gray-700"
//               >
//                 <img src={clear} alt="clear" className="w-4 h-4" />
//               </button>
//             )}
//           </div>

//           <div className="w-[260px] h-[70px] bg-white rounded-[5px] relative">
//             <div
//               className="h-[70px] w-[260px] flex items-center border-[#C5C5C5] border-[1.5px] rounded-[5px] justify-between px-[20px] cursor-pointer"
//               onClick={() => set_is_corse_open(!is_course_open)}
//             >
//               <p className="text-[19px]">{teacher_value}</p>
//               <img
//                 src={arrow_down_black_icon}
//                 className={`w-[31px] h-[31px] duration-300 ${is_course_open ? "-rotate-180" : ""}`}
//                 alt=""
//               />
//             </div>

//             {is_course_open && (
//               <div className="absolute top-[70px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10">
//                 {/* 🔍 Qidirish input */}
//                 <div className="p-2 border-b border-gray-300">
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border rounded focus:outline-none"
//                     placeholder="Qidirish..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>

//                 {/* 🔽 O‘qituvchilar ro‘yxati */}
//                 <ul className="max-h-[200px] overflow-y-auto">
//                   {course_list
//                     .filter((item) =>
//                       item.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((item, index) => (
//                       <li
//                         key={index}
//                         className="px-4 py-2 cursor-pointer hover:bg-[#CFEBFF]"
//                         onClick={() => handle_select_course(item)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Group_main;
import React from 'react'

const Group_main = () => {
  return (
    <div>Group_main</div>
  )
}

export default Group_main;