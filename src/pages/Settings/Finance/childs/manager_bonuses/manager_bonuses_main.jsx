import React, { useState, useRef } from "react";

const Manager_bonuses_main = () => {
    const [is_bonus_active, set_is_bonus_active] = useState(true);
    const [is_num_active, set_is_num_active] = useState(true)
    const [proc, set_proc] = useState(10)
    const [num_value, set_num_value] = useState(100);

    const handle_payment_change = (e) => {
        const value = e.target.value;
        if (value.length <= 3) set_proc(value);
        if (value >= 100) set_proc(100)
    };

    const handle_num_change = (e) => {
        const value = e.target.value;
        if (value.length <= 13) set_num_value(value);
    };

    return (
        <div className="w-[84vw] h-[calc(135vh-320px)] shadow-lg rounded-t-[15px] overflow-y-auto gap-[40px] bg-white flex flex-col pt-[30px] px-[40px]">
            <div className="flex items-center justify-between gap-[27px]">
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    Bonus turlari
                </h1>
                <div className="flex flex-row items-center gap-[20px]">
                    <div
                        onClick={() => set_is_bonus_active(!is_bonus_active)}
                        className={`rounded-[40px] ${is_bonus_active ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${is_bonus_active ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                    >
                        <div
                            className={`h-[14px] ${is_bonus_active ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[30px]">
                <div className={`${is_bonus_active ? 'flex' : 'hidden'} flex-col gap-[30px]`}>
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
                            Buyurtma qo’shgani uchun bonus miqdori
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-[2px]">
                            <div className="flex flex-row items-center">
                                <input
                                    type="number"
                                    className="h-[20px] text-end w-[30px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                                    value={proc}
                                    placeholder="0"
                                    onChange={handle_payment_change}
                                />
                            </div>
                            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                                %
                            </h1>
                        </div>
                    </div>
                    <hr className="border-[#D9D9D9]" />
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
                            Balansi qarzdorlar foizda
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-[2px]">
                            <div className="flex flex-row items-center">
                                {/* <input
                    type="number"
                    className="h-[20px] text-end w-[30px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    value={num_value}
                    placeholder="0"
                    onChange={handle_num_change}
                    /> */}
                                <h1 className="text-[18px] text-black">10</h1>
                            </div>
                            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                                %
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={`${is_bonus_active ? 'hidden' : 'flex'} items-center justify-center`}>Foizlar yo'q</div>
                <hr className="border-[#D9D9D9]" />
            </div>
            <div className="flex items-center justify-between gap-[27px]">
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    Soniga
                </h1>
                <div className="flex flex-row items-center gap-[20px]">
                    <div
                        onClick={() => set_is_num_active(!is_num_active)}
                        className={`rounded-[40px] ${is_num_active ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${is_num_active ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                    >
                        <div
                            className={`h-[14px] ${is_num_active ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[30px]">
                <div className={`${is_num_active ? 'flex' : 'hidden'} flex-col gap-[30px]`}>
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
                            Balansida puli borlar soniga
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-[2px]">
                            <div className="flex flex-row items-center">
                                <input
                                    type="number"
                                    className="h-[20px] text-end w-[30px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                                    value={num_value}
                                    placeholder="0"
                                    onChange={handle_num_change}
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#D9D9D9]" />
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
                            Balansi qarzdorlar soniga
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-[2px]">
                            <div className="flex flex-row items-center">
                                {/* <input
                    type="number"
                    className="h-[20px] text-end w-[30px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    value={num_value}
                    placeholder="0"
                    onChange={handle_payment_change}
                    /> */}
                                <h1 className="text-[18px] text-black">10</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${is_num_active ? 'hidden' : 'flex'} items-center justify-center`}>Soniga yo'q</div>
                <hr className="border-[#D9D9D9]" />
            </div>
        </div>
    );
};

export default Manager_bonuses_main;
