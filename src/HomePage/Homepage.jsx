import React from 'react'
import DivOne from './DivOne'
import DivTwo from './DivTwo'
import DivThree from './DivThree'
import DivFour from './DivFour'
import DivFive from './DivFive'
import DivSix from './DivSix'
import DivSeven from './DivSeven'

const Homepage = () => {
  return (
    <div className='bg-[#EFF7FF] h-[350vh] w-[100%]'>
        <DivOne/>
        <DivTwo/>
        <DivThree/>
        <DivFour/>
        <DivFive/>
        <DivSix/>
        <DivSeven/>
    </div>
  )
}

export default Homepage