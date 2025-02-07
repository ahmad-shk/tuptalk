'use client'
import React from 'react';

function HomeTokenomics() {
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
                <img src="/assets/upline.svg" alt="" />
                <p className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px]'>TOKENOMICS</p>
            </div>
            <div className='px-[180px] tokenomic-heading-container'>
            <p className='font-[400] text-[24px] tokenomic-heading font-poppins mt-[70px]'>The total supply of TUPL tokens is capped at 10,000,000,000 TUPL.</p>
            <div className='flex justify-center relative bg-[] mt-[50px]'>
                <img src="/assets/graphimg.svg" alt="" />
            </div>
            <div className='flex items-center mt-[30px] flex-col'>
            <div className="flex gap-[15px] overflow-hidden copy-text-container items-center mb-[20px]">
      <p className="text-[#738DED] copy-text text-[20px] text-wrap font-[600]">
        0x77033DecB1d3bf00384473e34B07958044a72aD3
      </p>
      <img className='h-[17px] copy-text-img cursor-pointer' src="/assets/copy-icon.png" alt="" onClick={handleCopy} />
    </div>
            <button className='h-[70px] mt-[10px] token-button rounded-[10px] leading-[36px] w-[300px] text-[24px] font-[400] font-poppins bg-radial text-white'>View Contract</button>
            </div>
            </div>
    </div>
  );
}

export default HomeTokenomics;
