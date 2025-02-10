import React from 'react';
import { Routes, Route } from "react-router-dom"
import Finance_settings from './Finance/finance_settings_main';
import General_settings from './General/general_settings_main';
import Study_settings from './Study/study_main';
import Marketing_settings from './Marketing/marketing_main';

const Settings = () => {

  return (
        <Routes>
          <Route path="finance/*" element={<Finance_settings />} />
          <Route path="general/*" element={<General_settings />} />
          <Route path="study/*" element={<Study_settings />} />
          <Route path="marketing/*" element={<Marketing_settings />} />
          <Route path="management/*" element={<Marketing_settings />} />
        </Routes>
  )
}

export default Settings;