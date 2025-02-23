import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Balance from './childs/balance/Balance'
import Bonus from './childs/bonus/Bonus'
import CashRegister from './childs/cashRegister/CashRegister'
import Contract from './childs/contract/Contract'
import GroupTransaction from './childs/groupTransaction/GroupTransaction'
import IncomePlan from './childs/incomePlan/IncomePlan'
import MonthlyPayment from './childs/monthlyPayment/MonthlyPayment'
import Penalty from './childs/penalty/Penalty'
import TypeTransaction from './childs/typeTransaction/TypeTransaction'
import UnpaidPupil from './childs/unpaidPupil/UnpaidPupil'
import Cassa from './childs/cassa/Cassa'

const Finance = () => {
  return (
    <Routes>
      <Route path='balance' element={<Balance />} />
      <Route path='bonus' element={<Bonus />} />
      <Route path='cash-register' element={<CashRegister />} />
      <Route path='contract' element={<Contract />} />
      <Route path='group-transaction' element={<GroupTransaction />} />
      <Route path='income-plan' element={<IncomePlan />} />
      <Route path='monthly-payment' element={<MonthlyPayment />} />
      <Route path='penalty' element={<Penalty />} />
      <Route path='type-transaction' element={<TypeTransaction />} />
      <Route path='unpaid-pupil' element={<UnpaidPupil />} />
      <Route path='cassa' element={<Cassa />} />
    </Routes>
  )
}

export default Finance