'use client'
import NavBar from '@/app/components/NavBar';
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function page() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
  const steps = [
    {
      number: 1,
      title: "Prepare Your Wallet",
      points: [
        "Use a decentralized wallet compatible with Wallet Connect, such as MetaMask or Trust Wallet.",
        "Ensure your wallet is set to the Ethereum network (ERC-20).",
      ],
    },
    {
      number: 2,
      title: "Fund Your Wallet with ETH",
      points: [
        "Ethereum (ETH) is required for transaction gas fees, even if you plan to purchase TUPL using USDT.",
        "Acquire ETH via platforms like Coinbase, Binance, or any other reputable exchange, and transfer it to your wallet.",
      ],
    },
    {
      number: 3,
      title: "Visit the Tuptalk Presale Platform",
      points: [
        "Open your web browser and navigate to https:// .tuptalk",
        'Click the "Connect Wallet" button to link your wallet to the platform.',
      ],
    },
    {
      number: 4,
      title: "Select Payment Method",
      points: [
        "Choose to pay using ETH or USDT by selecting the respective button on the presale dashboard.",
      ],
    },
    {
      number: 5,
      title: "Enter Purchase Amount",
      points: [
        "Input the amount of ETH or USDT you want to ",
        "The dashboard will display the number of TUPL tokens you’ll receive. ",
        'Confirm your selection and click "Buy."',
      ],
    },
    {
      number: 6,
      title: "Approve and Confirm the Transaction",
      points: [
        "Verify transaction details in your wallet, including the amount and recipient address.",
        "Confirm the transaction. Wait for the Ethereum network to validate your ",
        'For USDT Payments: Approve the USDT contract in a separate step before completing the final transaction."',
      ],
    },
    {
      number: 7,
      title: "Success!",
      points: [
        "Once confirmed, your TUPL tokens will be sent directly to your wallet.",
      ],
    },
  ];

  const leftSection = useRef([]);
  const rightSection = useRef([]);

  useGSAP(()=>{
    gsap.to(leftSection.current, {
      opacity: 1,
      y: 0,
      duration: .4,
      onComplete: ()=>{
        gsap.to(rightSection.current, {
          opacity: 1,
          x: 0,
          duration: .4,
          stagger: .2
        })
      },
      scrollTrigger: {
        trigger: leftSection.current,
        start: '100px bottom'
      }
    })
  })



  return (
    <div>
    <div
      className={`cursor-pointer fixed bottom-[60px] right-[60px] z-[9999] bg-radial faq-dropdown-icon min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex items-center justify-center transition-opacity duration-300 ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <img className="rotate-[180deg]" src="/assets/faqopen.svg" alt="Scroll to Top" />
    </div>
      <NavBar />
      <div className='pt-[80px]'>
        <PageHeader heading={"HOW TO BUY"} subheading={"How to buy"} />
        <div className="steps-container px-[130px] pt-[50px]">
          <p className='font-[600] how-to-buy-heading text-[30px]'>How to Buy  Tuptalk Tokens (TUPL) During the Presale</p>
          <p className='text-[#5F5F5F] how-to-buy-heading-para mt-[10px] text-[16px]'>Note : <span className='text-[black] font-[600]'>Tuptalk</span> Tokens (TUPL) are currently available exclusively during the <span className='text-[black] font-[600]'>Tuptalk</span> Tokens Presale . They are not yet listed on decentralized exchanges (DEXs) like Uniswap or PancakeSwap. Be cautious of counterfeit TUPL tokens on DEXs claiming to be authentic.</p>
          <p className='font-[600] how-to-buy-sub-heading text-[25px] pb-[20px] mt-[20px]'>Step-by-Step Guide to Buying TUPL</p>
          {steps.map((step, index) => (
            <div key={index} className="flex how-to-buy-step-container mt-[60px]">
              {/* Left Section */}
              <div ref={e=>leftSection.current[index]=e} className="opacity-0 translate-y-[80px] w-[9%] how-to-buy-step-left flex flex-col items-center">
                <div className="h-[85px] w-[85px] how-to-buy-step-circle rounded-full bg-[#738DED] font-inter text-white font-[700] text-[50px] flex items-center justify-center howtobuy-points">
                  {step.number}
                </div>
                <p className="font-inter how-to-buy-step-circle-text font-[600] text-[16px] text-[#5F5F5F] mt-[10px]">Step {step.number}</p>
              </div>
              {/* Right Section */}
              <div ref={e=>rightSection.current[index]=e} className="opacity-0 translate-x-[160px] ml-[20px] how-to-buy-step-right w-[91%] how-to-buy-step-bg px-[40px] py-[20px] rounded-[22px]">
                <p className="font-[600] how-to-buy-step-heading font-inter text-[20px]">{step.title}</p>
                <ul className="list-disc how-to-buy-step-point leading-[30px] mt-[18px] pl-5 text-[16px] text-[#5F5F5F] font-[400] font-inter">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer mt={"200px"} />
    </div>
  );
}

export default page;
