import React from 'react'
<<<<<<< HEAD
import Transaction from './Transaction'
import Payment_with_phone from './Payment_with_phone'
import Notification_icon from './Images/notification.svg'
import eye_icon from './Images/eye.svg'

const Table_payent = () => {
    return (
        <div className='mt-[30px] w-[100%] px-[30px] pt-[20px] h-[calc(120vh-300px)] bg-white'>
            {/* <Transaction />
            <Payment_with_phone /> */}

            <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                    <button className='w-[153px] h-[53px] rounded-[5px] bg-[rgba(13,153,255,1)] font-roboto font-[400] text-[20px] leading-[23.44px] text-white'>Tranzaktsiya</button>
                    <button className='w-[196px] h-[53px] rounded-[5px] font-roboto font-[400] text-[20px] leading-[23.44px] text-black'>Ilova Orqali To'lov</button>
                </div>

                <div>
                    <div className='flex items-center h-full gap-[10px]'>
                        <div className='flex mt-[15px]'>
                            <img src={Notification_icon} />
                            <div className='mt-[-10px] ml-[-8px] flex justify-center items-center w-[36px] h-[16px] bg-[rgba(207,235,255,1)] rounded-[20px] font-roboto font-[500] text-[14px] leading-[16.41px] text-[rgba(14,165,233,1)]'>129</div>
                        </div>
                        <img src={eye_icon} className='mt-[15px]'/>
                    </div>
                </div>
            </div>

=======
import Transaction from './TransactionTable/Transaction'
// import Payment_with_phone from './Payment_with_phone'
import Drawer from './DrawerCassa'

const Table_payent = () => {
    return (
        <div className='mt-[30px]'>
            <Drawer />
            <Transaction />
            {/* <Payment_with_phone /> */}
>>>>>>> 623072be0a025d2c09531cb646cdb1b60836052e
        </div>
    )
}

export default Table_payent