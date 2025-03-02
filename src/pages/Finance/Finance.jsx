import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cassa from './Action/Cassa'
import Bonus from './Action/Bonuses/Bonus'
import Penalty from './Action/Penalties/Penalty'
import Monthly_payment from './Action/Payment/MonthlyPayment'
import Input_output from './Info/InputOutput/Input_output'
import Revenue from './Info/revenues/Revenue'
import Unpaid_bills from './Info/Unpaid/Unpaid_bills_main'
import Transaction_wihtout_bills from './Info/Transaction_wihtout_bills'
import Transaction from './Report/Transaction'
import Contract from './Report/Contract'
import Balance from './Info/Balans/Balance'

const Finance = () => {
  return (
    <Routes>
      <Route path='/cassa' element={<Cassa />} />
      <Route path='/bonus' element={<Bonus />} />
      <Route path='/penalty' element={<Penalty />} />
      <Route path='/monthly_payment' element={<Monthly_payment />} />
      <Route path='/balance' element={<Balance />} />
      <Route path='/input-output' element={<Input_output />} />
      <Route path='/revenue' element={<Revenue />} />
      <Route path='/unpaid-bills' element={<Unpaid_bills />} />
      <Route path='/transaction-without-bills' element={<Transaction_wihtout_bills />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/contract' element={<Contract />} />
    </Routes>
  )
}

export default Finance