import React from 'react'

export default function NavlistText({ label, style }) {
 let text = label.split("");
  return (

    <p className={`navlistText text-[22px] font-Poppins ${style}`}>
     {
      text.map((letter, index)=>(
       <span key={index} style={{ '--i': index }} className="letter">{letter === " " ? "\u00A0" : letter}</span>
      ))
     }
    </p>

  )
}
