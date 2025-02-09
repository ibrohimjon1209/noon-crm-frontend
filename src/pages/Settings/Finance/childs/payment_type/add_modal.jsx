"use client"

import { useState, useEffect } from "react"
import "./styles.css"

const CustomCheckbox = ({ label, checked, onChange, className }) => {
  return (
    <label className="flex items-center cursor-pointer text-black"> {/* To'q qora rang */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only" // Hide the default checkbox
      />
      <div
        className={`w-[27px] h-[25px] border rounded flex items-center justify-center ${
          checked ? "bg-blue-500 border-blue-500" : "border-black"
        } ${className}`}
      >
        {checked && (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24"> {/* Kattalashtirilgan check */}
            <path fill="currentColor" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        )}
      </div>
      <span className="ml-2 text-[18px] font-roboto font-[400]">{label}</span>
    </label>
  )
}



const Add_modal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    start_time: "",
    end_time: "",
    phone: "",
    isActive: false,
    showExpenses: true,
  })
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setTimeout(() => setIsAnimating(true), 30)
    } else {
      setIsAnimating(false)
      setTimeout(() => setShouldRender(false), 300)
    }
  }, [isOpen])

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        start_time: initialData.start_time || "",
        end_time: initialData.end_time || "",
        isActive: initialData.isActive || false,
        showExpenses: initialData.showExpenses || true,
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
      setFormData((prev) => ({
        ...prev,
        phone: "+998",
      }))
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }))
  }

  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSelectChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[470px] z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            to'lov turlarini qo'shish
          </h2>
          <button
            onClick={onClose}
            className="text-[20px] text-black font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="pt-[30px] px-[30px] flex flex-col">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-[15px] ">
              <h1 className="font-roboto font-[400] text-[18px] leading-[23.44px] text-[rgba(0,0,0,1)]">Nomi</h1>
              <input
                type="text"
                placeholder="Nomi"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="pl-[17px] placeholder:text-[rgba(0,0,0,0.8)] w-[560px] h-[50px] bg-[rgba(242,238,238,1)] rounded-[5px] font-roboto font-[400] text-[16px] leading-[18.75px] text-[rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="space-y-4 mt-4">
              <CustomCheckbox
                label="Aktiv"
                checked={formData.isActive}
                onChange={() => handleCheckboxChange("isActive")}
              />

              <CustomCheckbox
                label="Daromat xarajatlarini ko'rsatish"
                checked={formData.showExpenses}
                className="font-[400] text-black"
                onChange={() => handleCheckboxChange("showExpenses")}
              />
            </div>
          </div>

          <div className="flex justify-end gap-[20px] mt-[20px]">
            <div>
              <button
                onClick={onClose}
                className="hover:scale-[102%] hover:bg-[#dedfe0] active:scale-[95%] transition-all duration-100 mt-[50px] w-[142px] h-[63px] rounded-[5px] bg-[rgba(242,238,238,1)] font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(0,0,0,1)]"
              >
                Orqaga
              </button>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="hover:scale-[102%] hover:bg-[#459ddb] active:scale-[95%] transition-all duration-100 mt-[50px] w-[142px] h-[63px] rounded-[5px] bg-[rgba(13,153,255,1)] font-roboto font-[400] text-[20px] leading-[23.44px] text-[rgba(255,255,255,1)]"
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_modal
