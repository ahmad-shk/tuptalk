import React, { useState } from 'react'

export default function AnimatedBtn({ label, style }) {

  return (
    <div className='w-fit bg-gradient-to-tl from-[#6545C8] to-[#D943C6] border rounded-[.7rem] p-[1.5px] flex justify-center items-center'>
      <button className={`animatedBtn ${style}`}>
      { label }
      </button>
    </div>
  )
}
