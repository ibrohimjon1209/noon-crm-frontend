import React, { useState } from 'react'
import pic from './Images/login.png'
import logo from './Images/logo.png'
import eye from './Images/eye.png'
import eyeSlash from './Images/eye.png'
import axios from 'axios'

const Logup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://nightmafia.uz/account/login', {
                phone_number: phoneNumber,
                password: password
            })
            console.log(response.data)
            // Foydalanuvchini saqlash
            localStorage.setItem('user', JSON.stringify(response.data))
            // Boshqa amallar amalga oshirish
            // Masalan, foydalanuvchini boshqa sahifaga yo'naltirish
            window.location.href = '/dashboard'
        } catch (error) {
            if (error.response) {
                // Server tomonidan qaytarilgan xatolik
                console.error('Server xatoligi:', error.response.data)
                alert('Xato: ' + error.response.data.message)
            } else if (error.request) {
                // So'rov yuborilgandan so'ng javob olinmagan
                console.error('So\'rov xatoligi:', error.request)
                alert('Xato: So\'rov bajarilmadi')
            } else {
                // Boshqa xatoliklar
                console.error('Boshqa xatolik:', error.message)
                alert('Xato: ' + error.message)
            }
        }
    }

    return (
        <div className='flex '>
            <div className='hidden sm:block w-[50%] h-[calc(132.5vh)] bg-[#FFFFFF] '>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={pic} />
                </div>
            </div>
            <div className='w-[100%] sm:w-[50%] h-[132.5vh] bg-[#D9D9D9] flex flex-col'>
                <div className='flex justify-end mt-[82px] pr-[82px]'>
                    <img src={logo} />
                </div>

                <div className='flex justify-center'>
                    <h1 className='font-inter font-[600] text-[32px] leading-[22px] text-[#000000] mt-[124px]'>Logup</h1>
                </div>

                <div className='flex flex-col justify-center items-center mt-[6%] gap-[23px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='font-inter font-[600] text-[15px] leading-[22px] text-black'>Telefon :</h1>
                        <input
                            type="text"
                            className='transition-all duration-300 focus:scale-[102%] pl-[26px] w-[300px] sm:w-[26vw] h-[58px] rounded-[10px] bg-[#EDEDED] font-inter font-[500] placeholder:font-inter placeholder:font-[500] placeholder:text-[15px] text-[15px] text-black placeholder:text-[#6B6B6B]'
                            placeholder='Telefon raqamni kiriting'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='font-inter font-[600] text-[15px] leading-[22px] text-black'>Parol :</h1>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='transition-all duration-300 focus:scale-[102%] pl-[26px] w-[300px] sm:w-[26vw] h-[58px] rounded-[10px] bg-[#EDEDED] font-inter font-[500] placeholder:font-inter placeholder:font-[500] placeholder:text-[15px] text-[15px] text-black placeholder:text-[#6B6B6B]'
                                placeholder='Parolni kiriting'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <img
                                src={showPassword ? eyeSlash : eye}
                                alt="Password Visibility"
                                className='absolute transition-all duration-300 hover:scale-[102%] top-1/2 -translate-y-1/2 right-4 cursor-pointer'
                                onClick={handlePasswordVisibility}
                            />
                        </div>
                    </div>

                    <button
                        className='hover:bg-[#628ac3e5] translate-all duration-300 active:scale-[97%] w-[26vw] h-[75px] rounded-[10px] bg-[#264E86E5] font-inter font-[600] text-[20px] leading-[22px] text-white mt-[60px]'
                        onClick={handleLogin}
                    >
                        KIRISH
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Logup
