import React from 'react'

const LeftSide = (props) => {
  const { weather } = props;
  return (
    <div className='h-[70%] w-[40%] bg-white rounded-[48px] justify-self-center self-center z-10 my-[6%]'>
      <div className='text-black'>
        <div className='text-[#9CA3AF] text-[18px] font-[manrope]'>{weather.date}</div>
        <div className='text-[#111827] text-[48px]'>{weather.city}</div>
        <img 
          src='/image/icon.png'
          alt=''
        />
        <div className='text-5xl text-[99px]'>{weather.max_c}°</div>
        {/* <div>{weather.min_c}</div> */}
        <div >{weather.condition}</div>
      </div>
    </div>
  )
}

export default LeftSide
