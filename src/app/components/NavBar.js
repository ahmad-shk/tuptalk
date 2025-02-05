'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <div className=' nav-shadow h-[100px] flex items-center justify-between px-[30px]'>
        <Link href="/"><div className='flex items-center gap-[10px]'>
          <img className='h-[80px]' src="/assets/weblogo.svg" alt="" />
          <img className='h-[17px]' src="/assets/logotext.svg" alt="" />
        </div>
        </Link>
        <div className='flex items-center gap-[27px]'>
          <Link href="/howtobuy">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>HOW TO BUY</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/tokenomics">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>TOKENOMICS</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/docs">
          <p className='font-[400] text-[20px] font-Poppins'>DOCS</p>
          <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/about">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>ABOUT</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link href="/faq">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>FAQ</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <img className='h-[40px] cursor-pointer' src="/assets/connectwallet.svg" alt="" />
          <Link href="/dashboard">
          <img className='h-[40px] cursor-pointer' src="/assets/profileicon.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
