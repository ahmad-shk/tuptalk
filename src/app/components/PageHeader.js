import React from 'react';
import Link from 'next/link';

function PageHeader(props) {
  return (
      <div className='flex items-center flex-col mt-[100px]'>
          <p className='page-header-heading text-[40px] font-[700] font-popins gradient-text '>{props.heading}</p>
          <div className='text-[24px] page-header-home page-header-home-text translate-y-[10px] font-[400] mt-[5px] font-poppins text-[#777777] flex items-center gap-[15px]'><Link href="/">Home</Link> <span className='h-[6px] w-[6px] block rounded-[50%] bg-[#A29E9E]'></span> <p className='page-header-home-sub-class text-[#A29E9E] text-[24px] font-[400] font-poppins '>{props.subheading}</p></div>
          <img className='w-[90%] page-header-image' src="/assets/bottomline.svg" alt="" />
        </div>
  );
}

export default PageHeader;
