import React from 'react'
import { Routes, Route } from "react-router-dom"
import Group from './Group/Group_main';
import Rooms from './Rooms/Rooms_main';
import Students from './Students/Students_main'
import Table from './Table/Table_main'
import Task from './Task/Task_main'
import Course from './Group/Course';
const Groups = () => {
  return (
    <>
      <Routes>
          <Route path="/group*" element={<Group />} />
          <Route path="/course" element={<Course />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/students" element={<Students />} />
          <Route path="/table" element={<Table />} />
          <Route path="/task" element={<Task />} />
        </Routes>
    </>
  )
}

export default Groups;