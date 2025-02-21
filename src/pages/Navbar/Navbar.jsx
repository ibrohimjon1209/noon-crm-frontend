import React, { useState } from 'react';
import Navbar_general from './Navbar_general';
import close from './Image/close.png'; // Adjust the path as needed
import logo from './Image/black/logo vector.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    const toggleNavbar = () => {
        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => {
                setShouldRender(false);
            }, 300);
        } else {
            setShouldRender(true);
            setTimeout(() => {
                setIsOpen(true);
            }, 10); // Ensuring reflow before applying class
        }
    };

    return (
        <div className="relative">
            <div className={` transition-all duration-300 ease-in-out ${isOpen ? 'w-[230px] scale-100' : 'w-[30px]  absolute'}`}>
                <img
                    src={close}
                    alt={isOpen ? 'Close Navbar' : 'Open Navbar'}
                    onClick={toggleNavbar}
                    className={`z-50 absolute hover:scale-110 transition-transform duration-300 top-[50px] ${isOpen ? '-right-[15px]' : 'right-[0px]'} cursor-pointer w-[30px] h-[30px] border-[1px] rounded-[10px] border-black`}
                />
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'w-[230px] scale-100' : 'w-[30px] scale-75 opacity-0 absolute'}`}>
                    {shouldRender && <Navbar_general />}
                </div>
            </div>

            <div className='fixed left-[40px] pr-[30px]'>
                <div className=' '>
                    <img
                        src={logo}
                        alt="logo"
                        className="scale-[75%] w-[67px] h-[67px] object-contain cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
