import React, { useState, useEffect } from "react"

const Add_modal = ({ isOpen, onClose }) => {
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

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[625px] h-[800px] z-50 transition-all duration-300 ease-out ${isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
          }`}
      >
        <div className="flex justify-between items-center pt-6 px-6 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">
            O’quchilarning baholash darajasini qo’shish
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-[20px] text-black font-roboto font-[700] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />
        <div className="pt-[20px] px-6 flex h-[100%] flex-col w-[100%]">
          <div className="space-y-[20px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Nomi</label>
            <input
              type="text"
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Minimal foiz</label>
            <input
              type="text"
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>
          <div className="space-y-[20px] pt-[30px]">
            <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Maksimal foiz</label>
            <input
              type="text"
              className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md"
              required
            />
          </div>

          <div className="w-[100%] h-[45%] border-black border-[1px] mt-[2%] flex justify-around ">
            <div className="w-[70%] h-[100%] border-black border-[1px] flex justify-around">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">Rangi</label>
              <div className="w-[75%] h-[100%] bg-[gray]">
                
                
              </div>
            </div>

            <div className="w-[30%] h-[100%] flex justify-end border-[1px] border-black items-end">
              <button
                type="submit"
                className="w-[140px] h-[60px] text-[20px] py-2 px-4 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF] ]"
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