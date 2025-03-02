import React, { useState, useEffect } from "react"

const Delete_modal = ({ isOpen, onClose, onConfirm }) => {
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

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[20px] w-[625px] h-[480px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <h2 className="font-roboto font-[400] p-6 text-[20px] leading-[23.44px] uppercase text-black text-center">
          O'quvchini Muzlatish
        </h2>
        <div className="flex flex-col w-[90%] h-[300px] m-auto gap-5">
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Muzlatishdan olib tashlash sanasi</label>
            <input
              type="date"
              className="w-[100%] h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              placeholder="kk/oo/yyyy"
            />
          </div>
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Sabab</label>
            <textarea
             className="border-gray-600 border-[1px] resize-none w-full h-[150px] rounded-lg p-4 placeholder-roboto "
             placeholder="SABABNI YOZING"
            ></textarea>
        </div>


        <div className="flex justify-around items-center gap-4 mt-[25px] w-[60%] m-auto">
          <button
            onClick={onClose}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
          >
            Bekor qilish
          </button>
          <button
            onClick={onConfirm}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  )
}

export default Delete_modal