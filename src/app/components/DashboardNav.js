'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function DashboardNav() {
  const pathname = usePathname();
  return (
    <>
      <div className=' h-[100px] flex items-center justify-between px-[30px]'>
        <Link href="/"><div className='flex items-center gap-[10px]'>
          <img className='h-[80px]' src="/assets/weblogo.svg" alt="" />
          <img className='h-[17px]' src="/assets/logotext.svg" alt="" />
        </div>
        </Link>
        <div className='flex items-center gap-[27px]'>
          <Link href="/">
          <p className='hover:scale-[1.05] duration-300 text-[#707188] font-[400] text-[20px] font-Poppins'>Home</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/howtobuy">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>How to buy</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>Roadmap</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>Whitepaper</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/docs">
          <p className='font-[400] text-[20px] text-[#707188] font-Poppins'>Docs</p>
          <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/tokenomics">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>Tokenomics</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/about">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>About</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/faq">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[#707188] text-[20px] font-Poppins'>FAQ</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <div><img src="/assets/darkmoodicon.svg" alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
