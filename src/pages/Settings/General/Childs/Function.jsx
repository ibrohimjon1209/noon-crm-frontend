import React, { useState, useRef } from 'react';
import './function.css'
import { div } from 'framer-motion/client';
import bottom_icon from '../imgs/bottom.png'
import clear_icon from '../imgs/clear.png'

const Function = () => {
    const [time_zone, time_zone_change] = useState(false)


    const [busy_room, set_busy_room] = useState(false)
    const [functionality, set_functionality] = useState(false)
    const [busy_teacher, set_busy_teacher] = useState(false)
    const [before_proceeding, set_before_proceeding] = useState(false)
    const [creating_assignment, set_creating_assignment] = useState(false)
    const [remove_student, set_remove_student] = useState(false)
    const [finance_teacher, set_finance_teacher] = useState(false)
    const [group_for_school, set_group_for_school] = useState(false)
    const [moving_cases, set_moving_cases] = useState(false)
    const [support_functions, set_support_functions] = useState(false)
    const [bot_attendance, set_bot_attendance] = useState(false)
    const [attendance_assistant_limit, set_attendance_assistant_limit] = useState(false)
    const [attendance_assistant_block, set_attendance_assistant_block] = useState(false)
    const [debtor_limit, set_debtor_limit] = useState(false)
    const [report, set_report] = useState(false)
    const [chat, set_chat] = useState(false)
    const [department, set_department] = useState(false)
    const [worker_exercise, set_worker_exercise] = useState(false)
    const [drive, set_drive] = useState(false)
    const [control, set_control] = useState(false)
    const [finance, set_finance] = useState(false)
    const [group, set_group] = useState(false)
    const [main_page, set_main_page] = useState(false)
    const [marketing, set_marketing] = useState(false)
    const [order, set_order] = useState(false)
    const [student, set_student] = useState(false)
    const [selected_arrived, set_selected_arrived] = useState(false)
    const [workers_salary, set_workers_salary] = useState(false)

    const [InputValue, setInputValue] = useState('')


    const [loading, setLoading] = useState(false);
    const [hovered, setHovered] = useState(false)


    const save_change = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log("O'zgarishlar saqlandi");
        }, 1000);
    };


    const customScrollbar = {
        overflowY: 'auto',
        scrollbarWidth: 'auto',
        scrollbarColor: 'rgba(0,53,95,1) rgba(0, 0, 95, 1)',
    };

    const handle_arrived_change = (option) => {
        set_selected_arrived(option);
    };

    const handle_workers_salary_change = (option) => {
        set_workers_salary(option);
    };

    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")

    const minutesInputRef = useRef(null)

    const handleTimeChange = (value, setter, max, nextInput) => {
        const numericValue = value.replace(/[^0-9]/g, "")

        if (numericValue.length <= 2) {
            setter(numericValue)

            if (Number.parseInt(numericValue) > max) {
                setter(max.toString().padStart(2, "0"))
            }

            if (numericValue.length === 2 && nextInput && nextInput.current) {
                nextInput.current.focus()
            }
        }
    }

    const isHoursInvalid = Number.parseInt(hours) > 23
    const isMinutesInvalid = Number.parseInt(minutes) > 59

    return (
        <div className='w-full mt-[-41px] pt-[41px] bg-transparent overflow-hidden overflow-y-scroll' style={{
            ...customScrollbar,
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0,53,95,1) rgba(255, 255, 255, 1)',
        }}>
            <div className='w-full h-[calc(135vh-144px)] bg-transparent'>
                <div className="mb-[110px] w-[calc(120vw-55vw)] pt-[15px] rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]">
                    <div className='w-full h-auto pb-[30px] pt-[10px] px-[40px] over'>
                        <h1 className="font-inter font-[700] text-[18px] leading-[21.78px] text-[#404040]">
                            Funksionallik
                        </h1>
                        <div className='mt-[10px]'>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Band xona</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_busy_room(!busy_room)}
                                        className={`rounded-[40px] ${busy_room ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${busy_room ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${busy_room ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Davomat funksionalligi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_functionality(!functionality)}
                                        className={`rounded-[40px] ${functionality ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${functionality ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${functionality ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Band o'qituvchi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_busy_teacher(!busy_teacher)}
                                        className={`rounded-[40px] ${busy_teacher ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${busy_teacher ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${busy_teacher ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Davomatdan oldin topshiriq yaratish</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_before_proceeding(!before_proceeding)}
                                        className={`rounded-[40px] ${before_proceeding ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${before_proceeding ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${before_proceeding ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Topshiriq yaratishdan oldin baholash</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_creating_assignment(!creating_assignment)}
                                        className={`rounded-[40px] ${creating_assignment ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${creating_assignment ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${creating_assignment ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Uchta darsga kelmaganlarni avtomatik guruhdan chiqarib yuborish va o'quvchi adminiga avtotask qo'shilib qolishi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_remove_student(!remove_student)}
                                        className={`rounded-[40px] ${remove_student ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${remove_student ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${remove_student ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Moliya bo'limida o'qituvchi bo'yicha filtr</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_finance_teacher(!finance_teacher)}
                                        className={`rounded-[40px] ${finance_teacher ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${finance_teacher ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${finance_teacher ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Maktab uchun guruh</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_group_for_school(!group_for_school)}
                                        className={`rounded-[40px] ${group_for_school ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${group_for_school ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${group_for_school ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Kassalar orasida tasdiqlash orqali ko'chirish</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_moving_cases(!moving_cases)}
                                        className={`rounded-[40px] ${moving_cases ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${moving_cases ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${moving_cases ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Support funksiyasini yoqish </h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_support_functions(!support_functions)}
                                        className={`rounded-[40px] ${support_functions ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${support_functions ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${support_functions ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Botga davomat qilinmadi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_bot_attendance(!bot_attendance)}
                                        className={`rounded-[40px] ${bot_attendance ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${bot_attendance ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${bot_attendance ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Yordamchi o'qituvchini bron qilish blokini yoqish</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_attendance_assistant_limit(!attendance_assistant_limit)}
                                        className={`rounded-[40px] ${attendance_assistant_limit ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${attendance_assistant_limit ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${attendance_assistant_limit ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[68px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Yordamchi o'qituvchini bron qilish blokini yoqish</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_attendance_assistant_block(!attendance_assistant_block)}
                                        className={`rounded-[40px] ${attendance_assistant_block ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${attendance_assistant_block ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${attendance_assistant_block ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[148px] items-start gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>Davomatda hamma keldi turishi</h1>
                                </div>
                                <div className="relative w-[248px] h-[67px]">
                                    <select
                                        value={selected_arrived}
                                        onChange={(e) => handle_arrived_change(e.target.value)}
                                        className="appearance-none w-full h-[67px] px-[30px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                    >
                                        <option className='w' value="Keldi">Keldi</option>
                                        <option value="Kelmadi">Kelmadi</option>
                                    </select>
                                    <svg
                                        className="absolute right-[30px] top-1/2 -translate-y-1/2 w-4 h-3 pointer-events-none text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="1 1 5 5 9 1" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full h-[148px] gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>O'qituvchining ish haqi ko'rsatkichi</h1>
                                </div>
                                <div className="relative w-[248px] h-[67px]">
                                    <select
                                        value={workers_salary}
                                        onChange={(e) => handle_workers_salary_change(e.target.value)}
                                        className="appearance-none w-full h-[67px] px-[30px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                    >
                                        <option value="Foiz">Foiz</option>
                                        <option value="Davomat">Davomat</option>
                                    </select>
                                    <svg
                                        className="absolute right-[30px] top-1/2 -translate-y-1/2 w-4 h-3 pointer-events-none text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="1 1 5 5 9 1" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full h-[148px] gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>Qarzdorlik limiti</h1>
                                </div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div className='debtor_input w-[248px] h-[67px] bg-[rgba(242,238,238,1)]'>
                                        <input
                                            type="text"
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            disabled={!debtor_limit} // Disable input if debtor_limit is false
                                        />
                                    </div>
                                    <div>
                                        <div
                                            onClick={() => set_debtor_limit(!debtor_limit)}
                                            className={`rounded-[40px] ${debtor_limit ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${debtor_limit ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                        >
                                            <div
                                                className={`h-[14px] ${debtor_limit ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <h1 className="font-inter mb-[10px] mt-[34px] font-[700] text-[18px] leading-[21.78px] text-[#404040]">
                                Slidebar
                            </h1>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Hisobot</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_report(!report)}
                                        className={`rounded-[40px] ${report ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${report ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${report ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Chat</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_chat(!chat)}
                                        className={`rounded-[40px] ${chat ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${chat ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${chat ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>O'quv bo'limi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_department(!department)}
                                        className={`rounded-[40px] ${department ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${department ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${department ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Xodimga topshiriq</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_worker_exercise(!worker_exercise)}
                                        className={`rounded-[40px] ${worker_exercise ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${worker_exercise ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${worker_exercise ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Boshqaruv</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_drive(!drive)}
                                        className={`rounded-[40px] ${drive ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${drive ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${drive ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Nazorat</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_control(!control)}
                                        className={`rounded-[40px] ${control ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${control ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${control ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Moliya</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_finance(!finance)}
                                        className={`rounded-[40px] ${finance ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${finance ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${finance ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Guruh</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_group(!group)}
                                        className={`rounded-[40px] ${group ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${group ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${group ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Asosiy saxifa</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_main_page(!main_page)}
                                        className={`rounded-[40px] ${main_page ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${main_page ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${main_page ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Sotuv va marketing</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_marketing(!marketing)}
                                        className={`rounded-[40px] ${marketing ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${marketing ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${marketing ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>Buyurtma</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_order(!order)}
                                        className={`rounded-[40px] ${order ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${order ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${order ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[62.17px] border-b-[1.5px] border-[#D9D9D9] flex justify-between items-center px-[10px]'>
                                <div className='w-[677px]'>
                                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>O'quvchi</h1>
                                </div>
                                <div>
                                    <div
                                        onClick={() => set_student(!student)}
                                        className={`rounded-[40px] ${student ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${student ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                                    >
                                        <div
                                            className={`h-[14px] ${student ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-[20px] mt-[20px]'>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Pul yechish vaqti</h1>
                                    <div className="rounded-[5px] px-[20px] w-full h-[64px] bg-[#F2EEEE]">
                                        <div className="space-y-2 w-full h-full flex items-center">
                                            <div className="flex gap-[2px] items-center h-full w-full font-inter font-[500] text-black text-[18px]">
                                                <input
                                                    type="text"
                                                    id="hours"
                                                    value={hours}
                                                    onChange={(e) => handleTimeChange(e.target.value, setHours, 23, minutesInputRef)}
                                                    className={`w-6 text-center rounded-md ${isHoursInvalid ? "bg-red-100" : "bg-[#F2EEEE]"}`}
                                                    placeholder="00"
                                                    maxLength={2}
                                                />
                                                <span>:</span>
                                                <input
                                                    type="text"
                                                    id="minutes"
                                                    ref={minutesInputRef}
                                                    value={minutes}
                                                    onChange={(e) => handleTimeChange(e.target.value, setMinutes, 59)}
                                                    className={`w-6 text-center rounded-md ${isMinutesInvalid ? "bg-red-100" : "bg-[#F2EEEE]"}`}
                                                    placeholder="00"
                                                    maxLength={2}
                                                />
                                            </div>
                                            <button className='text-[black] text-[20px] font-inter font-[800]' onClick={() => { setHours(''), setMinutes('') }}>✕</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Pro arxivda turish vaqti (Max 31)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <input
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            type="number"
                                            id='pro_archive'
                                            placeholder='Pro arxivda turish vaqti '
                                            onChange={() => {
                                                if (document.getElementById('pro_archive').value > 31 || document.getElementById('pro_archive').value.length > 2) {

                                                }

                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Arxivni ko'rsatish vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <input
                                            type="text"
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            value={10000}
                                        />

                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Pul birligi</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <input
                                            type="text"
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            value={"UZS"}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Vaqt zonasi</h1>
                                    <div className='relative flex justify-between w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <select
                                            value={time_zone}
                                            onChange={(e) => time_zone_change(e.target.value)}
                                            className="appearance-none w-full h-full px-[15px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                        >
                                            <option value="+05:00">+05:00</option>
                                            <option value="+00:00">+00:00</option>
                                            <option value="-05:00">-05:00</option>
                                            <option value="-02:00">-02:00</option>
                                            <option value="+03:00">+03:00</option>
                                            <option value="-01:00">-01:00</option>
                                            <option value="+02:00">+02:00</option>
                                        </select>
                                        <img
                                            src={bottom_icon}
                                            className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                                        />
                                    </div>

                                </div>
                                <div className='w-full flex flex-row justify-between items-center gap-[52px]'>
                                    <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                        <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Dars jadvali boshlanish vaqti</h1>
                                        <div className='relative flex justify-between w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                            <select
                                                value={time_zone}
                                                onChange={(e) => time_zone_change(e.target.value)}
                                                className="appearance-none w-full h-full px-[15px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                            >
                                                <option value="08:00">08:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                            </select>
                                            <img
                                                src={bottom_icon}
                                                className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                        <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Dars jadvali tugash vaqti</h1>
                                        <div className='relative flex justify-between w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                            <select
                                                value={time_zone}
                                                onChange={(e) => time_zone_change(e.target.value)}
                                                className="appearance-none w-full h-full px-[15px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                            >
                                                <option value="08:00">16:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                            </select>
                                            <img
                                                src={bottom_icon}
                                                className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Monitoring yangilanish vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <div className='relative flex justify-between w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                            <select
                                                value={time_zone}
                                                onChange={(e) => time_zone_change(e.target.value)}
                                                className="appearance-none w-full h-full px-[15px] py-2 pr-10 border border-gray-300 rounded-md bg-[#F2EEEE] shadow-sm cursor-pointer font-roboto font-[500] text-[20px] text-black transition-all duration-150 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500"
                                            >
                                                <option value="08:00">21:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                                <option value="00:00">00:00</option>
                                            </select>
                                            <img
                                                src={bottom_icon}
                                                className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center gap-[52px]'>
                                    <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                        <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Minimal ball (Min 1)</h1>
                                        <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                            <input
                                                className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                                type="number"
                                                value={1}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                        <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Maksimal ball (Max 100)</h1>
                                        <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                            <input
                                                className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                                type="number"
                                                value={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Jami xotira cheklovi (GB)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <input
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            type="number"
                                            value={100}
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Bo'sh xotira (GB)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'>
                                        <input
                                            className='font-inter font-[500] text-[18px] text-black pl-[20px] w-full h-full rounded-[5px] bg-[rgba(242,238,238,1)]'
                                            type="number"
                                            value={99.62}
                                        />
                                    </div>
                                </div>
                                <div className="absolute bg-black">
                                    <button
                                        onClick={save_change}
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                        className={`fixed top-[1200px] left-[1710px] overflow-hidden w-[142px] h-[63px] rounded-md bg-[rgba(13,153,255,1)] transition-all duration-200 active:scale-95 text-white text-lg border-none cursor-pointer z-50 ${loading ? 'opacity-50' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="animate-spin rounded-full border-4 border-t-transparent border-white w-8 h-8 mx-auto"></div>
                                        ) : (
                                            "Saqlash"
                                        )}
                                    </button>
                                    <div className={`absolute top-[-40px] opacity-30 rotate-[30deg] shadow-2xl shadow-black transform transition-all duration-300 ${!loading && hovered ? 'opacity-100 translate-x-40' : 'opacity-0 -translate-x-full'}`}>
                                        <div className="bg-white w-[40px] h-[150px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-[1px]'></div>
            </div>
        </div>
    )
}

export default Function;