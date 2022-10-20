import React from 'react'
import Pic2 from "../Pictures/Ellipse 2.png"
import Pic1 from "../Pictures/Ellipse 7.png"


const DivTwo = () => {
  return (
    <div className='h-[70vh] bg-[#EFF7FF]  '>

           <div className='flex justify-between '>
             <img src={Pic1} />
             <img src={Pic2} />
           </div>

            <div className=' absolute mt-[-550px] ml-[150px]'>
              <h1 className='font-mono font-semibold text-[50px] text-[#082183]'>Get Quality <span className='text-[60px]'>Tutoring</span></h1>
              <h1 className='font-mono font-semibold text-[60px] text-[#082183]'>Through 1-On-1</h1>
              <h1 className='font-mono font-semibold text-[50px] text-[#082183]'>Online Tutoring</h1>

            <p className=' font-semibold text-[17px] text-[#082183]'>
                Private, 1-on-1 lessons with experts, instructor based <br/> learning in the field or interest
            </p>

            <button className='h-[45px] w-[174px] bg-[#082183] mt-[10px] font-mono font-semibold text-[20px] rounded-[15px] text-center text-[#ffffff]'>
                Join for free
            </button>
        </div>

    </div>
  )
}

export default DivTwo