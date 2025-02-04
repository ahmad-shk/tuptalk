import React from 'react';

function HomeTokenomics() {
  return (
    <div>
      <div className='flex items-center flex-col mt-[100px]'>
                <img src="/assets/upline.svg" alt="" />
                <p className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px]'>TOKENOMICS</p>
            </div>
            <div className='px-[180px]'>
            <p className='font-[400] text-[24px] font-poppins mt-[70px]'>The total supply of TUPL tokens is capped at 10,000,000,000 TUPL.</p>
            <div className='flex justify-center relative bg-[] mt-[50px]'>
                <img src="/assets/graphimg.svg" alt="" />
            </div>
            <div className='flex items-center mt-[30px] flex-col'>
            <img src="/assets/copytextimg.svg" alt="" />
            <button className='h-[70px] mt-[10px] rounded-[10px] leading-[36px] w-[300px] text-[24px] font-[400] font-poppins bg-radial text-white'>View Contract</button>
            </div>
            </div>
    </div>
  );
}

export default HomeTokenomics;
