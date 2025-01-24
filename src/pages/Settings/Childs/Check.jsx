import React from 'react'
import check from './../Images/check_paper.png'
import logo from './../Images/logo.png'

const Check = () => {
  return (
    <div className='flex flex-row gap-[55px] w-[100%] h-[100%]'>
      <div className='w-[300px] h-[100%] bg-white rounded-[15px]'></div>
      <div className='w-[537px] h-auto relative'>
        <img className='absolute w-[100%] h-[85%]' src={check} alt="" />
        <div className='w-[100%] h-auto z-[10] relative flex flex-col items-center pt-[30px]'>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
            Amu Web School
          </p>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black pt-[15px]'>
            Assalomu Aleykum Amu Web School O'quv markazi!
          </p>
          <img className='-mt-[130px] w-[430px] h-[430px]' src={logo} alt="" />
          <div className='flex flex-col h-auto w-[100%] -mt-[120px] gap-[15px] px-[40px]'>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Kassir:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                O'quvchi:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Sana:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                27.08.2024 17:33
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Kassa:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                To'lov turi:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Naqt
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Tranzaktsiya turi:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                O'quvchi kirim
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Izoh:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bu Izoh
              </p>
            </div>
            <div className='flex flex-row w-[100%] justify-between'>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                To'lov:
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                500 000 so'm
              </p>
            </div>
          </div>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black pt-[15px]'>Bilim - asosdir, uning yurti ilm markazi</p>
        </div>
      </div>
    </div>
  )
}

export default Check