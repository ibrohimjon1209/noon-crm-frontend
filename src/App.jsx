import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import Nav_top from './pages/Navbar/Nav-top';
import Main_home from './pages/home/main_home';
import Not_Found from './pages/not_foun/not_found';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const customScrollbar = {
    overflowY: 'auto',
    scrollbarWidth: 'auto',
    scrollbarColor: 'rgba(0,53,95,1) rgba(0, 0, 95, 1)',
  };

  const webkitScrollbarStyles = {
    width: '100px',
  };

  const webkitScrollbarTrackStyles = {
    background: 'rgba(0,53,95,1)',
    borderRadius: '100px',
  };

  const webkitScrollbarThumbStyles = {
    background: 'rgb(51, 0, 255)',
    borderRadius: '100px',
  };

  return (
    <div className='flex w-full  bg-[rgba(242,238,238,1)] m-auto h-screen'>
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
          <div style={webkitScrollbarStyles} className="scrollbar">
            <div style={webkitScrollbarTrackStyles} className="scrollbar-track">
              <div style={webkitScrollbarThumbStyles} className="scrollbar-thumb"></div>
            </div>
          </div>
          <Router>
            <Routes>
              <Route path="*" element={<Not_Found />} />
              <Route path="/" element={<Main_home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
