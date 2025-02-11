import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const ToggleSwitch = ({ label, isOn, handleToggle }) => {
    return (
        <div className='mt-[20px] w-full px-[10px] h-[48px] border-b-[1.5px] border-[#D9D9D9] flex justify-between'>
            <div className='w-[677px]'>
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

const Student = () => {
    const [formState, setFormState] = useState({
        comment: false,
        surname: true,
        phone_number: false,
        email: false,
        image: false,
        category: false,
        birth_date: false,
        questionnaire: false,
        language: false,
        payment_date: false,
        address: false,
        target_university: false,
        organization: false,
        father_name: false,
        father_phone: false,
        father_email: false,
        mother_name: false,
        mother_phone: false,
        mother_email: false,
    });

    const handleToggle = (field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className=''>
            <div className="px-[40px]">
                <ToggleSwitch
                    label="Izoh"
                    isOn={formState.comment}
                    handleToggle={() => handleToggle('comment')}
                />
                <ToggleSwitch
                    label="Familiya"
                    isOn={formState.surname}
                    handleToggle={() => handleToggle('surname')}
                />
                <ToggleSwitch
                    label="Telefon raqam"
                    isOn={formState.phone_number}
                    handleToggle={() => handleToggle('phone_number')}
                />
                <ToggleSwitch
                    label="Elektron pochta"
                    isOn={formState.email}
                    handleToggle={() => handleToggle('email')}
                />
                <ToggleSwitch
                    label="Rasm"
                    isOn={formState.image}
                    handleToggle={() => handleToggle('image')}
                />
                <ToggleSwitch
                    label="Kategoriya"
                    isOn={formState.category}
                    handleToggle={() => handleToggle('category')}
                />
                <ToggleSwitch
                    label="Tug'ilgan sana"
                    isOn={formState.birth_date}
                    handleToggle={() => handleToggle('birth_date')}
                />
                <ToggleSwitch
                    label="So'rovnoma"
                    isOn={formState.questionnaire}
                    handleToggle={() => handleToggle('questionnaire')}
                />
                <ToggleSwitch
                    label="Til"
                    isOn={formState.language}
                    handleToggle={() => handleToggle('language')}
                />
                <ToggleSwitch
                    label="To'lov sanasi"
                    isOn={formState.payment_date}
                    handleToggle={() => handleToggle('payment_date')}
                />
                <ToggleSwitch
                    label="Uy manzili"
                    isOn={formState.address}
                    handleToggle={() => handleToggle('address')}
                />
                <ToggleSwitch
                    label="Maqsad qilgan universitet"
                    isOn={formState.target_university}
                    handleToggle={() => handleToggle('target_university')}
                />
                <ToggleSwitch
                    label="Tashkilot"
                    isOn={formState.organization}
                    handleToggle={() => handleToggle('organization')}
                />
                <ToggleSwitch
                    label="Otasining ismi"
                    isOn={formState.father_name}
                    handleToggle={() => handleToggle('father_name')}
                />
                <ToggleSwitch
                    label="Otasining telefon raqami"
                    isOn={formState.father_phone}
                    handleToggle={() => handleToggle('father_phone')}
                />
                <ToggleSwitch
                    label="Otasining elektron pochtasi"
                    isOn={formState.father_email}
                    handleToggle={() => handleToggle('father_email')}
                />
                <ToggleSwitch
                    label="Onasining ismi"
                    isOn={formState.mother_name}
                    handleToggle={() => handleToggle('mother_name')}
                />
                <ToggleSwitch
                    label="Onasining telefon raqami"
                    isOn={formState.mother_phone}
                    handleToggle={() => handleToggle('mother_phone')}
                />
                <ToggleSwitch
                    label="Onasining elektron pochtasi"
                    isOn={formState.mother_email}
                    handleToggle={() => handleToggle('mother_email')}
                />




            </div>

            <div className='w-full h-[120px] items-end pr-[40px] flex justify-end'>
                <button className='w-[142px] h-[63px] bg-[#0D99FF] font-roboto font-[400] text-[20px] text-white rounded-[5px]'>Saqlash</button>
            </div>
        </div>
    );
};

export default Student;
