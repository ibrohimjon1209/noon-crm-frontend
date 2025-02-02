import React from "react";
import check from '../../imgs/check_paper.png'
import logo_vector from '../../imgs/logo.png'
import { div } from "framer-motion/client";

const Check_paper = ({
  title_input,
  check_bottom_text,
  check_language,
  filial_name,
  title,
  logo,
  cashier_name,
  student_name,
  date, cashier,
  value,
  payment_type,
  transaction_type,
  description,
  check_title
}) => {
  return (
    <div className="mt-[23px]">
      <div className='w-[550px] h-auto relative'>
        <img className='absolute w-[100%] h-[620px]' src={check} alt="" />
        <div className={`w-[100%] h-auto z-[10] relative flex flex-col items-center ${logo ? 'pt-[30px]' : 'pt-[70px]'}`}>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
            {filial_name ? "Amu Web School" : ""}
          </p>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black pt-[15px]'>
            {title_input ? title_input : ""}
          </p>
          {check_title ? logo ? <img className='w-[130px] h-[130px] mt-[20px] object-contain' src={logo_vector} alt="" /> : '' : ''}
          <div className={`flex flex-col h-auto w-[100%] ${logo ? 'mt-[30px]' : 'mt-[90px]'} gap-[15px] px-[40px]`}>
            <div className={`${cashier_name ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "Kassir:" : "Кассир:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className={`${student_name ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "O'quvchi:" : "Ученик:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className={`${date ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "Sana:" : "Дата:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                27.08.2024 17:33
              </p>
            </div>
            <div className={`${value ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "Summa:" : "Сумма:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bobur Bunyodjonov
              </p>
            </div>
            <div className={`${payment_type ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "To'lov turi:" : "Тип оплаты:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Naqt
              </p>
            </div>
            <div className={`${transaction_type ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "Tranzaktsiya turi:" : "Тип транзакции:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                O'quvchi kirim
              </p>
            </div>
            <div className={`${description ? 'flex' : 'hidden'} flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "Izoh:" : "Описание:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                Bu Izoh
              </p>
            </div>
            <div className={`flex flex-row w-[100%] justify-between`}>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                {check_language === "O'zbek tili" ? "To'lov:" : "Оплата:"}
              </p>
              <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black'>
                500 000 {check_language === "O'zbek tili" ? "so'm" : "сум"}
              </p>
            </div>
          </div>
          <p className='font-roboto font-[400] text-[18px] leading-[21.09px] text-black pt-[15px]'>
            {check_bottom_text ? check_bottom_text : ""}
          </p>
        </div>
      </div>
    </div>

  )
}

export default Check_paper