import React from 'react'
import Transaction from './Transaction'
import Payment_with_phone from './Payment_with_phone'
import Drawer from './DrawerCassa'

const Table_payent = () => {
    return (
        <div className='mt-[30px]'>
            <Drawer />
            <Transaction />
            <Payment_with_phone />
        </div>
    )   
}

export default Table_payent