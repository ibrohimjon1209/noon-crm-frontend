import React, { useState, useEffect } from "react"

const Add_modal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    start_time: undefined,
    end_time: undefined,
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

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[549px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
          }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            Hamkor qo'shish
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-[20px] text-black font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="pt-[15px]">
          <div onClick={onClose} className="w-full h-[60px] border-b-[0.5px] hover:bg-[rgba(242,238,238,1)] border-black  flex items-center pl-[30px]">
            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]">Diyorbek Omonboyev</h1>
          </div>
          <div onClick={onClose} className="w-full h-[60px] border-b-[0.5px] hover:bg-[rgba(242,238,238,1)] border-black flex items-center pl-[30px]">
            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]">Mirzohid Ismoilov</h1>
          </div>
          <div onClick={onClose} className="w-full h-[60px] border-b-[0.5px] hover:bg-[rgba(242,238,238,1)] border-black flex items-center pl-[30px]">
            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)]">Ibrohimjon Mamirov</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_modal