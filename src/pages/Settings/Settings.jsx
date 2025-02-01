import React from 'react';
import { Routes, Route } from "react-router-dom"
import Finance_settings from './Finance/finance_settings_main';
import General_settings_main from './General/general_settings_main';

const Settings = () => {

  const holidaysData = [
    {
      title: "8-mart Xalqaro Xotin Qizlar Bayrami",
      start_time: "08.03.2024 | 05:00",
      end_time: "09.03.2024 | 05:00",
    },
    {
      title: "9-may Xotira va Qadrlash kuni",
      start_time: "10.06.2024 | 05:00",
      end_time: "11.06.2024 | 05:00",
    },
    {
      title: "Qurbon Hayiti",
      start_time: "10.06.2024 | 05:00",
      end_time: "11.06.2024 | 05:00",
    },
  ]

  return (
        <Routes>
          <Route path="finance/*" element={<Finance_settings />} />
          <Route path="general/*" element={<General_settings_main />} />
        </Routes>
  )
}

export default Settings;