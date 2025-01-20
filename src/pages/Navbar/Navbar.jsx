import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assignment_icon from './Image/blue/assignment.png';
import lydes_icon from './Image/blue/lydes.png';
import group_icon from './Image/blue/group.png';
import student_icon from './Image/blue/students.png';
import study_division from './Image/blue/study division.png';
import wallet_icon from './Image/blue/wallet.png';
import control_icon from './Image/blue/control.png';
import drive_icon from './Image/blue/drive.png';
import marketing_icon from './Image/blue/marketing.png';
import report_icon from './Image/blue/report.png';
import settings_icon from './Image/blue/settings.png';
import logo from './Image/black/logo vector.png';
import './style.css';

const Navbar = () => {
  const [isStudentMenuOpen, setStudentMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-[300px] top-0 h-full flex flex-col justify-between bg-white">
      <div className="w-[100%] py-[15px] flex justify-center items-center shadow-[0.2px_2px_2px_0_#00000040]">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[67px] h-[67px] object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="duration-300 nav-left w-[100%] h-full mt-[28px] gap-[5px] overflow-y-hidden overflow-x-hidden flex flex-col items-center">
        <Link
          to="/assigments"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 ${
            location.pathname === '/assigments'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          } pl-[25px]`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={assignment_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Topshiriqlar
            </h1>
          </div>
        </Link>

        <Link
          to="/lids"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/lids'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img src={lydes_icon} className="w-[38px] h-[38px] object-contain" />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Lidlar
            </h1>
          </div>
        </Link>

        <Link
          to="/groups"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/groups'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img src={group_icon} className="w-[38px] h-[38px] object-contain" />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Guruh
            </h1>
          </div>
        </Link>

        <Link
          to="/students"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/students'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={student_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              O'quvchilar
            </h1>
          </div>
        </Link>

        <Link
          to="/study_section"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/study_section'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={study_division}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              O'quv bo'limi
            </h1>
          </div>
        </Link>

        <Link
          to="/finance"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/finance'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={wallet_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Moliya
            </h1>
          </div>
        </Link>

        <Link
          to="/control"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/control'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={control_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Nazorat
            </h1>
          </div>
        </Link>

        <Link
          to="/management"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/management'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={drive_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Boshqaruv
            </h1>
          </div>
        </Link>

        <Link
          to="/marketing"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/marketing'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={marketing_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Sotuv va marketing
            </h1>
          </div>
        </Link>

        <Link
          to="/reports"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/reports'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={report_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Hisobotlar
            </h1>
          </div>
        </Link>

        <Link
          to="/settings"
          className={`w-[85%] rounded-[10px] flex items-center cursor-pointer transition-all duration-300 pl-[25px] ${
            location.pathname === '/settings'
              ? 'bg-[#CFEBFF] text-[#264E86]'
              : 'bg-white text-black hover:bg-[#CFEBFF] hover:text-[#264E86]'
          }`}
        >
          <div className="w-[101px] h-[60px] flex gap-[25px] items-center">
            <img
              src={settings_icon}
              className="w-[38px] h-[38px] object-contain"
            />
            <h1 className="font-[roboto] font-[400] text-[18px] leading-[21.09px] whitespace-nowrap">
              Sozlamalar
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
