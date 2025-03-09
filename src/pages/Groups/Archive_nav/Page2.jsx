import React from 'react'
import calendarIcon from './img/calendar.png'
import archiveIcon from './img/archive.png'
const Page2 = () => {
  const info = [
    {
      date: "09.05.2025",
      time: "16:01"
    },
    {
      date: "09.05.2025",
      time: "16:01"
    },
    {
      date: "09.05.2025",
      time: "16:01"
    },
    {
      date: "09.05.2025",
      time: "16:01"
    },
    {
      date: "09.05.2025",
      time: "16:01"
    },
    
    
    
  ]
  return (
    <>
      <div className='fixed w-[112vw] h-[600px] bg-none mt-[700px] overflow-auto'>
      {info.map((item) => (
        <div className='w-full h-[250px] flex justify-center bg-white rounded-[15px] mt-[10px]'>
          <div className='w-[95%] h-[70%] mt-[10px]  flex justify-around flex-col items-start'>
            <h1 className='text-[black] font-[600] text-[28px]'>Sozlamalar</h1>
            
              <div className='w-[400px] h-[35px] flex justify-around items-center'>
                <div className='w-[50%] h-full flex justify-start items-center'>
                  <img className='h-[30px]' src={calendarIcon} alt="" />
                  <h1 className='ml-[10px] text-gray-500 text-[18px] font-[700]'>{item.date}</h1>
                </div>
                <div className='w-[50%] h-full flex justify-start items-center'>
                  <img className='h-[30px] ' src={archiveIcon} alt="" />
                  <h1 className='ml-[10px] text-gray-500 text-[18px] font-[700]'>{item.time}</h1>
                </div>
              </div>
           
            <table className='w-full h-[40px]'>
              <tbody className='border-gray-500 border-[1px] hover:bg-gray-100'>
                <tr className=''>
                  <td className='border-gray-500 border-[1px] ml-[10px] p-2 text-gray-500'>Ism</td>
                  <td className='border-gray-500 border-[1px] ml-[10px] p-2 text-gray-500'>Harakatlar</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default Page2