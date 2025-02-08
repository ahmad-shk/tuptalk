'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function DashboardNav({ value, setValue }) {
  const pathname = usePathname();
  const handleDownload = () => {
    window.open('/assets/tuptalkinfo.pdf', '_blank'); // Opens the PDF in a new tab
};
  return (
    <>
      <div className=' h-[80px] flex items-center justify-between px-[30px]'>
        <Link href="/">
          <div className='flex items-center nav-logo-container gap-[10px]'>
            <img className=' nav-logo-1 h-[60px]' src="/assets/weblogo.svg" alt="" />
            <img className=' nav-logo-2 h-[17px]' src="/assets/logotext.svg" alt="" />
          </div>
        </Link>
        <div className='flex items-center gap-[27px]'>
          <Link className='dashboard-nav-links' href="/">
            <p className='hover:scale-[1.05] duration-300 text-[#707188] font-[400] text-[18px] font-Poppins'>Home</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="/howtobuy">
            <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[18px] font-Poppins'>How to buy</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="" onClick={handleDownload}>
            <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[18px] font-Poppins'>Whitepaper</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="/docs">
            <p className='font-[400] text-[18px] text-[#707188] font-Poppins'>Docs</p>
            <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="/tokenomics">
            <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[18px] font-Poppins'>Tokenomics</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="/about">
            <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[18px] font-Poppins'>About</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='dashboard-nav-links' href="/faq">
            <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[18px] font-Poppins'>FAQ</p>
            <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          {/* <div className='dashboard-nav-links'><img src="/assets/darkmoodicon.svg" alt="" /></div> */}
          <div className='dashboard-mobile-menu ' onClick={() => { setValue(!value) }}>
            <img className='h-[32px]' src="/assets/mobilemenu.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
