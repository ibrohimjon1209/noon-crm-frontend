import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import Nav_top from './pages/Navbar/Nav-top';
import Main_home from './pages/home/main_home';
import Assigments from './pages/assigments/assigments';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Lids from './pages/Lids/Lids';
import Groups from './pages/Groups/Groups';
import Teachers from './pages/Teachers/Teachers';
import Study_section from './pages/Study_section/Study_section';
import Finance from './pages/Finance/Finance';
import Management from './pages/Management/Management';
import Marketing from './pages/Marketing/Marketing';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import { div } from 'framer-motion/client';

const App = () => {
  const customScrollbar = {
    overflowY: 'auto',
    scrollbarWidth: 'auto',
    scrollbarColor: 'rgba(0,53,95,1) rgba(0, 0, 95, 1)',
  };

  return (
    <Router>
      <div className='flex w-full bg-[rgba(242,238,238,1)] m-auto h-screen'>
        <div className='h-screen sticky top-0'>
          <Navbar />
        </div>
        <div className='flex flex-col w-full overflow-hidden'>
          <Nav_top />
          <div
            className='flex-1'
            style={{
              ...customScrollbar,
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,53,95,1) rgba(255, 255, 255, 1)',
            }}
          >
            <Routes>
              <Route path="/" element={<Main_home />} />
              <Route path="/assigments" element={<div className='overflow-y-hidden h-[100%]'><Assigments /></div>} />
              <Route path="/lids" element={<Lids />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/study_section" element={<Study_section />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/management" element={<Management />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />




              <Route path='*' element={<Navigate to="/" replace/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
