'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();
  const [value, setValue] = useState(true);
  return (
    <>
      <div className=' nav-shadow h-[80px] fixed top-[0] w-[100%] bg-[white] duration-500 z-[12] flex items-center justify-between px-[30px]'>
        <Link href="/">
        <div className='flex items-center nav-logo-container gap-[10px]'>
          <img className=' nav-logo-1 h-[60px]' src="/assets/weblogo.svg" alt="" />
          <img className=' nav-logo-2 h-[17px]' src="/assets/logotext.svg" alt="" />
        </div>
        </Link>
        <div className='flex items-center gap-[27px]'>
          <Link className='nav-links' href="/howtobuy">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[18px]  font-Poppins'>HOW TO BUY</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/tokenomics">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[18px]  font-Poppins'>TOKENOMICS</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/docs">
          <p className='font-[400] text-[18px]  font-Poppins'>DOCS</p>
          <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/about">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[18px]  font-Poppins'>ABOUT</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/faq">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[18px]  font-Poppins'>FAQ</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <img className=' nav-links h-[32px] cursor-pointer' src="/assets/connectwallet.svg" alt="" />
          <Link className='nav-links' href="/dashboard">
          <img className='h-[32px] cursor-pointer' src="/assets/profileicon.svg" alt="" />
          </Link>
          <div className='mobile-menu' onClick={()=>{setValue(!value)}}>
            <img className='h-[32px]' src="/assets/mobilemenu.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={`w-[280px] bg-[white] mobile-nav-shadow ${value ? 'translate-x-[100%] hidden' : 'translate-x-[0%] block'} duration-700 z-[99] px-[15px] fixed py-[12px]  h-[100vh] overflow-auto right-[0px] top-[0px]`}>
          {/* <p className='font-[600] text-[30px]' onClick={()=>{setValue(!value)}}>X</p> */}
          <div className='h-[35px] w-[35px] rounded-[50%] bg-[#738DED] text-[20px] font-[500] flex items-center justify-center text-white  mt-[10px] ' onClick={() => { setValue(!value) }}>X</div>
          <div className='flex flex-col justify-center items-center mt-[20px] gap-[27px]'>
          <Link className='' href="/howtobuy">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>HOW TO BUY</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='' href="/tokenomics">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>TOKENOMICS</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='' href="/docs">
          <p className='font-[400] text-[20px] font-Poppins'>DOCS</p>
          <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='' href="/about">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>ABOUT</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='' href="/faq">
          <p className='hover:scale-[1.05] duration-300 font-[400] text-[20px] font-Poppins'>FAQ</p>
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <img className='  h-[40px] cursor-pointer' src="/assets/connectwallet.svg" alt="" />
          <Link className='' href="/dashboard">
          <img className='h-[40px] cursor-pointer' src="/assets/profileicon.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
