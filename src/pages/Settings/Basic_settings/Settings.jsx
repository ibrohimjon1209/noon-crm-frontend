import React from 'react';
import Function from './Childs/Function';
import Check from './Childs/check/check_main';
import Subscribe from './Childs/Subscribe';
import Holiday from './Childs/holidays/holiday_main';
import Nav_settings from './nav_settings';
import Finance from '../../Finance/Finance';
import { Routes, Route } from "react-router-dom"
import Finance_settings from "../Finance/Finance_settings_main"
import General_settings from "../General/general_settings_main"

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
          <Route path="finance" element={<Finance />} />
          <Route path="finance/*" element={<Finance_settings />} />
          <Route path="general/*" element={<General_settings />} />
        </Routes>
  )
}

export default Settings;