import React from 'react'
import { ChevronLeft, CircleUser } from 'lucide-react'
import add_pass from './Images/icon_1.svg'
import archive_moder from './Images/icon_2.svg'
import rename from './Images/icon_3.svg'
import star from './Images/star.svg'
import Nav_profile from './Nav_profile'

const Profile = () => {

    const info = [
        {
            name: "davomat",
            sum: "0"
        },
        {
            name: "davomatdan foizi",
            sum: "0"
        },
        {
            name: "avans",
            sum: "0"
        },
        {
            name: "jarima",
            sum: "0"
        },
        {
            name: "aklad",
            sum: "0"
        },
        {
            name: "oylik",
            sum: "0"
        },
        {
            name: "to’lanmagan",
            sum: "0"
        },
    ]

    return (
        <div className='pl-[32px] pt-[32px] pr-[32px] '>

            <div className='w-full h-[80px] pl-[17px] flex items-center gap-[12px] rounded-[12px] bg-white'>
                <ChevronLeft color='#747474' width={"30px"} height={"50px"} />
                <h1 className='font-inter font-[500] text-[22px] leading-[26.63px] text-[#404040]'>Xodimlar ro’yhati</h1>
            </div>


            <div className='flex gap-[20px] mt-[10px]'>


                <div className='w-[50%] h-[450px] bg-white rounded-[12px] flex'>

                    <div className='w-[25%] h-full '></div>
                    <div className='w-[50%] h-full flex flex-col items-center pt-[41px]'>
                        <div><CircleUser width={"180px"} height={"180px"} /></div>
                        <div className='flex flex-col text-center gap-[15px] mt-[20px]'>
                            <h1 className='font-inter font-[500] text-[26px] leading-[31.47px] text-[#404040]'>Maher Al-muaqly</h1>
                            <h1 className='font-inter font-[500] text-[22px] leading-[26.63px] text-[#747474]'>Moderator</h1>
                            <h1 className='font-inter font-[500] text-[22px] leading-[26.63px] text-[#747474]'>+998 99 987 65 43</h1>
                        </div>
                    </div>
                    <div className='w-[25%] h-full flex flex-col justify-between'>
                        <div className='flex justify-end p-[20px] gap-[20px]'>
                            <img src={add_pass} className='w-[30px] h-[30px] cursor-pointer' />
                            <img src={archive_moder} className='w-[30px] h-[30px] cursor-pointer' />
                            <img src={rename} className='w-[30px] h-[30px] cursor-pointer' />
                        </div>
                        <div className='w-full h-[44px] flex items-center justify-end pb-[20px] pr-[24px]'>
                            <h1 className='font-roboto font-[500] text-[18px] leading-[21.09px] text-[#0D99FF] uppercase'>reyting <span className='text-[#FFCC00] text-[20px]'>5</span></h1>
                            <img src={star} className='w-[24px] h-[24px]' />
                        </div>
                    </div>

                </div>



                <div className='w-[50%] h-[450px] bg-white rounded-[12px] pt-[15px]'>
                    {
                        info.map((item) => (
                            <div className='w-full h-[60px] border-b-[1px] pl-[30px] pr-[46px] flex justify-between items-center'>
                                <h1 className='font-roboto font-[400] capitalize text-[20px] leading-[23.44px] text-[#404040]'>{item.name}</h1>
                                <h1 className='font-roboto font-[400] text-[20px] leading-[23.44px] text-[#747474]'>{item.sum} UZS</h1>
                            </div>
                        ))
                    }

                </div>


            </div>



            <div>
                <Nav_profile />
            </div>

        </div>
    )
}

export default Profile