import React, { useState } from 'react';
import pic from './Images/login.png';
import logo from './Images/logo.png';
import eye from './Images/eye.png';
import eyeSlash from './Images/eye.png'; // Ensure you have a different image for eye slash
import axios from 'axios';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://nightmafia.uz/account/login/', {
                phone_number: phoneNumber,
                password: password
            });
            console.log(response.data);
            localStorage.setItem('token', response.data.token); // Assuming the token is returned
            window.location.href = '/';
        } catch (error) {
            if (error.response) {
                console.error('Server error:', error.response.data);
                alert('Error: ' + error.response.data.message);
            } else if (error.request) {
                console.error('Request error:', error.request);
                alert('Error: Request failed');
            } else {
                console.error('Other error:', error.message);
                alert('Error: ' + error.message);
            }
        }
    };

    return (
        <div className='flex'>
            <div className='hidden sm:block w-[50%] h-[calc(132.5vh)] bg-[#FFFFFF]'>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={pic} alt="Login Illustration" />
                </div>
            </div>
            <div className='w-[100%] sm:w-[50%] h-[132.5vh] bg-[#D9D9D9] flex flex-col'>
                <div className='flex justify-end mt-[82px] pr-[82px]'>
                    <img src={logo} alt="Logo" />
                </div>

                <div className='flex justify-center'>
                    <h1 className='font-inter font-[600] text-[32px] leading-[22px] text-[#000000] mt-[124px]'>Login</h1>
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
    );
};

export default Login;
