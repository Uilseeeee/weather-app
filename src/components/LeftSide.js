import React from 'react'

const LeftSide = (props) => {
  const { weather } = props;
  return (
    <div className='h-[77%] w-[44%] bg-white rounded-[48px] justify-self-center self-center justify-around z-50 my-[6%]'>
      <div className='text-black'>
        <div className='text-[#9CA3AF] text-[18px] font-[manrope] mx-[25px]'>{weather.date}</div>
        <div className='text-[#111827] text-[48px] font-extrabold justify-self-center'>{weather.city}</div>
        <img className='h-2/3 w-2/3 justify-self-center my-[19%]' 
          src='/image/icon.png'
          alt=''
        />
        <div className='text-5xl text-[99px] font-extrabold bg-gradient-to-b from-[#111827] to=[#6B7280] bg-clip-text text-transparent'>{weather.max_c}°</div>
        {/* <div>{weather.min_c}</div> */}
        <div>{weather.condition}</div>
      </div>
    </div>
  )
}

export default LeftSide
