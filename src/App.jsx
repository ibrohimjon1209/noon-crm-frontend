import React from 'react';
import Navbar from './Navbar/Navbar';
import Nav_top from './Navbar/Nav-top';
import Status from './Dashboard_status/Status';
import Table from './Table/Table';

const App = () => {
  // Custom scrollbar styles
  const customScrollbar = {
    overflowY: 'auto', // Enable vertical scrolling
    scrollbarWidth: 'auto', // For Firefox
    scrollbarColor: 'rgba(0,53,95,1) rgba(0, 0, 95, 1)', // For Firefox
  };

  // WebKit scrollbar styles
  const webkitScrollbarStyles = {
    width: '100px', // Width of the scrollbar
  };

  const webkitScrollbarTrackStyles = {
    background: 'rgba(0,53,95,1)', // Background of the scrollbar track
    borderRadius: '100px', // Rounded corners for track
  };

  const webkitScrollbarThumbStyles = {
    background: 'rgb(51, 0, 255)', // Color of the scrollbar thumb
    borderRadius: '100px', // Rounded corners for thumb
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
          style={{ ...customScrollbar, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,53,95,1) rgba(255, 255, 255, 1)', }}>
          <div style={webkitScrollbarStyles} className="scrollbar">
            <div style={webkitScrollbarTrackStyles} className="scrollbar-track">
              <div style={webkitScrollbarThumbStyles} className="scrollbar-thumb"></div>
            </div>
          </div>



          <Status/>
          <Table/>



        </div>
      </div>
    </div>
  );
}

export default App;
