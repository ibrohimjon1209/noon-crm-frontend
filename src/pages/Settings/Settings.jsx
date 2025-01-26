import React, { useState } from 'react'
import Function from './Childs/Function'
import Check from './Childs/check/check_main'
import Subscribe from './Childs/Subscribe'
import Holiday from './Childs/holidays/holiday_main'
import Nav_settings from './nav_settings'

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
  ];

  const [active, setActive] = useState("Function");

  return (
    <div className='px-[32px] pt-[41px]'>


      <div className="flex gap-[30px]">

        <Nav_settings active={active} setActive={setActive} />

        <div>
          {active === "Function" && <Function />}
          {active === "Check" && <Check />}
          {active === "Follow" && <Subscribe />}
          {active === "Holiday" && <Holiday holidaysData={holidaysData} />}
        </div>
      </div>

    </div>
  )
}

export default Settings