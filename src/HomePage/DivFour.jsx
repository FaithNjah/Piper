import React from 'react'
import Pic1 from '../Pictures/Ellipse 7.png'
import Pic2 from '../Pictures/Line Chart.png'
import Pic3 from '../Pictures/Vector7.png'
import Pic4 from '../Pictures/Vector8.png'



const DivFour = () => {
  return (
    <div className='h-[80vh] bg-[#EFF7FF]'>

       <img className='ml-[600px]' src={Pic1} />

      <div className='absolute mt-[-32%] bg-[#EFF7FF] w-[100%]'>
        <h1 className='ml-[40%] font-mono font-semibold text-[30px] text-[#082183]'> POPULAR COURSES </h1>
      </div>

      <div className='flex absolute mt-[-20%] '>

        <div className='bg-[#4B5FDC] ml-[100px] h-[300px] w-[300px] rounded-[50px] p-[100px] text-center'>

          <div className='h-[100px] w-[100px] bg-[#ffffff] rounded-[80px] p-[10px] ml-[-10px] mt-[-50px]'>
          <img src={Pic2}/>
          </div>
          <p className='mt-[50px] text-[#ffffff]'>Business management</p>
        </div>

        <div  className='bg-[#4EC5F8] ml-[150px] h-[300px]  w-[300px] rounded-[50px] p-[10px] text-center'>

          <div className='h-[100px] w-[100px] bg-[#ffffff] rounded-[80px] p-[20px] ml-[80px] mt-[40px]'>
            <img className='' src={Pic3}/>
          </div>
        
         <p className='mt-[60px]  text-[#ffffff]'> English <br /> language</p>
        </div>

        <div  className='bg-[#082183] ml-[200px] h-[300px]  w-[300px] rounded-[50px] p-[100px] text-center'> 

        <div className='h-[100px] w-[100px] bg-[#ffffff] rounded-[80px] p-[20px] mt-[-55px]'>
          <img className='' src={Pic4}/> 
        </div>
         <p className='mt-[60px] text-[#ffffff]'>  Storage management</p>
        </div>

      </div>
    </div>
  )
}

export default DivFour