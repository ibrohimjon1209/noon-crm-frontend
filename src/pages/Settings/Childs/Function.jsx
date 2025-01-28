import React, { useState } from 'react';

const Function = () => {
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

    return (
        <div className=''>  
            <div className="w-[calc(100vw-55vw)] pt-[15px] rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]">
                <div className="w-full h-full">
                    <div className='w-full h-auto  pb-[30px] pt-[10px] px-[40px]'>
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
                            <div className='w-full h-[148px] gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>Davomatda hamma keldi turishi</h1>
                                </div>
                                <div className='w-[248px] h-[67px] bg-[rgba(242,238,238,1)] '>
                                </div>
                            </div>
                            <div className='w-full h-[148px] gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>O'qituvchining ish haqi ko'rsatkichi</h1>
                                </div>
                                <div className='w-[248px] h-[67px] bg-[rgba(242,238,238,1)] '>
                                </div>
                            </div>
                            <div className='w-full h-[148px] gap-[20px] border-b-[1.5px] flex flex-col px-[10px]'>
                                <div className='w-[677px] mt-[20px]'>
                                    <h1 className='text-[18px] font-[500] font-[inter] text-[#404040]'>Qarzdorlik limiti</h1>
                                </div>
                                <div className='flex flex-row items-center justify-between'>
                                <div className='w-[248px] h-[67px] bg-[rgba(242,238,238,1)] '>
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
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Pro arxivda turish vaqti (Max 31)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Arxivni ko'rsatish vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Pul birligi</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Vaqt zonasi</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center gap-[52px]'>
                                <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Dars jadvali boshlanish vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Dars jadvali tugash vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Monitoring yangilanish vaqti</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center gap-[52px]'>
                                <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Minimal ball (Min 1)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-1/2 flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Maksimal ball (Max 100)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Jami xotira cheklovi (GB)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                                    <h1 className='text-[#404040] font-inter font-[500] text-[18px] leading-[21.78px]'>Bo'sh xotira (GB)</h1>
                                    <div className='w-full h-[64px] bg-[rgba(242,238,238,1)] rounded-[5px]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Function;