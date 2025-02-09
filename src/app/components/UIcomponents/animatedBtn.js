import React, { useState } from 'react'

export default function AnimatedBtn({ label, style, onClick }) {

  return (
    <div className='w-fit bg-gradient-to-tl from-[#6545C8] to-[#D943C6] border rounded-[.7rem] p-[1.5px] flex justify-center items-center'>
      <button onClick={onClick} className={`animatedBtn ${style}`}>
      { label }
      </button>
    </div>
  )
}
