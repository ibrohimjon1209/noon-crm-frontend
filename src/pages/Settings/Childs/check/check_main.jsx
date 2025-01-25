import React, { useState } from 'react'
import logo_vector from '../../Images/logo.png'
import Check_paper from './check_paper'
import { use } from 'react'

const Check = () => {

  const [auto_print, set_auto_print] = useState(false)
  const [check_title, set_check_title] = useState(true)
  const [transaction_data, set_transaction_data] = useState(true)
  const [title_input, set_title_input] = useState("Assalomu Aleykum Amu Web School O'quv markazi!")
  const [check_bottom_text, set_check_bottom_text] = useState("Bilim - asosdir, uning yurti ilm markazi")
  const [check_language, set_check_language] = useState("O'zbek tili")
  const [filial_name, set_filial_name] = useState(true)
  const [title, set_title] = useState(true)
  const [logo, set_logo] = useState(true)
  const [cashier_name, set_cashier_name] = useState(true)
  const [student_name, set_student_name] = useState(true)
  const [date, set_date] = useState(true)
  const [cashier, set_cashier] = useState(true)
  const [value, set_value] = useState(true)
  const [payment_type, set_payment_type] = useState(true)
  const [transaction_type, set_transaction] = useState(true)
  const [description, set_description] = useState(true)
  
  const handle_title_input_change = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 55) {
      set_title_input(inputValue);
    }
  };

  const handle_check_bottom_text_change = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 60) {
      set_check_bottom_text(inputValue);
    }
  };

  
  const handle_language_change = (option) => {
    set_check_language(option);
  };

  return (
    <div className='flex flex-row justify-center gap-[55px] w-[100%] h-[880px]'>
      <div className='w-[330px] pt-[20px] h-[83%] flex flex-col items-center bg-white rounded-[15px] overflow-y-scroll' style={{scrollbarWidth: 'thin'}}>
        <div className='flex flex-col pl-[35px] w-[100%] h-[100%] gap-[15px]'>
          <p className='font-roboto font-[400] text-black text-[18px] leading-[21.09px]'>
            Chek sozlamalari
          </p>
          <p className='font-roboto font-[400] text-[#404040] text-[15px] leading-[18.15px]'>
            Logo
          </p>
        </div>
        <img className='-mt-[75px] w-[250px] h-[250px]' src={logo_vector} alt="" />
        <div className='w-[100%] -mt-[63px] h-auto flex flex-col items-center'>
          <div className='w-[80%] flex gap-[18px] border-b-[1px] border-black border-dashed pb-[18px] flex-col'>
          <p className='font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]'>
            Sarlavha
          </p>
          <input
          className="w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]"
          type="text"
          value={title_input}
          onChange={handle_title_input_change}
          />
          <p className='font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]'>
            Chek tag yozuvi
          </p>
          <input 
          className='w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]' 
          type="text" 
          value={check_bottom_text}
          onChange={handle_check_bottom_text_change}
          />
          <p className='font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]'>
            Chek tili
          </p>
          <select 
          className='w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]'
          value={check_language}
          onChange={(e) => handle_language_change(e.target.value)}
          >
            <option value="O'zbek tili">O'zbek tili</option>
            <option value="Rus tili">Rus tili</option>
          </select>
          </div>
          <div className='flex flex-row w-[80%] items-center justify-between mt-[20px] border-b-[1px] border-black border-dashed pb-[20px]'>
            <p className='font-roboto font-[400] text-[18px] text-black leading-[21.09px]'>
              Auto Print
            </p>
            <div onClick={() => set_auto_print(!auto_print)} className={`rounded-[40px] ${auto_print ? 'bg-[#264E86]' : 'bg-white'} w-[38px] flex ${ auto_print ? 'justify-end' : 'justify-start'} duration-[0.8ms] cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}>
              <div className={`h-[85%] ${auto_print ? 'bg-white' : 'bg-[#264E86]'} w-[50%] rounded-[50%] duration-[0.8ms]`}>
              </div>
            </div>
          </div>
          <div className='w-[100%] flex flex-col'>
            <div className='flex flex-row justify-between mt-[20px] items-center mx-auto w-[80%]'>
            <p className='font-roboto font-[400] text-[18px] text-black leading-[21.09px]'>
              Chekning sarlavhasi
            </p>
            <div onClick={() => set_check_title(!check_title)} className={`rounded-[40px] ${check_title ? 'bg-[#264E86]' : 'bg-white'} w-[38px] flex ${ check_title ? 'justify-end' : 'justify-start'} duration-[0.8ms] cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}>
              <div className={`h-[85%] ${check_title ? 'bg-white' : 'bg-[#264E86]'} w-[50%] rounded-[50%] duration-[0.8ms]`}>
              </div>
            </div>
            </div>
            <div className='flex flex-col mt-[20px] w-[100%] gap-[20px]'>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={filial_name}
              onChange={() => check_title && set_filial_name(!filial_name)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              peer-checked:${check_title ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Filial nomi
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={title}
              onChange={() => check_title && set_title(!title)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${check_title ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Sarlavha
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={logo}
              onChange={() => check_title && set_logo(!logo)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${check_title ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Logotip
              </p>
            </div>
            <div className='mx-auto w-[80%] border-b-[1px] border-black border-dashed'></div>
            </div>
            <div className='flex flex-row justify-between mt-[20px] items-center mx-auto w-[80%]'>
            <p className='font-roboto whitespace-nowrap font-[400] text-[18px] text-black leading-[21.09px]'>
              Tranzaksiya ma'lumotlari
            </p>
            <div onClick={() => set_transaction_data(!transaction_data)} className={`rounded-[40px] ${transaction_data ? 'bg-[#264E86]' : 'bg-white'} w-[38px] flex ${ transaction_data ? 'justify-end' : 'justify-start'} duration-[0.8ms] cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}>
              <div className={`h-[85%] ${transaction_data ? 'bg-white' : 'bg-[#264E86]'} w-[50%] rounded-[50%] duration-[0.8ms]`}>
              </div>
            </div>
            </div>
            <div className='flex flex-col mt-[20px] w-[100%] gap-[20px]'>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={cashier_name}
              onChange={() => transaction_data && set_cashier_name(!cashier_name)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Kassir ismi
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={student_name}
              onChange={() => transaction_data && set_student_name(!student_name)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                O’quvchining ismi
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={date}
              onChange={() => transaction_data && set_date(!date)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Sana
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={cashier}
              onChange={() => transaction_data && set_cashier(!cashier)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Kassir
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={value}
              onChange={() => transaction_data && set_value(!value)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Miqdor
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={payment_type}
              onChange={() => transaction_data && set_payment_type(!payment_type)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                To’lov turi
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={transaction_type}
              onChange={() => transaction_data && set_transaction_type(!transaction_type)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Tranzaktsiya Turi
              </p>
            </div>
            <div className='flex flex-row gap-[30px] w-[100%]'>
            <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
            <input
              disabled={!transaction_data}
              type="checkbox"
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
              defaultChecked={description}
              onChange={() => transaction_data && set_description(!description)}
              />
            <span
              className={`border-[1px] border-[#264E86] absolute h-5 w-5 bg-white rounded-sm 
              peer-checked:${transaction_data ? 'bg-[#264E86]' : 'bg-gray-400'} 
              peer-checked:after:content-[''] peer-checked:after:absolute 
              peer-checked:after:top-[3px] peer-checked:after:left-[6px] 
              peer-checked:after:w-1.5 peer-checked:after:h-2.5 
              peer-checked:after:border-white peer-checked:after:border-r-2 
              peer-checked:after:border-b-2 peer-checked:after:rotate-45`}
            ></span>
            </label>
              <p className='font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]'>
                Izoh
              </p>
            </div>
            <div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Check_paper 
        title_input={title ? check_title ? title_input : '' : ''}
        check_bottom_text={check_bottom_text} 
        check_language={check_language} 
        filial_name={check_title ? filial_name : false}
        title={check_title ? title : false}
        logo={check_title ? logo : false}
        cashier_name={transaction_data ? cashier_name : false}
        student_name={transaction_data ? student_name : false}
        date={transaction_data ? date : false}
        cashier={transaction_data ? cashier : false}
        value={transaction_data ? value : false}
        payment_type={transaction_data ? payment_type : false}
        transaction_type={transaction_data ? transaction_type : false}
        description={transaction_data ? description : false}
        check_title={check_title}
      />
    </div>
  )
}

export default Check