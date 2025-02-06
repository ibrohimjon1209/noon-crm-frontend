import React, { useState, useRef } from "react";

const Discount_main = () => {
    const [is_bonus_active, set_is_bonus_active] = useState(false);
    const [width_2_group, set_width_width_2_group] = useState(50);
    const [value_2_group, set_value_2_group] = useState(10000);
    const inputRef = useRef(null);

    const handle_2_group_change = (e) => {
        const value = e.target.value;
        const newWidth_width_2_group = Math.max(50, value.length * 9);
        set_width_width_2_group(newWidth_width_2_group);
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
        <div className="flex items-center justify-between gap-[27px]">
            <h1 className="font-roboto font-[300] text-[18px] leading-[21.09px] text-black">
            Ikkita guruhga kelsa chegirma miqdori
            </h1>
            <div className="flex flex-row items-center gap-[2px]">
                <div>
                    <input
                    ref={inputRef}
                    type="number"
                    className="h-[21px] text-black border-[#0000004D] bg-[rgba(255,255,255,1)]"
                    style={{ width: `${width_2_group}px` }}
                    value={value_2_group}
                    onChange={handle_2_group_change}
                    />
                </div>
                <h1 className="font-roboto font-[400] text-[18px] leading-[21.09px] text-black">
                    UZS
                </h1>
            </div>
        </div>
    </div>
    );
};

export default Discount_main;