'use client'
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AnimatedBtn from './UIcomponents/animatedBtn';
import AnimatedProfileBtn from './UIcomponents/animatedProfileBtn';
import NavlistText from './UIcomponents/navlistText';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';


function NavBar() {
  const pathname = usePathname();
  const [value, setValue] = useState(true);
  const logo = useRef([]);
  
  useGSAP(()=>{
    gsap.to(logo.current,{
      scale: 1,
      transformOrigin: 'center',
      duration: .5,
      delay: 0.4,
      ease: 'Power3.out'
    })
  })

  return (
    <div className=''>
      <div className='nav-shadow h-[80px] fixed top-[0] z-[12] backdrop-blur-[20px] w-[100%] bg-[#fffffff9] duration-500 flex items-center justify-between px-[30px]'>
        <Link href="/">
        <div className='flex items-center nav-logo-container gap-[10px]'>
          <img ref={(e)=>logo.current[0]=e} className='nav-logo-1 h-[60px] scale-0' src="/assets/weblogo.svg" alt="" />
          <img ref={(e)=>logo.current[1]=e} className='nav-logo-2 h-[17px] scale-0' src="/assets/logotext.svg" alt="" />
        </div>
        </Link>
        
        <div className='flex items-center gap-[27px]'>
          <Link className='nav-links' href="/howtobuy">
          <NavlistText label={'HOW TO BUY'} />
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/tokenomics">
          <NavlistText label={'TOKENOMICS'} />
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/tokenomics" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/docs">
          <NavlistText label={'DOCS'} />
          <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/about">
          <NavlistText label={'ABOUT'} />
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/about" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <Link className='nav-links' href="/faq">
          {/* <p className='hover:scale-[1.05] duration-300 font-[400] text-[18px]  font-Poppins'>FAQ</p> */}
          <NavlistText label={'FAQs'} />
          <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/faq" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
          </Link>
          <span className='nav-links'>
          <AnimatedBtn label={'connect wallet'} />
          </span>
          {/* <img className=' nav-links h-[32px] cursor-pointer' src="/assets/connectwallet.svg" alt="" /> */}
          <Link className='nav-links' href="/dashboard">
          {/* <img className='profilepic h-[32px] cursor-pointer' src="/assets/profileicon2.svg" alt="" /> */}
          <AnimatedProfileBtn imgPath={'./assets/profileicon2.svg'} />
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
    </div>
  );
}

export default NavBar;
