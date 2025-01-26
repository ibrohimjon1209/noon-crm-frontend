import React from 'react'

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[20px] w-[625px] h-[549px] z-50">
        <h2 className="font-roboto font-[400] p-6 text-[20px] leading-[23.44px] uppercase text-black">
          ROSTDAN HAM O'CHIRMOQCHIMISIZ ?
        </h2>
        <hr className='border-[#00000080] w-[100%]'/>
        <div className="flex justify-end mr-[70px] gap-4 mt-[35px]">
          <button
            onClick={onClose}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] text-black hover:bg-gray-200 hover:scale-105 active:scale-95 duration-300"
          >
            Yo'q
          </button>
          <button
            onClick={onConfirm}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300"
          >
            HA
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal