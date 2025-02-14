import React from 'react'
import plus from '../imgs/add_icon.png'
import exprt from '../imgs/export.png'
import imprt from '../imgs/import.png'
const Group_main = () => {
  return (
    <>

      <div className='w-[112vw] h-[150px] border-black border-[1px] flex justify-around items-center mt-[30px] ms-[20px]'>
        <div className='w-[25%] h-[100%] border-[1px] border-black flex justify-around items-center flex-row flex-wrap'>
          <div
            className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
          // onClick={() => setIsAddModalOpen(true)}
          >
            <img className='w-[20%]' src={plus} alt="" />
            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Qo'shish</h1>
          </div>
          <div className='w-[100%] h-[50%] flex justify-around items-center'>
            <div
              className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
            // onClick={() => setIsAddModalOpen(true)}
            >
              <img className='w-[20%]' src={exprt} alt="" />
              <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Export</h1>
            </div>
            <div
              className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
            // onClick={() => setIsAddModalOpen(true)}
            >
              <img className='w-[20%]' src={imprt} alt="" />
              <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Import</h1>
            </div>

          </div>

        </div>
        <div className='w-[75%] h-[100%] border-[1px] border-black'>
          
        </div>
      </div>


    </>
  )
}

export default Group_main