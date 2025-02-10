import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Student from './Student'
import Order from './Order'
import Lessons from './Lessons'

const Navbar = () => {
  return (
    <div className='w-full h-full overflow-auto'>
        <ul className='border-[1px] border-black w-[90%] h-[8%] mt-[20px] m-auto flex justify-around items-center'>
            <li><Link className='text-[25px] font-[600]' to="/">O'quvchi</Link></li>
            <li><Link className='text-[25px] font-[600]' to="order">Buyurtma</Link></li>
            <li><Link className='text-[25px] font-[600]' to="lessons">Birinchi darsga keladigonlar</Link></li>
        </ul>
        

        {
        <Routes>
            <Route path='student' element={<Student/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/lessons' element={<Lessons/>}/>
        </Routes>

        }



    </div>
  )
}

export default Navbar