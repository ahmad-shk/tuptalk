import React from 'react'

export default function AnimatedProfileBtn({ imgPath }) {
  return (
   <button className='animatedProfileBtn'>
    <span class="tooltip">Profile</span>
   <div className='imgBtnBorders'><span><img src={imgPath} alt='' className='h-[30px] w-[20px]' /></span></div> 
   </button>
  )
}
