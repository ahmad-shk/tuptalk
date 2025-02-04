import React from 'react';

function PageHeader(props) {
  return (
      <div className='flex items-center flex-col mt-[100px]'>
          <p className='text-[40px] font-[700] font-popins gradient-text '>{props.heading}</p>
          <div className='text-[24px] translate-y-[10px] font-[400] mt-[5px] font-poppins text-[#777777] flex items-center gap-[15px]'>Home <span className='h-[6px] w-[6px] block rounded-[50%] bg-[#A29E9E]'></span> <p className='text-[#A29E9E] text-[24px] font-[400] font-poppins '>{props.subheading}</p></div>
          <img src="/assets/bottomline.svg" alt="" />
        </div>
  );
}

export default PageHeader;
