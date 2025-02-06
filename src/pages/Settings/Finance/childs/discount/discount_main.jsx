import React, { useState, useRef } from "react";

const Discount_main = () => {
    const [is_bonus_active, set_is_bonus_active] = useState(false);
    const [width_2_group, set_width_width_2_group] = useState(50);
    const [value_2_group, set_value_2_group] = useState(10000);
    const [width_3_group, set_width_width_3_group] = useState(50);
    const [value_3_group, set_value_3_group] = useState(20000);
    const [width_4_group, set_width_width_4_group] = useState(50);
    const [value_4_group, set_value_4_group] = useState(30000);
    const inputRef = useRef(null);

    const handle_2_group_change = (e) => {
        const value = e.target.value;
            if (value.length <= 13) set_value_2_group(value);
        const new_width_width_2_group = Math.max(50, value.length * 9);
        set_width_width_2_group(new_width_width_2_group);
    };

    const handle_3_group_change = (e) => {
        const value = e.target.value;
            if (value.length <= 13) set_value_3_group(value);
        const new_width_width_3_group = Math.max(50, value.length * 9);
        set_width_width_3_group(new_width_width_3_group);
    };

    const handle_4_group_change = (e) => {
        const value = e.target.value;
            if (value.length <= 13) set_value_4_group(value);
        const new_width_width_4_group = Math.max(50, value.length * 9);
        set_width_width_4_group(new_width_width_4_group);
    };

    return (
    <div className="w-[84vw] h-[calc(135vh-320px)] shadow-lg rounded-t-[15px] gap-[40px] bg-white flex flex-col pt-[50px] px-[40px]">
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
        <div className={`${is_bonus_active ? 'flex' : 'hidden'} items-center justify-center`}>Bo'nuslar yo'q</div>
        <div className={`${is_bonus_active ? 'hidden' : 'flex'} flex-col gap-[22px]`}>
        <div className="flex items-center justify-between">
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            Ikkita guruhga kelsa chegirma miqdori
            </h1>
            <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="flex flex-row items-center">
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[20px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${width_2_group}px` }}
                    value={value_2_group}
                    placeholder="0"
                    onChange={handle_2_group_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
        <hr className="border-[#D9D9D9]"/>
        <div className="flex items-center justify-between">
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            Uchta guruhga kelsa chegirma miqdori
            </h1>
            <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="flex flex-row items-center">
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[20px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${width_3_group}px` }}
                    value={value_3_group}
                    placeholder="0"
                    onChange={handle_3_group_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
        <hr className="border-[#D9D9D9]"/>
        <div className="flex items-center justify-between">
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            To’rtta guruhga kelsa chegirma miqdori
            </h1>
            <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="flex flex-row items-center">
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[20px] text-[18px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${width_4_group}px` }}
                    value={value_4_group}
                    placeholder="0"
                    onChange={handle_4_group_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Discount_main;