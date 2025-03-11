import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bonus from './Action/Bonuses/Bonus'
import Penalty from './Action/Penalties/Penalty'
import Monthly_payment from './Action/Payment/MonthlyPayment'
import Input_output from './Info/InputOutput/Input_output'
import Revenue from './Info/revenues/Revenue'
import Balance from './Info/Balans/Balance'
import Cassa from './Action/Cassa/Cassa'
import Unpaid_bills from './Info/Unpaid/Unpaid_bills_main'
import Transaction from './Report/Transactions/Transaction'
import Contract from './Report/Contract/Contract'
import Transaction_without_bills from './Info/TransactionBills/Transaction_without_bills'
import TransactionActions from './Report/Transactions/TransactionActions'

const Finance = () => {
  return (
    <Routes>
      <Route path="/cassa" element={<Cassa />} />
      <Route path="/bonus" element={<Bonus />} />
      <Route path="/penalty" element={<Penalty />} />
      <Route path="/monthly_payment" element={<Monthly_payment />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/input-output" element={<Input_output />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/unpaid-bills" element={<Unpaid_bills />} />
      <Route
        path="/transaction-without-bills"
        element={<Transaction_wihtout_bills />}
      />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/contract" element={<Contract />} />
      {/* <Route path="/transaction-actions" element={<TransactionActions />} /> */}
    </Routes>
  );
};

export default Finance;