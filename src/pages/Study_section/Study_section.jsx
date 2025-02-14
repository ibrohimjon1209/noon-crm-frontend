import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryStudy from './child/CategoryStudy'
import OnlineCourses from './child/OnlineCourses'
import OfflineCourses from './child/OfflineCourses'

const Study_section = () => {
  return (
    <Routes>
      <Route path='/categoryStudy' element={<CategoryStudy/>} />
      <Route path='/onlineCourses' element={<OnlineCourses/>} />
      <Route path='/offlineCourses' element={<OfflineCourses/>} />
    </Routes>
  )
}

export default Study_section