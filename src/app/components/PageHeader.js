'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function PageHeader(props) {
 
  const headerTopImg = useRef(null);
  const headerText = useRef([]);

  useGSAP(()=>{
    gsap.to(headerTopImg.current, {
       scale: 1,
       duration: .8,
       delay:.3,
       onComplete: ()=>{
        gsap.to(headerText.current, {
          scale: 1,
          opacity: 1,
          y: '-10px',
          duration: .8,
          stagger: .1
        })
       }
    })
  })

  return (
      <div className='flex items-center flex-col mt-[100px]'>
          <p ref={(e)=>headerText.current[0]=e} className='opacity-0 translate-y-[100px] page-header-heading text-[40px] font-[700] font-popins gradient-text scale-0'>{props.heading}</p>
          <div ref={(e)=>headerText.current[1]=e} className='scale-0 opacity-0 translate-y-[100px] text-[24px] page-header-home page-header-home-text font-[400] mt-[5px] font-poppins text-[#777777] flex items-center gap-[15px]'><Link href="/">Home</Link> <span className='h-[6px] w-[6px] block rounded-[50%] bg-[#A29E9E]'></span> <p className='page-header-home-sub-class text-[#A29E9E] text-[24px] font-[400] font-poppins '>{props.subheading}</p></div>
          <img ref={headerTopImg} className='w-[90%] page-header-image scale-0' src="/assets/bottomline.svg" alt="" />
        </div>
  );
}

export default PageHeader;
