'use client'
import React, { useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavlistText from '../UIcomponents/navlistText';
gsap.registerPlugin(ScrollTrigger);

function HomeTokenomics() {

  const tokenomicsTop = useRef(null);
  const tokenomicsText = useRef(null);
  const tokenomicsImg = useRef(null);

  useGSAP(()=>{
    gsap.to(tokenomicsTop.current, {
                transformOrigin: 'center',
                scale: 1,
                duration: .4,
                onComplete: ()=>{
                   gsap.to(tokenomicsText.current, {
                               transformOrigin: 'center',
                               scale: 1,
                               duration: .4,
                           });
                },
                scrollTrigger: {
                    trigger: tokenomicsTop.current,
                    start: '100px bottom',
                }
            });
            gsap.to(tokenomicsImg.current, {
              transformOrigin: 'center',
              scale: 1,
              duration: .4,
              scrollTrigger: {
                trigger: tokenomicsImg.current,
                start: '100px bottom',
            }
            })
  })

  const handleCopy = () => {
    const textToCopy = "0x77033DecB1d3bf00384473e34B07958044a72aD3";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div>
      <div className='flex items-center roadmap-header flex-col mt-[100px]'>
                <img ref={tokenomicsTop} src="/assets/upline.svg" alt="" className='scale-0' />
                <p ref={tokenomicsText} className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px] scale-0'>TOKENOMICS</p>
            </div>
            <div className='px-[180px] tokenomic-heading-container'>
            <p className='font-[400] text-[24px] tokenomic-heading font-poppins mt-[70px]'>The total supply of TUPL tokens is capped at 10,000,000,000 TUPL.</p>
            <div className='flex justify-center relative bg-[] mt-[50px]'>
                <img ref={tokenomicsImg} src="/assets/graphimg.svg" alt="" className='scale-0' />
            </div>
            <div className='flex items-center mt-[30px] flex-col'>
            <div className="flex gap-[15px] overflow-hidden copy-text-container items-center mb-[20px]">
      <NavlistText label={'0x77033DecB1d3bf00384473e34B07958044a72aD3'} style={"text-[#738DED] copy-text text-[20px] text-wrap font-[600]"} />
        
      
      <img className='h-[17px] copy-text-img cursor-pointer' src="/assets/copy-icon.png" alt="" onClick={handleCopy} />
    </div>
            <a target='blank' href="https://etherscan.io/address/0x77033DecB1d3bf00384473e34B07958044a72aD3"><button className='contactBtn h-[70px] mt-[10px] token-button rounded-[10px] leading-[36px] w-[300px] text-[24px] font-[400] font-poppins bg-radial text-white'>View Contract</button></a>
            </div>
            </div>
    </div>
  );
}

export default HomeTokenomics;
