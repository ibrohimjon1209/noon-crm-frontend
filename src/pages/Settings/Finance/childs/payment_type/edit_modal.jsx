import React, { useState, useEffect } from "react"
import { DateInput } from "./date_input"

const Edit_modal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    title: "Ibrohimjon Mamirov",
    start_time: undefined,
    end_time: undefined,
    phone: "+998883711747", // Telefon raqami uchun boshlang'ich qiymat
  })
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setTimeout(() => setIsAnimating(true), 30)
    } else {
      setIsAnimating(false)
      setTimeout(() => setShouldRender(false), 300) // Match this with the transition duration
    }
  }, [isOpen])

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        start_time: initialData.start_time ? new Date(initialData.start_time) : undefined,
        end_time: initialData.end_time ? new Date(initialData.end_time) : undefined,
      })
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  const handlePhoneFocus = () => {
    if (!formData.phone.startsWith("+998")) {
      setFormData(prev => ({
        ...prev,
        phone: "+998"
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      phone: value // Foydalanuvchi kiritgan raqamni saqlash
    }));
  };

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[349px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
          }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            3-shaxs tahrirlash
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-[20px] text-black font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="pt-[30px] px-[30px] flex flex-col">
          <div className=" flex justify-between">

            <div className="flex flex-col gap-[15px] ">
              <h1 className="font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(0,0,0,1)]">ISM</h1>
              <input type="text" placeholder="Ism"
              className="pl-[17px] placeholder:text-[rgba(0,0,0,0.8)] w-[260px] h-[50px] bg-[rgba(242,238,238,1)] rounded-[5px] font-roboto font-[400] text-[16px] leading-[18.75px] text-[rgba(0,0,0,0.8)]" />
            </div>

            <div className="flex flex-col gap-[15px] ">
              <h1 className="font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(0,0,0,1)]">Telefon raqam</h1>
              <input
                type="text"
                value={formData.phone}
                onFocus={handlePhoneFocus}
                onChange={handlePhoneChange}
                placeholder="Telefon raqami"
                className="pl-[17px] placeholder:text-[rgba(0,0,0,0.8)] w-[260px] h-[50px] bg-[rgba(242,238,238,1)] rounded-[5px] font-roboto font-[400] text-[16px] leading-[18.75px] text-[rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-[20px]">
            <div>
              <button onClick={onClose} className="hover:scale-[102%] hover:bg-[#dedfe0] active:scale-[95%] transition-all duration-100 mt-[50px] w-[142px] h-[63px] rounded-[5px] bg-[rgba(242,238,238,1)] font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(0,0,0,1)]">Orqaga</button>
            </div>
            <div>
              <button onClick={onClose} className="hover:scale-[102%] hover:bg-[#459ddb] active:scale-[95%] transition-all duration-100 mt-[50px] w-[142px] h-[63px] rounded-[5px] bg-[rgba(13,153,255,1)] font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(255,255,255,1)]">Saqlash</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
} 

export default Edit_modal