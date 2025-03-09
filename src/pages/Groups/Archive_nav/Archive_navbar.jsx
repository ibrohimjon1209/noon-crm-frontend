import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import whiteDollar from './img/white_dollar.png';
import blackDollar from './img/black_dollar.png';
import whiteArchive from './img/white_archive.png';
import blackArchive from './img/black_archive.png';
import DatePicker from './DatePicker';

const ArchiveNavbar = () => {
  const location = useLocation();


  const showDatePicker = location.pathname === '/groups/archive/page1';


  const isPage1Active = location.pathname === '/groups/archive/page1';
  const isPage2Active = location.pathname === '/groups/archive/page2';
  return (
    <div className=''>

      <div className="  w-full  h-[80%] rounded-lg flex  justify-between items-center ">

        <div className=' flex '>
          <Link to="/groups/archive/page1" className='w-full h-full'>
            <div
              className={`w-[100px] h-[66px] bg-[#0D99FF] ${isPage1Active ? 'bg-[#0D99FF]' : 'bg-white'
                } flex justify-center items-center cursor-pointer transition duration-300`}
            >
              <img
                className='w-[40%]'
                src={isPage1Active ? whiteDollar : blackDollar}
                alt="Dollar belgisi"
              />
            </div>
          </Link>


          <Link to="/groups/archive/page2" className='w-full h-full'>
            <div
              className={`w-[100px] h-[66px] ${isPage2Active ? 'bg-[#0D99FF]' : 'bg-white'
                } flex justify-center items-center cursor-pointer transition duration-300`}
            >
              <img
                className='w-[35%]'
                src={isPage2Active ? whiteArchive : blackArchive}
                alt="Arxiv belgisi"
              />
            </div>
          </Link>
        </div>

        {showDatePicker && <DatePicker />}

      </div>




      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>

    </div>
  );
};

export default ArchiveNavbar;