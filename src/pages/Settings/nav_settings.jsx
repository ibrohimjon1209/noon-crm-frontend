import React from 'react'
import function_icon from './Images/function.png'
import check_icon from './Images/check.png'
import subs_icon from './Images/subs.png'
import holiday_icon from './Images/holiday.png'
import { sub } from 'framer-motion/client'

const Nav_settings = () => {
  return (
    <div className='w-[426px] h-[80vh] pt-[5px] rounded-[15px] bg-[rgba(255,255,255,1)]'>

      <div className='w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
        <div className='w-[36.82px] h-[29.32px]'>
          <img src={function_icon} />
        </div>
        <h1 className='font-[roboto] font-[100] text-[18px] leading-[21.09px] text-[rgba(38,78,134,1)]'>Funksionallik</h1>
      </div>

      <div className='w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
        <div className='w-[36.82px] h-[29.32px]'>
          <img src={check_icon} />
        </div>
        <h1 className='font-[roboto] font-[0] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]'>Chek</h1>
      </div>

      <div className='w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
        <div className='w-[36.82px] h-[29.32px]'>
          <img src={subs_icon} />
        </div>
        <h1 className='font-[roboto] font-[0] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]'>Obuna</h1>
      </div>

      <div className='w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
        <div className='w-[36.82px] h-[29.32px]'>
          <img src={holiday_icon} />
        </div>
        <h1 className='font-[roboto] font-[0] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]'>Bayram kunlari</h1>
      </div>
    </div>
  )
}

export default Nav_settings