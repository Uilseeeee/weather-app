import React from 'react'

const RightSide = (props) => {
  const {weather} = props;
  return (
    
    <div className='h-[70%] w-[40%] bg-black rounded-[48px] justify-self-center self-center z-50 my-[16%]'>
      <div className='text-white'>
      <div className='text-[#9CA3AF] text-[18px] font-[manrope]'>{weather.date}</div>
      <div className='text-[#FFF] text-[48px]'>{weather.city}</div>
      <img src='/image/moon.png'
      />
      <div className='text-5xl text-[99px]'>{weather.min_c}°</div>
      
      {/* <div>{weather.min_c}</div> */}
      <div>{weather.condition}</div>
    </div>
    </div>
  )
}

export default RightSide
