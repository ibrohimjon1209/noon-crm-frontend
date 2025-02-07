import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav_study from './nav_study'
import Arrive_because from './childs/arrive_because/arrive_because_main'
import Extra_course from './childs/extra_course/extra_course_main'
import Study_degree from './childs/study_degree/study_degree_main'

const Study_settings = () => {
  return (
    <div className='pt-[40px] pl-[42px] flex flex-row'>
      <div className='flex gap-[30px]'>
      <Nav_study />
      <div>
      <Routes>
        <Route path="/arrive" element={<Arrive_because />} />
        <Route path="/course" element={<Extra_course />} />
        <Route path="/degree" element={<Study_degree />} />
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default Study_settings