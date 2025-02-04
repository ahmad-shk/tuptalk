import React from 'react';
import Marquee from 'react-fast-marquee';

function HomeMarque() {
  return (
    <div className='w-[90%] m-auto mt-[75px]'>
      <Marquee>
        <img src="/assets/marquee.svg" alt="" />
      </Marquee>
    </div>
  );
}

export default HomeMarque;
