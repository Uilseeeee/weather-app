import React from 'react'

const RightSide = (props) => {
  const {weather} = props;
  return (
    
    <div>
      <div className='text-white'>
      <div>{weather.date}</div>
      <div className='text-8xl'>{weather.min_c}</div>
      {/* <div>{weather.min_c}</div> */}
      <div>{weather.condition}</div>
    </div>
    </div>
  )
}

export default RightSide
