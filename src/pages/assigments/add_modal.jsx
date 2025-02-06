import React, { useState, useEffect } from "react"

const Add_modal = ({ isOpen, onClose }) => {
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
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[20px] w-[625px] h-[630px] z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-8 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
          Topshiriq
          </h2>
          <button
            onClick={onClose}
            className="text-black text-[20px] text-black font-roboto font-[800] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="w-full h-full flex flex-col items-center px-10 pt-8 gap-[28px]">
            <div className="w-full flex flex-row gap-[40px]">
                <div className="w-full h-[58px] bg-[#F2EEEE] rounded">
                  <input type="text" className="font-roboto font-[400] text-[18px] leading-[21.09px] text-[rgba(0,0,0,1)] bg-transparent w-full h-full pl-[20px]" />
                </div>
                <div className="w-full h-[58px] bg-[#F2EEEE] rounded"></div>
            </div>
            <div className="w-full h-[58px] bg-[#F2EEEE]"></div>
            <div className="w-full h-[58px] bg-[#F2EEEE]"></div>
            <div className="w-full h-[58px] bg-[#F2EEEE]"></div>
            <div className="w-full h-[58px] bg-[#F2EEEE]"></div>
            <div className="w-[142px] h-[63px] hover:scale-105 active:scale-95 duration-300 bg-[#0D99FF] rounded-[5px] flex justify-center items-center cursor-pointer font-roboto font-[400] text-[20px] leading-[23.44px] text-white">
                Saqlash
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add_modal