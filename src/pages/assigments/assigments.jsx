import React, { useState } from "react";
import red_phone_icon from "./images/red_phone_icon.png";
import green_phone_icon from "./images/green_phone_icon.png";
import filter_icon from "./images/filter_icon.png";
import arrow_down_icon from "./images/arrow_down_icon.png";
import arrow_down_black_icon from "./images/arrow_down_black_icon.png";
import calendar_icon from "./images/calendar_icon.png";
import add_icon from "./images/add_icon.png";
import './style.css'

const assigments = [
    {
        name: 'Farangiz Tursunova',
        phone: '+998 90 762 92 82',
        status: 'gone',
        date: "17.02.2025",
        time: '5:50',
        description: 'To’lov so’rashim kerak'
    },
    {
        name: 'Hamidjon Tursunov',
        phone: '+998 90 762 92 82',
        status: 'gone',
        date: "17.02.2025",
        time: '19:39',
        description: 'To’lov so’rashim'
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov'
    },
    {
        name: 'Farangiz Tursunova',
        phone: '+998 90 762 92 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '5:50',
        description: 'To’lov so’rashim kerak'
    },
    {
        name: 'Hamidjon Tursunov',
        phone: '+998 90 762 92 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '19:39',
        description: 'To’lov so’rashim'
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov'
    },
    {
        name: 'Farangiz Tursunova',
        phone: '+998 90 762 92 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '5:50',
        description: 'To’lov so’rashim kerak'
    },
    {
        name: 'Hamidjon Tursunov',
        phone: '+998 90 762 92 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '19:39',
        description: 'To’lov so’rashim'
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov'
    },
    {
        name: 'Farangiz Tursunova',
        phone: '+998 90 762 92 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '5:50',
        description: 'To’lov so’rashim kerak'
    },
    {
        name: 'Hamidjon Tursunov',
        phone: '+998 90 762 92 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '19:39',
        description: 'To’lov so’rashim'
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'everyday',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'gone',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'monthly',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'feature',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'feature',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'feature',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
    {
        name: 'Sardor Tursunov',
        phone: '+998 90 948 31 82',
        status: 'feature',
        date: "17.02.2025",
        time: '11:10',
        description: 'To’lov '
    },
]

const gone_count = () => {
    let count = 0;
    for (let i = 0; i < assigments.length; i++) {
        if (assigments[i].status === 'gone') {
            count++;
        }
    }
    return count;
}

const everyday_count = () => {
    let count = 0;
    for (let i = 0; i < assigments.length; i++) {
        if (assigments[i].status === 'everyday') {
            count++;
        }
    }
    return count;
}

const monthly_count = () => {
    let count = 0;
    for (let i = 0; i < assigments.length; i++) {
        if (assigments[i].status === 'monthly') {
            count++;
        }
    }
    return count;
}

const feature_count = () => {
    let count = 0;
    for (let i = 0; i < assigments.length; i++) {
        if (assigments[i].status === 'feature') {
            count++;
        }
    }
    return count;
}

const Assigments = () => {

    const [is_filter_open, set_is_filter_open] = useState(false);

    return (
    <>
    <div className={`w-full ${ is_filter_open ? 'h-[120%]' : `h-[110%]`} flex flex-col items-center mt-[15px]`}>
        <div className="w-[100%] px-[2%] flex flex-row justify-between items-baseline">
            <h1 className="font-[roboto] font-[100] text-[20px] leading-[23.44px] text-[#264E86]">Topshiriqlar</h1>
            <div className="flex flex-row gap-[10px]">
            <div 
                className="w-[177px] h-[55px] bg-[#0D99FF] rounded-[5px] flex items-center justify-between px-[15px] cursor-pointer"
                onClick={
                    () => {
                        set_is_filter_open(!is_filter_open);
                    }
                }
            >
                <img src={filter_icon} alt="" className="w-[31px] h-[31px] object-contain"/>
                <p className="font-[roboto] font-[600] text-[20px] leading-[23.44px] text-white">Filtr</p>
                <img src={arrow_down_icon} className={is_filter_open ? "w-[31px] h-[31px] object-contain -rotate-180 duration-[0.3s]" : "w-[31px] h-[31px] object-contain duration-[0.3s]"} alt="" />
            </div>
            <div className="w-[177px] h-[55px] bg-[#0D99FF] rounded-[5px] flex items-center justify-start pl-[15px] gap-[20px] cursor-pointer">
                <img src={add_icon} alt="" />
                <p className="font-[roboto] font-[600] text-[20px] leading-[23.44px] text-white">Qo’shish</p>
            </div>
            </div>
        </div>
        <div 
        className={`flex flex-row gap-[10px] pl-[130px] transition-all duration-[300ms] ease-out ${
            is_filter_open ? "translate-y-0 h-auto pt-[25px] -mb-[5px]" : "h-0 overflow-hidden"
        }`}
        >
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[28px]">
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    Mas'ul shaxs
                </p>
                <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
            </div>
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[28px]">
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    O’quvchi
                </p>
                <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
            </div>
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[28px]">
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    Topshiriq turi
                </p>
                <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
            </div>
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[25px]">
                <img src={calendar_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    Oraliqni tanlang
                </p>
            </div>
            <div className="w-[240px] h-[55px] bg-white rounded-[5px] flex items-center justify-between px-[28px]">
                <p className="font-roboto font-[500] text-[19px] leading-[23.44px] text-black">
                    Guruh
                </p>
                <img src={arrow_down_black_icon} className="w-[31px] h-[31px] object-contain cursor-pointer" alt="" />
            </div>
        </div>
    <div className="w-auto h-[94%] flex flex-col ml-[32px] mt-[20px] mr-[323px] gap-[25px] overflow-y-hidden">
        <div className="w-[100%] flex flex-row gap-[15px]">
        <div className="w-full flex flex-row gap-4">
            <div className="w-full h-full border-t-4 border-[#FE3D3D] flex flex-col items-center pt-6 gap-3">
                <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">O’tib ketgan</p>
                <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#FE3D3D]">{gone_count()}</p>
                    <div className="w-full h-[37%] bg-transparent flex flex-col gap-4 overflow-y-scroll hide-scrollbar">
                    {assigments.map((item, index) => (
                        item.status === 'gone' && (
                            <div
                            key={index}
                            className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                            >
                                <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                                    {item.name}
                                </p>
                            <div className="flex flex-row gap-3 items-center">
                                <img
                                src={red_phone_icon}
                                alt="phone"
                                className="w-5 h-5 object-contain"
                                />
                                <p className="text-[#FE3D3D] text-sm leading-5 font-roboto font-medium">
                                    {item.phone}
                                </p>
                            </div>
                            <p className="text-[#FE3D3D] text-xs leading-4 font-roboto font-medium">
                                {item.date} | {item.time}
                            </p>
                            <div className="flex flex-col gap-2">
                            <p className="text-black text-xs leading-4 font-roboto font-medium">
                                Izoh :
                            </p>
                            <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                                {item.description}
                            </p>
                            </div>
                        </div>
                        )
                    ))}
                    </div>
                </div>
            </div>
            <div className="w-[100%] border-t-[3px] border-[#3DFE5D] flex flex-col items-center pt-[25px] gap-3">
                <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Bugun</p>
                <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#3DFE5D]">{everyday_count()}</p>
                <div className="w-full h-[37%] bg-transparent flex flex-col gap-4 overflow-y-scroll hide-scrollbar">
                    {assigments.map((item, index) => (
                        item.status === 'everyday' && (
                            <div
                            key={index}
                            className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                            >
                                <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                                    {item.name}
                                </p>
                            <div className="flex flex-row gap-3 items-center">
                                <img
                                src={green_phone_icon}
                                alt="phone"
                                className="w-5 h-5 object-contain"
                                />
                                <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                                    {item.phone}
                                </p>
                            </div>
                            <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                                {item.date} | {item.time}
                            </p>
                            <div className="flex flex-col gap-2">
                            <p className="text-black text-xs leading-4 font-roboto font-medium">
                                Izoh :
                            </p>
                            <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                                {item.description}
                            </p>
                            </div>
                        </div>
                        )
                    ))}
                    </div>
            </div>
            <div className="w-[100%] border-t-[3px] border-[#A1A1A1] flex flex-col items-center pt-[25px] gap-3">
                <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Oylik</p>
                <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#A1A1A1]">{monthly_count()}</p>
                <div className="w-full h-[37%] bg-transparent flex flex-col gap-4 overflow-y-scroll hide-scrollbar">
                    {assigments.map((item, index) => (
                        item.status === 'monthly' && (
                            <div
                            key={index}
                            className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                            >
                                <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                                    {item.name}
                                </p>
                            <div className="flex flex-row gap-3 items-center">
                                <img
                                src={green_phone_icon}
                                alt="phone"
                                className="w-5 h-5 object-contain"
                                />
                                <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                                    {item.phone}
                                </p>
                            </div>
                            <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                                {item.date} | {item.time}
                            </p>
                            <div className="flex flex-col gap-2">
                            <p className="text-black text-xs leading-4 font-roboto font-medium">
                                Izoh :
                            </p>
                            <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                                {item.description}
                            </p>
                            </div>
                        </div>
                        )
                    ))}
                    </div>
            </div>
            <div className="w-[100%] border-t-[3px] border-[#A1A1A1] flex flex-col items-center pt-[25px] gap-3">
                <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Kelajak</p>
                <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#A1A1A1]">{feature_count()}</p>
                <div className="w-full h-[37%] bg-transparent flex flex-col gap-4 overflow-y-scroll hide-scrollbar">
                    {assigments.map((item, index) => (
                        item.status === 'feature' && (
                            <div
                            key={index}
                            className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                            >
                                <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                                    {item.name}
                                </p>
                            <div className="flex flex-row gap-3 items-center">
                                <img
                                src={green_phone_icon}
                                alt="phone"
                                className="w-5 h-5 object-contain"
                                />
                                <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                                    {item.phone}
                                </p>
                            </div>
                            <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                                {item.date} | {item.time}
                            </p>
                            <div className="flex flex-col gap-2">
                            <p className="text-black text-xs leading-4 font-roboto font-medium">
                                Izoh :
                            </p>
                            <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                                {item.description}
                            </p>
                            </div>
                        </div>
                        )
                    ))}
                    </div>
            </div>
        </div>
    </div>
    </div>
    </>
    );
};

export default Assigments;