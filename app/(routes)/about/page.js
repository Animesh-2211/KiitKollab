import React from 'react'
import WhatWeDo from './AboutComponent/WhatWeDo'
import Kiitkollabdo from './AboutComponent/Kiitkollabdo'
import Guidedby from './AboutComponent/Guidedby'
import OurTeam from './AboutComponent/OurTeam'

const page = () => {
  return (
    <div>
        <WhatWeDo/>
        <Kiitkollabdo/>
        <Guidedby/>
        <OurTeam/>
    </div>
  )
}

export default page