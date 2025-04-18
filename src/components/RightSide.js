import React from 'react'

const RightSide = (props) => {
  const {weather} = props;
  return (
    
    <div className='h-[77%] w-[44%] bg-black rounded-[48px] justify-self-center self-center my-[16%] z-50'>
      <div className='text-white'>
      <div className='text-[#9CA3AF] text-[18px] font-[manrope] mx-[25px]'>{weather.date}</div>
      <div className='text-[#FFF] text-[48px] font-extrabold justify-self-center'>{weather.city}</div>
      <img alt='moon'  src='/image/moon.png'
      />
      <div className='text-5xl text-[99px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to=[#F9FAFB] bg-clip-text text-transparent mx-[2%]'>{weather.min_c}°</div>
      
      {/* <div>{weather.min_c}</div> */}
      <div className='mx-[2%]'>{weather.condition}</div>
    </div>
    </div>
  )
}

export default RightSide
