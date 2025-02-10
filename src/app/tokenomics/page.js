'use client'
import React, { useEffect, useState,useRef } from 'react';
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function page() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Calculate percentage scrolled
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      // Show icon after 2% scroll, and hide it only when user scrolls back to the top
      if (scrollPercentage >= 2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
    const points = [
        {
          title: "presale - 55%",
          description: "Tokens reserved for early supporters and participants during the presale phase to bootstrap adoption and fund the development of the Tuptalk platform. ",
        },
        {
          title: "Liquidity Pool, DEX and CEX - 35% ",
          description: " Ensures market liquidity to facilitate seamless transactions and minimize slippage across decentralized exchanges. ",
        },
        {
          title: "Marketing and Partnerships - 5% ",
          description: "Dedicated to promoting the platform, acquiring partnerships, and increasing global awareness of Tuptalk.",
        },
        {
          title: "team allocation - 5% ",
          description: "Rewards the core team and contributors, with vesting schedules to align incentives with the platform's long-term growth.",
        },
      ];

      const tokenomicsHeadings = useRef([]);

      useGSAP(()=>{
        tokenomicsHeadings.current.forEach((title, i)=>{
           gsap.to(tokenomicsHeadings.current[i], {
            opacity: 1,
            duration: .8,
            x: 0,
            scrollTrigger: {
              trigger: tokenomicsHeadings.current[i],
              start: '100px bottom',
              // markers: true
            }
           })
        });
        
      })

    return (
        <div>
    <div
      className={`cursor-pointer fixed bottom-[60px] right-[25px] z-[9999] bottomtotop border-[2px] border-[#4A3AFF]  gap-[0px] min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex flex-col items-center justify-center transition-opacity duration-300 ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
       <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-[#4A3AFF]">
            <path
              fill-rule="evenodd"
              d="M12 21c-.414 0-.75-.336-.75-.75V7.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12.75 7.06v13.19c0 .414-.336.75-.75.75z"
              clip-rule="evenodd" />
          </svg>
    </div>
            <NavBar />
            <div className='pt-[80px]'>
            <PageHeader heading={"TOKENOMICS"} subheading={"Tokenomics"} />
            <p className='font-[400] font-poppins mt-[30px]  text-[21px] token-heading docs-heading docs-main-heading leading-[32px] text-[black] text-center w-[60%] m-auto'>Tuptalk tokenomics is designed to ensure sustainability, equitable distribution, and long-term value for its ecosystem participants.</p>
            <div className="points-container px-[70px] mt-[120px]">
                <p ref={e=>tokenomicsHeadings.current[0]=e} className='opacity-0 translate-x-[-40px] text-[28px] font-[700] token-point-heading font-poppins gradient-text'>TOTAL SUPPLY</p>
                <p className='font-[400] text-[21px] token-point-para font-poppins leading-[32px] mt-[10px] pl-[80px]'>The total supply of TUPL tokens is capped at 10,000,000,000 TUPL.</p>
            </div>
            <div className='flex justify-center token-image-container relative bg-[] mt-[100px] mb-[30px]'>
                <img src="/assets/graphimg.svg" alt="" />
            </div>
            <div className="px-[70px] points-container">
      {points.map((point, index) => (
        <div key={index} className="points mt-[34px]">
          <p ref={e=>tokenomicsHeadings.current[index+1]=e} className="opacity-0 translate-x-[-40px] text-[28px] font-[700] token-point-heading font-poppins gradient-text uppercase">{point.title}</p>
          <p className="font-[400] text-[21px] token-point-para font-poppins leading-[32px] mt-[10px] pl-[80px]">
            {point.description}
          </p>
        </div>
      ))}
    </div>
    <Footer mt={"200px"} />
        </div>
        </div>
    );
}

export default page;
