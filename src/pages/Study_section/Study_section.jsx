import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryStudy from './child/CategoryStudy'
import OnlineCourses from './child/OnlineCourses'
import OfflineCourses from './child/OfflineCourses'
import TabsComponent from './TabsComponent'

const Study_section = () => {
  return (
    <Routes>
      <Route path='/categoryStudy' element={<CategoryStudy/>} />
      <Route path='/onlineCourses' element={<OnlineCourses/>} />
      <Route path='/offlineCourses' element={<OfflineCourses/>} />
      <Route path='/tabsComponent' element={<TabsComponent/>} />
    </Routes>
  )
}

export default Study_section