import React from 'react'

export default function FallingTiles() {
  return (
   <div className="center-body">
      <div className='loader-spanne-20'>
        {[...Array(7)].map((_, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${-0.4 * (index + 1)}s`
            }}
          ></span>
        ))}
      </div>
      </div>
  )
}
