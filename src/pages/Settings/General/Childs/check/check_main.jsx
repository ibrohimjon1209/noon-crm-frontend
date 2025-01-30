import React, { useState } from "react"
import logo_vector from "../../imgs/logo.png"
import Check_paper from "./check_paper"

const Check = () => {
  const [auto_print, setAutoPrint] = useState(false)
  const [check_title, setCheckTitle] = useState(true)
  const [transaction_data, setTransactionData] = useState(true)
  const [title_input, setTitleInput] = useState("Assalomu Aleykum Amu Web School O'quv markazi!")
  const [check_bottom_text, setCheckBottomText] = useState("Bilim - asosdir, uning yurti ilm markazi")
  const [check_language, setCheckLanguage] = useState("O'zbek tili")
  const [filial_name, setFilialName] = useState(true)
  const [title, setTitle] = useState(true)
  const [logo, setLogo] = useState(true)
  const [cashier_name, setCashierName] = useState(true)
  const [student_name, setStudentName] = useState(true)
  const [date, setDate] = useState(true)
  const [cashier, setCashier] = useState(true)
  const [value, setValue] = useState(true)
  const [payment_type, setPaymentType] = useState(true)
  const [transaction_type, setTransactionType] = useState(true)
  const [description, setDescription] = useState(true)

  const handle_title_input_change = (e) => {
    const inputValue = e.target.value
    if (inputValue.length <= 55) {
      setTitleInput(inputValue)
    }
  }

  const handle_check_bottom_text_change = (e) => {
    const inputValue = e.target.value
    if (inputValue.length <= 60) {
      setCheckBottomText(inputValue)
    }
  }

  const handle_language_change = (option) => {
    setCheckLanguage(option)
  }

  return (
    <div className="flex flex-row justify-center gap-[55px] w-[100%] h-auto">
      <div
        className="w-[330px] pt-[20px] h-[calc(100vh-180px)] flex flex-col items-center bg-white rounded-t-[15px] rounded-b-[1px] shadow-lg overflow-y-scroll"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="flex flex-col pl-[35px] w-[100%] h-[100%] gap-[15px]">
          <p className="font-roboto font-[400] text-black text-[18px] leading-[21.09px]">Chek sozlamalari</p>
          <p className="font-roboto font-[400] text-[#404040] text-[15px] leading-[18.15px]">Logo</p>
        </div>
        <img className="w-[250px] -mt-[75px] h-[250px]" src={logo_vector || "/placeholder.svg"} alt="" />
        <div className="w-[100%] -mt-[63px] h-auto flex flex-col items-center">
          <div className="w-[80%] flex gap-[18px] border-b-[1px] border-black border-dashed pb-[18px] flex-col">
            <p className="font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]">Sarlavha</p>
            <input
              className="w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]"
              type="text"
              value={title_input}
              onChange={handle_title_input_change}
            />
            <p className="font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]">Chek tag yozuvi</p>
            <input
              className="w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]"
              type="text"
              value={check_bottom_text}
              onChange={handle_check_bottom_text_change}
            />
            <p className="font-roboto font-[500] text-[#404040] text-[15px] leading-[18.15px]">Chek tili</p>
            <select
              className="w-[100%] h-[38px] rounded-[5px] bg-[#F2EEEE] text-[#000000B2] px-[10px]"
              value={check_language}
              onChange={(e) => handle_language_change(e.target.value)}
            >
              <option value="O'zbek tili">O'zbek tili</option>
              <option value="Rus tili">Rus tili</option>
            </select>
          </div>
          <div className="flex flex-row w-[80%] items-center justify-between mt-[20px] border-b-[1px] border-black border-dashed pb-[20px]">
            <p className="font-roboto font-[400] text-[18px] text-black leading-[21.09px]">Auto Print</p>
            <div
              onClick={() => setAutoPrint(!auto_print)}
              className={`rounded-[40px] ${auto_print ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${auto_print ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}
            >
              <div
                className={`h-[85%] ${auto_print ? "bg-white" : "bg-[#264E86]"} w-[50%] rounded-[50%] duration-[0.1s] ease-out`}
              ></div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col">
            <div className={`flex border-black border-dashed ${!check_title && 'border-b-[1px] pb-[20px]'} flex-row justify-between mt-[20px] items-center mx-auto w-[80%]`}>
              <p className="font-roboto font-[400] text-[18px] text-black leading-[21.09px]">Chekning sarlavhasi</p>
              <div
                onClick={() => setCheckTitle(!check_title)}
                className={`rounded-[40px] ${check_title ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${check_title ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}
              >
                <div
                  className={`h-[85%] ${check_title ? "bg-white" : "bg-[#264E86]"} w-[50%] rounded-[50%] duration-[0.1s] ease-out`}
                ></div>
              </div>
            </div>
            <div className={`${check_title ? 'flex opacity-100' : 'hidden opacity-0'} transition-all ease-in flex-col mt-[20px] w-[100%] gap-[20px]`}>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={check_title && filial_name}
                    onChange={() => check_title && setFilialName(!filial_name)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${check_title && filial_name ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${check_title && filial_name ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Filial nomi</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={check_title && title}
                    onChange={() => check_title && setTitle(!title)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${check_title && title ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${check_title && title ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Sarlavha</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={check_title && logo}
                    onChange={() => check_title && setLogo(!logo)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${check_title && logo ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${check_title && logo ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Logotip</p>
              </div>
              <div className="mx-auto w-[80%] border-b-[1px] border-black border-dashed"></div>
            </div>
            <div className={`flex flex-row justify-between ${transaction_data ? 'mt-[20px]' : 'my-[20px]'} duration-[0.3s] ease-out items-center mx-auto w-[80%]`}>
              <p className="font-roboto whitespace-nowrap font-[400] text-[18px] text-black leading-[21.09px]">
                Tranzaksiya ma'lumotlari
              </p>
              <div
                onClick={() => setTransactionData(!transaction_data)}
                className={`rounded-[40px] ${transaction_data ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${transaction_data ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer px-[2px] items-center border-[#264E86] border-[4px] h-[23px]`}
              >
                <div
                  className={`h-[85%] ${transaction_data ? "bg-white" : "bg-[#264E86]"} w-[50%] rounded-[50%] duration-[0.1s] ease-out`}
                ></div>
              </div>
            </div>
            <div className={`${transaction_data ? 'flex opacity-100' : 'hidden opacity-0'} transition-all ease-in flex-col mt-[20px] w-[100%] gap-[20px]`}>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && cashier_name}
                    onChange={() => transaction_data && setCashierName(!cashier_name)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && cashier_name ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && cashier_name ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Kassir ismi</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && student_name}
                    onChange={() => transaction_data && setStudentName(!student_name)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && student_name ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && student_name ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">O’quvchining ismi</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && date}
                    onChange={() => transaction_data && setDate(!date)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && date ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && date ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Sana</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && cashier}
                    onChange={() => transaction_data && setCashier(!cashier)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && cashier ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && cashier ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Kassir</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && value}
                    onChange={() => transaction_data && setValue(!value)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && value ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && value ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Miqdor</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && payment_type}
                    onChange={() => transaction_data && setPaymentType(!payment_type)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && payment_type ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && payment_type ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">To’lov turi</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && transaction_type}
                    onChange={() => transaction_data && setTransactionType(!transaction_type)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && transaction_type ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && transaction_type ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Tranzaktsiya Turi</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[100%]">
                <label className="relative block pl-9 mb-3 cursor-pointer text-lg select-none">
                  <input
                    disabled={!transaction_data}
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    checked={transaction_data && description}
                    onChange={() => transaction_data && setDescription(!description)}
                  />
                  <span
                    className={`border-[1px] border-[#264E86] absolute h-5 w-5 rounded-sm 
              ${transaction_data && description ? "bg-[#264E86]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[3px] after:left-[6px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${transaction_data && description ? "after:block" : "after:hidden"}`}
                  ></span>
                </label>
                <p className="font-inter font-[500] text-[15px] text-[#404040] leading-[18.15px]">Izoh</p>
              </div>
              <div className="flex flex-row gap-[30px] w-[90%] justify-end">
                <div className="scale-[1] hover:scale-[1.05] active:scale-[0.95] duration-300 cursor-pointer w-[120px] h-[50px] bg-[#0D99FF] mb-[20px] rounded-[5px] flex justify-center items-center">
                  <p className="font-roboto font-[400] text-[20px] text-white leading-[23.44px]">Saqlash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Check_paper
        title_input={title ? (check_title ? title_input : "") : ""}
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