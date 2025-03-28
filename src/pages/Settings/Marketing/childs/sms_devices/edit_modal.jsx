import React, { useState, useEffect } from "react"
import { DateInput } from "./date_input"

const Edit_modal = ({ isOpen, onClose, initialData, onSave }) => {
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
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
      setTimeout(() => setShouldRender(false), 300) // Match this with the transition duration
    }
  }, [isOpen])

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
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
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[930px] scale-[0.8] z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            SMS QURILMALAR TAHRIRLASH
          </h2>
          <button
            onClick={onClose}
            className="text-[20px] text-black font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <form onSubmit={handleSubmit} className="space-y-8 pt-7 px-6 flex flex-col w-[100%]">
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Qurilma</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Kompaniya</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">IMEI</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Moderator</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Status</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Holati</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Qurilma</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>

          

          <button
            type="submit"
            className="w-[140px] mx-auto h-[60px] text-[20px] py-2 px-4 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
          >
            Saqlash
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit_modal