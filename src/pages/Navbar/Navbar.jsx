import { useState, React } from 'react';
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
import './style.css'

const Navbar = () => {


    const [isStudentMenuOpen, setStudentMenuOpen] = useState(false);

    return (
        <div className=' w-[320px] top-0 h-full flex flex-col justify-between bg-white'>
            <div className='w-[100%] py-[15px] flex justify-center items-center shadow-[0.2px_2px_2px_0_#00000040]'>
                <img src={logo} alt="logo" className='w-[67px] h-[67px] object-contain cursor-pointer' />
            </div>
            <div className='duration-300 nav-left w-[100%] flex h-full mt-[28px] flex-col gap-[5px] overflow-y-hidden overflow-x-hidden flex flex-col items-center'>
                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer bg-[#CFEBFF] pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={assignment_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-[#264E86] whitespace-nowrap'>Topshiriqlar</h1>
                    </div>
                </div>

                <div className={`${isStudentMenuOpen
                    ? 'w-[227.29px] h-[63.26px] rounded-[8px] flex items-center flex-col bg-[rgba(245,245,245,1)]'
                    : 'w-[85%] rounded-[10px] flex items-center cursor-pointer bg-white pl-[25px]'
                    }`}
                >
                    <div onClick={setStudentMenuOpen} className={`${isStudentMenuOpen
                        ? 'w-[101px] h-[60px] flex gap-[30px] items-center'
                        : 'w-[101px] h-[60px] flex gap-[30px] items-center'
                        }`}>
                        <img src={lydes_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Lidlar</h1>
                    </div>
                    {isStudentMenuOpen && (
                        <div className='duration-200 w-full h-[129px] bg-[rgba(245,245,245,1)] rounded-b-[8px]'>
                            <div className='text-black'>• Ro’yxat</div>
                            <div className='text-black'>• Davomat</div>
                        </div>
                    )}
                </div>


                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={group_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Guruh</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={student_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>O’quvchilar</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={study_division} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>O’quv bo’limi</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={wallet_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Moliya</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={control_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Nazorat</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={drive_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Boshqaruv</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={marketing_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Sotuv va marketing</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={report_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Hisobotlar</h1>
                    </div>
                </div>

                <div className='w-[85%] rounded-[10px] flex items-center cursor-pointer pl-[25px]'>
                    <div className='w-[101px] h-[60px] flex gap-[30px] items-center'>
                        <img src={settings_icon} className='w-[38px] h-[38px] object-contain'/>
                        <h1 className='font-[roboto] font-[400] text-[18px] leading-[21.09px] text-black whitespace-nowrap'>Sozlamalar</h1>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
