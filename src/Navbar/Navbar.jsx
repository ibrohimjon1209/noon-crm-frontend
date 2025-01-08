import { useState, React } from 'react';
import key_icon from './Image/blue/key_icon.png';
import student_icon from './Image/white/student_icon.png';
import group_icon from './Image/white/group_icon.png';
import teacher_icon from './Image/white/teacher_icon.png';
import wallet_icon from './Image/white/wallet_icon.png';
import calculation_icon from './Image/white/calculation_icon.png';
import manual_icon from './Image/white/manual_icon.png';
import setting_icon from './Image/white/setting_icon.png';
import sign_out from './Image/white/sign_out_icon.png';
import right_icon from './Image/white/right_icon.png';
import './style.css'

const Navbar = () => {


    const [isStudentMenuOpen, setStudentMenuOpen] = useState(false);
    const [isGroupMenuOpen, setGroupMenuOpen] = useState(false);

    const toggleStudentMenu = () => setStudentMenuOpen(!isStudentMenuOpen);
    const toggleGroupMenu = () => setGroupMenuOpen(!isGroupMenuOpen);

    return (
        <div className=' w-[289px] top-0 h-full flex flex-col justify-between bg-[rgba(0,53,95,1)] pt-[63px] pl-[24px]'>
            <div className='duration-300 nav-left w-[265.29px] flex h-full top-0 flex-col gap-[20px] overflow-y-auto'>
                <div className='w-[227.29px] py-[10px] rounded-[8px] flex items-center pl-[12px] bg-[rgba(245,245,245,1)]'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={key_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(0,53,95,1)]'>Dashboard</h1>
                    </div>
                </div>



                <div className={`${isStudentMenuOpen
                    ? 'w-[227.29px] h-[63.26px] rounded-[8px] flex items-center flex-col bg-[rgba(245,245,245,1)]'
                    : 'w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'
                    }`}
                >
                    <div onClick={setStudentMenuOpen} className={`${isStudentMenuOpen
                        ? 'w-[101px] h-[22.57px] flex gap-[16px] items-center'
                        : 'w-[101px] h-[22.57px] flex gap-[16px] items-center'
                        }`}>
                        <img src={student_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Talabalar</h1>
                    </div>
                    {isStudentMenuOpen && (
                        <div className='duration-200 w-full h-[129px] bg-[rgba(245,245,245,1)] rounded-b-[8px]'>
                            <div className='text-black'>• Ro’yxat</div>
                            <div className='text-black'>• Davomat</div>
                        </div>
                    )}
                </div>


                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={group_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Guruhlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={teacher_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Ustozlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={wallet_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Moliya</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Hisobotlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Lidlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Lidlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Lidlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Lidlar</h1>
                    </div>
                </div>

                <div className='w-[227.29px] h-[43.26px] rounded-[8px] flex items-center pl-[12px] bg-transparent'>
                    <div className='w-[101px] h-[22.57px] flex gap-[13px] items-center'>
                        <img src={calculation_icon} className='' />
                        <h1 className='font-[roboto] font-[700] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Lidlar</h1>
                    </div>
                </div>

            </div>


            <div className='flex flex-col gap-[35px] mt-[100px] mb-[85px]'>

                <div className='flex gap-[98px] items-center'>
                    <div className='flex items-center gap-[10px] pl-[12px]'>
                        <img src={manual_icon} className='w-[23px] h-[23px] brightness-200' />
                        <h1 className='font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Yo’riqnoma</h1>
                    </div>

                    <div>
                        <img src={right_icon} />
                    </div>
                </div>

                <div className='flex gap-[98px] items-center'>
                    <div className='flex items-center gap-[10px] pl-[12px]'>
                        <img src={setting_icon} className='w-[23px] h-[23px] brightness-200' />
                        <h1 className='font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Sozlamalar</h1>
                    </div>

                    <div className='hidden'>
                        <img src={right_icon} />
                    </div>
                </div>

                <div className='flex gap-[98px] items-center'>
                    <div className='flex items-center gap-[10px] pl-[12px]'>
                        <img src={sign_out} className='w-[23px] h-[23px] brightness-200' />
                        <h1 className='font-[roboto] font-[400] text-[14px] leading-[16.41px] text-[rgba(255,255,255,1)]'>Chiqish</h1>
                    </div>

                    <div className='hidden'>
                        <img src={right_icon} />
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Navbar;
