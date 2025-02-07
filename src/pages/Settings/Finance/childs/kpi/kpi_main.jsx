import React, { useState, useRef } from "react";

const KPI_main = () => {
    const [is_bonus_active, set_is_bonus_active] = useState(false);
    const [is_penalty_active, set_is_penalty_active] = useState(false)
    const [bonus_type, set_width_bonus_type] = useState(50);
    const [bonus_type_value, set_bonus_type_value] = useState(15000);
    const [penalty, set_width_penalty] = useState(50);
    const [value_penalty, set_value_penalty] = useState(10000);
    const inputRef = useRef(null);

    const handle_bonus_type_change = (e) => {
        const value = e.target.value;
            if (value.length <= 13) set_bonus_type_value(value);
        const new_width_bonus_type = Math.max(50, value.length * 9);
        set_width_bonus_type(new_width_bonus_type);
    };

    const handle_penalty_change = (e) => {
        const value = e.target.value;
            if (value.length <= 13) set_value_penalty(value);
        const new_width_penalty = Math.max(50, value.length * 9);
        set_width_penalty(new_width_penalty);
    };

    return (
    <div className="w-[84vw] h-[calc(135vh-320px)] shadow-lg rounded-t-[15px] gap-[40px] bg-white flex flex-col pt-[30px] px-[40px]">
        <div className="flex items-center justify-between gap-[27px]">
            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                Bonus turlari
            </h1>
            <div className="flex flex-row items-center gap-[20px]">
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    Bonusni o’chirish
                </h1>
                <div>
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
        </div>
        <div className="flex flex-col gap-[22px]">
        <div className={`${is_bonus_active ? 'hidden' : 'flex'} items-center justify-between`}>
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            Birinchi to’lovi uchun bonus miqdori
            </h1>
            <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="flex flex-row items-center">
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[20px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${bonus_type}px` }}
                    value={bonus_type_value}
                    placeholder="0"
                    onChange={handle_bonus_type_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
        <div className={`${is_bonus_active ? 'flex' : 'hidden'} items-center justify-center`}>Bo'nuslar yo'q</div>
        <hr className="border-[#D9D9D9]"/>
        </div>
        <div className="flex items-center justify-between gap-[27px]">
            <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
            Jarima turlari
            </h1>
            <div className="flex flex-row items-center gap-[20px]">
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                Jarimalarni o’chirish
                </h1>
                <div>
                    <div
                        onClick={() => set_is_penalty_active(!is_penalty_active)}
                        className={`rounded-[40px] ${is_penalty_active ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${is_penalty_active ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                    >
                        <div
                        className={`h-[14px] ${is_penalty_active ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
        <div className={`${is_penalty_active ? 'hidden' : 'flex'} items-center justify-between`}>
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            To’lov qilmasdan ketganligi uchun jarima
            </h1>
            <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="flex flex-row items-center">
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[20px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${penalty}px` }}
                    value={value_penalty}
                    placeholder="0"
                    onChange={handle_penalty_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
        <div className={`${is_penalty_active ? 'flex' : 'hidden'} items-center justify-center`}>Jarimalar yo'q</div>
        <hr className="border-[#D9D9D9] mt-[20px]"/>
        </div>
    </div>
    );
};

export default KPI_main;