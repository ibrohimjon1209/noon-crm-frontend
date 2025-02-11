import React, { useState } from 'react';

const Lesson = () => {
    const [formState, setFormState] = useState({
        subcourse: false,
        course_days: false,
        course_time: false,
        teacher: false,
        group: false,
        first_class_absent_date: false,
        comment: false,
    });

    const handleToggle = (field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const ToggleSwitch = ({ label, isOn, handleToggle }) => {
        return (
            <div className='mt-[20px] w-full px-[10px] h-[48px] border-b-[1.5px] border-[#D9D9D9] flex justify-between'>
                <div className='w-[calc(60vw-180px)] flex justify-start'>
                    <h1 className='font-inter font-[500] text-[18px] leading-[21.78px] text-[#404040]'>{label}</h1>
                </div>
                <div>
                    <div
                        onClick={handleToggle}
                        className={`rounded-[40px] ${isOn ? "bg-[#264E86]" : "bg-white"} w-[38px] flex ${isOn ? "justify-end" : "justify-start"} duration-[0.1s] ease-out cursor-pointer items-center px-[2px] border-[#264E86] border-[4px] h-[24px]`}
                    >
                        <div
                            className={`h-[14px] ${isOn ? "bg-white" : "bg-[#264E86]"} w-[14px] rounded-[50%] duration-[0.1s] ease-out`}
                        ></div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col mt-[50px]  w-[calc(75vw-200px)] h-[calc(135vh-180px)] bg-white shadow-lg rounded-t-[15px] overflow-auto">
            <div className="px-[40px]">
                <ToggleSwitch
                    label="Subkurs"
                    isOn={formState.subcourse}
                    handleToggle={() => handleToggle('subcourse')}
                />
                <ToggleSwitch
                    label="Kurs kunlari"
                    isOn={formState.course_days}
                    handleToggle={() => handleToggle('course_days')}
                />
                <ToggleSwitch
                    label="Kurs vaqti"
                    isOn={formState.course_time}
                    handleToggle={() => handleToggle('course_time')}
                />
                <ToggleSwitch
                    label="O'qituvchi"
                    isOn={formState.teacher}
                    handleToggle={() => handleToggle('teacher')}
                />
                <ToggleSwitch
                    label="Guruh"
                    isOn={formState.group}
                    handleToggle={() => handleToggle('group')}
                />
                <ToggleSwitch
                    label="Birinchi darsga kelmagan sanasi"
                    isOn={formState.first_class_absent_date}
                    handleToggle={() => handleToggle('first_class_absent_date')}
                />
                <ToggleSwitch
                    label="Izoh"
                    isOn={formState.comment}
                    handleToggle={() => handleToggle('comment')}
                />
            </div>

            <div className='w-full h-[120px] items-end pr-[40px] flex justify-end'>
                <button className='w-[142px] h-[63px] bg-[#0D99FF] font-roboto font-[400] text-[20px] text-white rounded-[5px]'>Saqlash</button>
            </div>
        </div>
    );
};

export default Lesson;
