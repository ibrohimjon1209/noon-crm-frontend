"use client"

import { useState } from "react"
import { CirclePlus, Calendar } from "lucide-react"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    ism: "Murod",
    familya: "Nazarov",
    telefonraqam: "+ 0-800-210-00-00",
    teglar: "Tanlang",
    email: "example@gmail.com",
    birthDate: "",
    darsVaqti: "Dars Shaklini Tanlang",
    category: "8-11 sinflar",
    paymentDate: "",
    language: "O'zbek Tili",
    marketing: "",
    universitet: "",
    otaIsmi: "",
    otaTelefon: "+998",
    otaIshJoyi: "",
    onaIsmi: "Tanlang",
    onaTelefon: "+998",
    onaIshJoyi: "",
    uyManzili: "",
    oqishJoyi: "",
    izoh: "",
  })

  const [showBirthCalendar, setShowBirthCalendar] = useState(false)
  const [showPaymentCalendar, setShowPaymentCalendar] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendar_value, set_calendar_value] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleDateSelect = (dateType, dateStr) => {
    setFormData({
      ...formData,
      [dateType]: dateStr,
    })
    set_calendar_value(dateStr)

    if (dateType === "birthDate") {
      setShowBirthCalendar(false)
    } else if (dateType === "paymentDate") {
      setShowPaymentCalendar(false)
    }
  }

  const clearSelection = (field) => {
    setFormData({
      ...formData,
      [field]: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", formData)
  }

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + increment)
    setCurrentDate(newDate)
  }

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getStartDayOfMonth = (year, month) => {
    const date = new Date(year, month, 1)
    const day = date.getDay()
    return day === 0 ? 6 : day - 1
  }

  const renderCalendar = (dateType) => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const startDay = getStartDayOfMonth(year, month)
    const days = []

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayValue = `${String(i).padStart(2, "0")}.${String(month + 1).padStart(2, "0")}.${year}`
      const isSelected = calendar_value === dayValue

      days.push(
        <div
          key={i}
          onClick={() => {
            handleDateSelect(dateType, dayValue)
            if (dateType === "birthDate") {
              setShowBirthCalendar(false)
            } else if (dateType === "paymentDate") {
              setShowPaymentCalendar(false)
            }
          }}
          className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${
            isSelected ? "bg-[rgba(38,78,134,1)] text-white" : "hover:bg-[#f0f0f0]"
          }`}
        >
          {i}
        </div>,
      )
    }

    return days
  }

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ]

  const generateCalendar = (dateType) => {
    return (
      <div className="absolute z-10 bg-white border border-gray-200 rounded-md p-4 shadow-lg w-72">
        <div className="flex justify-between items-center mb-2">
          <button onClick={() => changeMonth(-1)}>&lt;</button>
          <div className="font-bold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <button onClick={() => changeMonth(1)}>&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day) => (
            <div key={day} className="text-center font-bold p-1">
              {day}
            </div>
          ))}
          {renderCalendar(dateType)}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-[15px] text-[#404040]">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {/* First row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Ism</label>
            <input
              type="text"
              name="ism"
              value={formData.ism}
              onChange={handleChange}
              placeholder="Murod"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Familya</label>
            <input
              type="text"
              name="familya"
              value={formData.familya}
              onChange={handleChange}
              placeholder="Nazarov"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Telefonraqam</label>
            <input
              type="text"
              name="telefonraqam"
              value={formData.telefonraqam}
              onChange={handleChange}
              placeholder="+ 0-800-210-00-00"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          {/* Second row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Teglar</label>
            <div className="relative">
              <select
                name="teglar"
                value={formData.teglar}
                onChange={handleChange}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md appearance-none"
              >
                <option value="Tanlang">Tanlang</option>
                <option value="Toshkent">Toshkent</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Buxoro">Buxoro</option>
                <option value="Andijon">Andijon</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Electron Pochta</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Tug'ilgan Sanasi</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowBirthCalendar(!showBirthCalendar)}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md text-left flex justify-between items-center"
              >
                {formData.birthDate || "kk/oo/yyyy"}
                <span><Calendar /></span>
              </button>
              {showBirthCalendar && generateCalendar("birthDate")}
            </div>
          </div>

          {/* Third row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Dars Vaqti</label>
            <div className="relative">
              <select
                name="darsVaqti"
                value={formData.darsVaqti}
                onChange={handleChange}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md appearance-none"
              >
                <option value="Dars Shaklini Tanlang">Dars Shaklini Tanlang</option>
                <option value="Ertalab">Ertalab</option>
                <option value="Tushdan keyin">Tushdan keyin</option>
                <option value="Kechqurun">Kechqurun</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">
              O'quvchi Kategoriyasi
            </label>
            <div className="relative">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md appearance-none pr-10"
              >
                <option value="">Tanlang</option>
                <option value="1-4 sinflar">1-4 sinflar</option>
                <option value="5-7 sinflar">5-7 sinflar</option>
                <option value="8-11 sinflar">8-11 sinflar</option>
                <option value="Talaba">Talaba</option>
              </select>
              {formData.category && (
                <button
                  type="button"
                  onClick={() => clearSelection("category")}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">
              O'quvchining To'lov Sanasi
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPaymentCalendar(!showPaymentCalendar)}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md text-left flex justify-between items-center"
              >
                {formData.paymentDate || "kk/oo/yyyy"}
                <span><Calendar /></span>
              </button>
              {showPaymentCalendar && generateCalendar("paymentDate")}
            </div>
          </div>

          {/* Fourth row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">O'qish Tili</label>
            <div className="relative">
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md appearance-none pr-10"
              >
                <option value="">Tanlang</option>
                <option value="O'zbek Tili">O'zbek Tili</option>
                <option value="Rus Tili">Rus Tili</option>
                <option value="Ingliz Tili">Ingliz Tili</option>
              </select>
              {formData.language && (
                <button
                  type="button"
                  onClick={() => clearSelection("language")}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">
              Marketing So'rov Nomasi
            </label>
            <div className="relative">
              <select
                name="marketing"
                value={formData.marketing}
                onChange={handleChange}
                className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md appearance-none pr-10"
              >
                <option value="">Tanlang</option>
                <option value="Instagram">Instagram</option>
                <option value="Telegram">Telegram</option>
                <option value="Facebook">Facebook</option>
                <option value="Do'stlar orqali">Do'stlar orqali</option>
              </select>
              {formData.marketing && (
                <button
                  type="button"
                  onClick={() => clearSelection("marketing")}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">
              Maqsadidagi Universitet
            </label>
            <input
              type="text"
              name="universitet"
              value={formData.universitet}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          {/* Fifth row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Otasining Ismi</label>
            <input
              type="text"
              name="otaIsmi"
              value={formData.otaIsmi}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Telefon Raqami</label>
            <input
              type="text"
              name="otaTelefon"
              value={formData.otaTelefon}
              onChange={handleChange}
              placeholder="+998"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Ish Joyi</label>
            <input
              type="text"
              name="otaIshJoyi"
              value={formData.otaIshJoyi}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          {/* Sixth row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Onasining Ismi</label>
            <input
              type="text"
              name="onaIsmi"
              value={formData.onaIsmi}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Telefon Raqami</label>
            <input
              type="text"
              name="onaTelefon"
              value={formData.onaTelefon}
              onChange={handleChange}
              placeholder="+998"
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Ish Joyi</label>
            <input
              type="text"
              name="onaIshJoyi"
              value={formData.onaIshJoyi}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          {/* Seventh row */}
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Uy Manzili</label>
            <input
              type="text"
              name="uyManzili"
              value={formData.uyManzili}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">O'qish Joyi</label>
            <input
              type="text"
              name="oqishJoyi"
              value={formData.oqishJoyi}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-roboto font-[400] text-[22px] leading-[25px] mb-5">Izoh</label>
            <input
              type="text"
              name="izoh"
              value={formData.izoh}
              onChange={handleChange}
              className="w-full h-[60px] font-roboto font-[300] text-[22px] leading-[25px] p-4 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Add field button */}
        <div className="mb-6">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white w-[456px] h-[60px] flex items-center justify-center font-roboto font-[400] text-[22px] rounded-md flex items-center"
          >
            <span className="mr-2">
              <CirclePlus />
            </span>{" "}
            Maxsus Maydon Qo'shish
          </button>
        </div>

        {/* Form actions */}
        <div className="flex justify-end gap-10">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 w-[200px] h-[60px] rounded-md font-roboto font-[500] text-[20px] leading-[25px]"
          >
            Bekorqilish
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-[200px] h-[60px] rounded-md font-roboto font-[500] text-[20px] leading-[25px]"
          >
            Saqlash
          </button>
        </div>
      </form>
    </div>
  )
}

