import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav_finance from './nav_finance'
import Sponsors from './childs/sponsors/sponsors_main'
import Third_human from './childs/third_human/third_human_main'
import Payment_type from './childs/payment_type/payment_type_main'
import Manager_bonuses from './childs/manager_bonuses/manager_bonuses_main'
import Finance_bonus from './childs/finance_bonus/finance_bonus_main'
import KPI from './childs/kpi/kpi_main'
import Monthly_payment from './childs/monthly_payment/monthly_payment_main'
import Discount from './childs/discount/discount_main'

const Finance_settings = () => {
  return (
    <div className='pt-[40px] pl-[42px] flex flex-row'>
      <div className='flex gap-[30px]'>
      <Nav_finance />
      <div>
      <Routes>
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/third_human" element={<Third_human />} />
        <Route path="/payment_type" element={<Payment_type />} />
        <Route path="/manager_bonuses" element={<Manager_bonuses />} />
        <Route path="/finance_bonus" element={<Finance_bonus />} />
        <Route path="/kpi" element={<KPI />} />
        <Route path="/monthly_payment" element={<Monthly_payment />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default Finance_settings