import React from 'react';
import Marquee from 'react-fast-marquee';

function HomeMarque() {
  return (
    <div className='w-[90%] marqur-container m-auto bg-[] mt-[75px]'>
      <Marquee>
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company1.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company2.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company3.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company4.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company5.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company6.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company7.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company8.png" alt="" />
        <img className=' marque-image ml-[60px] h-[35px]' src="/assets/company9.png" alt="" />
      </Marquee>
    </div>
  );
}

export default HomeMarque;
