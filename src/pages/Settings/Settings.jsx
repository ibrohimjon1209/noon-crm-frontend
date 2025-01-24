import React, { useState } from 'react'
import Function from './Childs/Function'
import Check from './Childs/Check'
import Subscribe from './Childs/Subscribe'
import Holiday from './Childs/Holiday'
import Nav_settings from './nav_settings'

const Settings = () => {

  const [active, setActive] = useState("Function");

  return (
    <div className='px-[32px] pt-[41px]'>


      <div className="flex gap-[30px]">

        <Nav_settings active={active} setActive={setActive} />

        <div>
          {active === "Function" && <Function />}
          {active === "Check" && <Check />}
          {active === "Follow" && <Subscribe />}
          {active === "Holiday" && <Holiday />}
        </div>
      </div>

    </div>
  )
}

export default Settings