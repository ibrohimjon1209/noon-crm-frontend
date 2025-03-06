  import React from "react";
import bro from "./imgs/bro.png";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import General from "./chields/general/general_main";
import Password from "./chields/password/password_main";
import Moderator from "./chields/moderator/moderator_main";
import Calls from "./chields/calls/calls_main";
import Default from "./chields/default_limit/default_limit_main";
import Groups from "./chields/groups/groups_main";
import Task from "./chields/homework/homework_main";
import Block_status from "./chields/block_status/block_status_main";
import {
  Image,
  CircleDollarSign,
  History,
  MessageSquareText,
} from "lucide-react";

const Student_profile_main = () => {
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col w-full h-full gap-[30px] items-center mt-[40px]">
      <div className="flex flex-col w-[95%] h-[385px] bg-white rounded-[15px]">
        <div className="flex flex-row relative">
          <div className="flex flex-row w-1/2 h-[80%] mt-[40px] ml-[40px] gap-[20px] items-center justify-start">
            <div className="relative w-[200px] h-[200px] overflow-hidden rounded-full group cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src={bro}
                alt="profile"
              />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0D99FF] bg-opacity-75 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:h-[20%]">
                <Image color="white" />
              </div>
            </div>
            <h1 className="text-black font-[SF Pro Display] font-[600] text-[50px] tracking-[4%] leading-[50px] capitalize">
              murod <br /> nazarov
            </h1>
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="flex flex-col h-full mt-[40px] ml-[20px] gap-[10px] items-end mr-[56px] font-roboto font-[400] text-[18px] leading-[21.09px] text-[#0D99FF]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="bg-[#CFEBFF] w-[235px] h-[45px] rounded-[5px] flex items-center justify-center gap-[5px]">
                  qoldirilgan darslar soni:<span className="font-[600]">0</span>
                </div>
                <div className="bg-[#CFEBFF] w-[173px] h-[45px] rounded-[5px] flex items-center justify-center gap-[5px]">
                  to’lanishi kerak: <span className="font-[600]">0</span>
                </div>
                <div className="bg-[#CFEBFF] w-[158px] h-[45px] rounded-[5px] flex items-center justify-center gap-[5px]">
                  balans: <span className="font-[600]">350 000</span>
                </div>
                <div className="text-black flex flex-row ml-[15px] gap-[30px]">
                  <CircleDollarSign width={"26px"} height={"26px"} />
                  <History width={"26px"} height={"26px"} />
                </div>
              </div>
              <div className="flex mt-[140px] items-center absolute justify-center w-[100px] h-[100px] text-white bg-[#0EA5E9] rounded-full cursor-pointer">
                <MessageSquareText width={"50px"} height={"50px"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end mb-[15px] flex-row gap-[30px] w-full h-full gap-[10px] mt-[40px] ml-[40px] font-[SF Pro Display] font-[400] text-[22px] leading-[26.25px] text-[#747474]">
          <Link to="/students/profile/general" className={`${ location == "/students/profile/general" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Umumiy
          </Link>
          <Link to="/students/profile/password" className={`${ location == "/students/profile/password" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Parol o’rnatish
          </Link>
          <Link to="/students/profile/moderator" className={`${ location == "/students/profile/moderator" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Moderatorni tahrirlash
          </Link>
          <Link to="/students/profile/calls" className={`${ location == "/students/profile/calls" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Qo’ng’iroqlar tarixi
          </Link>
          <Link to="/students/profile/default-limit" className={`${ location == "/students/profile/default-limit" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Qarzdorlik limiti
          </Link>
          <Link to="/students/profile/groups" className={`${ location == "/students/profile/groups" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Guruhlar
          </Link>
          <Link to="/students/profile/task" className={`${ location == "/students/profile/task" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Vazifa
          </Link>
          <Link to="/students/profile/block-status" className={`${ location == "/students/profile/block-status" ? "text-[#0D99FF] border-b" : "text-black"} duration-100 transition-all border-[#0D99FF] pb-4`}>
            Block xolatini tekshirish
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-[95%] h-full">
        <Routes>
            <Route path="/general" element={<General />} />
            <Route path="/password" element={<Password />} />
            <Route path="/moderator" element={<Moderator />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/default-limit" element={<Default />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/task" element={<Task />} />
            <Route path="/block-status" element={<Block_status />} />
        </Routes>
      </div>
    </div>
  );
};

export default Student_profile_main;
