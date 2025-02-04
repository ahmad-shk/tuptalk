import React from 'react';
import Link from 'next/link';

function Footer(props) {
  return (
    <>
      <div className={`h-[240px] w-[100%] bg-[#5C82A9] pt-[50px] pb-[20px]`} style={{ marginTop: `${props.mt}` }}>
        <div className='flex justify-center gap-[40px]'>
          <Link href="/howtobuy"><p className='text-white font-[400] font-dmsans text-[15px]'>How to buy</p></Link>
          <Link href="/tokenomics"><p className='text-white font-[400] font-dmsans text-[15px]'>Tokenomics</p></Link>
          <Link href="/docs"><p className='text-white font-[400] font-dmsans text-[15px]'>Docs</p></Link>
          <Link href="/about"><p className='text-white font-[400] font-dmsans text-[15px]'>About</p></Link>
          <Link href="/faq"><p className='text-white font-[400] font-dmsans text-[15px]'>FAQs</p></Link>
        </div>
        <div className='flex justify-center gap-[30px] pt-[50px]'>
          <img className='cursor-pointer hover:scale-[1.3] duration-300' src="/assets/footerdiscordicon.svg" alt="" />
          <img className='cursor-pointer hover:scale-[1.3] duration-300' src="/assets/footerfacebookicon.svg" alt="" />
          <img className='cursor-pointer hover:scale-[1.3] duration-300' src="/assets/footertwittericon.svg" alt="" />
          <img className='cursor-pointer hover:scale-[1.3] duration-300' src="/assets/footerinstagramicon.svg" alt="" />
          <img className='cursor-pointer hover:scale-[1.3] duration-300' src="/assets/footertelegramicon.svg" alt="" />
        </div>
        <div className='flex justify-center pt-[45px]'>
          <p className=' cursor-pointer flex gap-[3px] text-white font-[400] font-dmsans text-[15px]'>Copyright <img src="/assets/copyrighticon.svg" alt="" /> 2025 Tuptalk</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
