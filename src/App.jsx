import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import Nav_top from './pages/Navbar/Nav-top';
import Main_home from './pages/home/main_home';
import Not_Found from './pages/404_page/not_found';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route
            path="*"
            element={
              <div className='flex w-[100vw] justify-center bg-white'>
                <Not_Found />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className='flex w-full h-screen'>
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
                    }}>
                    <Main_home />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;