import React from 'react'
import ContractTable from './ContractTable'
import ContractFilter from './ContractFilter'
// import ContractDrawer from './ContractDrawer'

const Contract = () => {
  return (
    <div>
      <ContractFilter/>
      <ContractTable/>
      {/* <ContractDrawer/> */}
    </div>
  )
}

export default Contract