import React from 'react'
import { Routes, Route } from "react-router-dom"
import Group from './Group/Group_main';
import Rooms from './Rooms/Rooms_main';
import Students from './Students/Students_main'
import Table from './Table/Table_main'
import Task from './Task/Task_main'
const Groups = () => {
  return (
    <>
      <Routes>
          <Route path="group/*" element={<Group />} />
          <Route path="rooms/*" element={<Rooms />} />
          <Route path="students/*" element={<Students />} />
          <Route path="table/*" element={<Table />} />
          <Route path="Task/*" element={<Task />} />
        </Routes>
    </>
  )
}

export default Groups;