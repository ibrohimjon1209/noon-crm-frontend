import React from 'react'
import student_icon from './Image/students_icon.png'
import lid_icon from './Image/lid_icon.png'
import debtor_icon from './Image/debtor_icon.png'
import freeze_icon from './Image/freeze_icon.png'
import graduate_icon from './Image/graduate_icon.png'
import money_icon from './Image/money_icon.png'
import archive_icon from './Image/archive_icon.png'



const Status = () => {
    return (
        <div className=''>

            <div className='flex w-full h-[225px] pl-[40px] items-center gap-[23px]'>
                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={lid_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Lidlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,201,118,1)]'>35</h1>
                    </div>
                </div>


                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={student_icon} className='w-[32px] h-[43px] mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Faol talabalar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,201,118,1)]'>129</h1>
                    </div>
                </div>



                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={debtor_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Qarzdorlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(201,74,74,1)]'>12</h1>
                    </div>
                </div>

                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={freeze_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Muzlatilganlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,155,201,1)]'>129</h1>
                    </div>
                </div>

                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={graduate_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Bitirganlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,155,201,1)]'>69</h1>
                    </div>
                </div>

                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={money_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Xaqdorlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,155,201,1)]'>17</h1>
                    </div>
                </div>

                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={archive_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Arxiv</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,155,201,1)]'>256</h1>
                    </div>
                </div>

                <div className='w-[133px] h-[133px] cursor-pointer flex flex-col items-center gap-[13.55px] rounded-[10px] duration-300 border-[3px] hover:border-[rgba(0,53,95,1)] border-transparent bg-[rgba(255,255,255,1)]'>
                    <img src={archive_icon} className='mt-[18px]' />
                    <div className='flex flex-col items-center gap-[8.86px]'>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(0,53,95,1)]'>Chiqib ketganlar</h1>
                        <h1 className='font-[roboto] font-[600] text-[16px] leading-[18.75px] text-[rgba(74,155,201,1)]'>400</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Status