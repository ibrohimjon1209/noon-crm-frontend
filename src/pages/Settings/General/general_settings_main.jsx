import React from "react";
import { Routes, Route } from "react-router-dom"
import Function from "./Childs/Function"
import Check from "./Childs/check/check_main"
import Subscribe from "./Childs/Subscribe"
import Holiday from "./Childs/holidays/holiday_main"
import Nav_settings from "./nav_general_settings"

const General_settings_main = () => {
    
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
    <>
      <div className="pl-[42px] pt-[41px]">
        <div className="flex gap-[30px]">
          <Nav_settings />
          <div className="w-full h-full">
            <Routes>
              <Route path="/function" element={<Function />} />
              <Route path="/check" element={<Check />} />
              <Route path="/follow" element={<Subscribe />} />
              <Route path="/holiday" element={<Holiday holidaysData={holidaysData} />} />
            </Routes>
          </div>
        </div>
    </div>
    </>
    );
};

export default General_settings_main;