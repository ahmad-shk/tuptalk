'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import AnimatedBtn from '../UIcomponents/animatedBtn';
import SVGTargetAnimation from '../UIcomponents/SVGTargetAnimation';
import GearRotater from '../UIcomponents/GearRotater';

function HomeHero() {
    const [value, setValue] = useState(70); // Initial value

    const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
    console.log(value);
  };
  const handleDownload = () => {
    window.open('/assets/tuptalkinfo.pdf', '_blank'); // Opens the PDF in a new tab
};
    return (
        <>
            <div className='px-[80px] home-wrapper flex mt-[80px] max-w-[1600px] m-auto relative'>

               

                <div className="hero-left w-[50%] pt-[100px] bg-[]">
                    <p className='font-Inter home-hero-paragraph font-[600] italic pr-[30px] text-[26px]'>Tuptalk is a next-gen voice chat and radio broadcasting app with built-in social networking, enabling seamless communication for businesses, influencers, communities, and friends. It integrates group calling, audio conferencing, and live radio broadcasts, empowering users to expand their reach, engage audiences, and stay connected—all in one versatile platform.</p>
                    <div className=' bg-[] relative '>
                        <img className='home-mobile-image translate-x-[20px]' src="/assets/homeheroimg.svg" alt="" />
                        <div className='translate-y-[-100%] home-hero-buttons-position translate-x-[-10%] z-[9] relative'>
                            {/* <div className='h-[40px] w-[190px] home-hero-whitepaper gradient-bg rounded-[14px] flex items-center justify-center' onClick={handleDownload}> */}
                                {/* <button className='h-[36px] text-black font-poppins w-[186px] text-[24px] rounded-[14px] bg-[white]'>WHITEPAPER</button> */}
                                <AnimatedBtn label={'WHITEPAPER'} style={'text-[22px] w-[186px] h-[40px] flex items-center justify-center p-[0px] '}/>
                            {/* </div> */}
                            <a target='blank' href="https://etherscan.io/address/0x77033DecB1d3bf00384473e34B07958044a72aD3"><button className='h-[40px] bgBtnShadow home-hero-contract mt w-[190px] mt-[8px] font-poppins text-[22px] text-white gradient-bg rounded-[14px] transition-[.3s] hover:scale-[1.1]'>CONTRACT</button></a>
                            <div className='flex  items-center home-hero-button-social-container w-[190px] justify-center mt-[10px]'>
                                <img className=' home-hero-button-social h-[35px] cursor-pointer' src="/assets/twitter.svg" alt="" />
                                <img className=' home-hero-button-social h-[35px] cursor-pointer' src="/assets/telegram.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right w-[50%] flex justify-center relative z-[2]">
                {/* <SVGTargetAnimation style={'absolute right-[-20%] bottom-[18%] opacity-[.8]'}/> */}
                    <div className='bg-[#ffffff16] backdrop-blur-[4px] hero-price-indicator relative z-[] rounded-[30px] h-[800px] w-[88%] buy-tupl-shadow mt-[45px] py-[40px] px-[30px]'>
                    
                        <div className='flex gap-[20px] justify-center items-center bg-[]'>
                            <p className='font-poppins indicator-heading font-[700] text-[32px] gradient-text'>Stage 1:</p>
                            <p className='font-poppins indicator-heading font-[400] text-[32px] gradient-text'>BUY TUPL NOW</p>
                        </div>
                        <p className='text-[#999C9F] font-Inter indicator-sub-heading text-[19px] mt-[24px] text-center'>until price increase</p>
                        <div className='flex items-center justify-between mt-[24px]'>
                            <p className='font-[400] font-poppins text-[14px] text-[#999C9F]'>Current price: <span className='font-popins font-[700] text-[14px]'>$0.005625</span></p>
                            <p className='font-[400] font-poppins text-[14px] text-[#999C9F]'>Next stage price: <span className='font-popins font-[700] text-[14px]'>$0.006</span></p>
                        </div>
                        <div className='range-container'>
                            <div className="rangeSliderCont flex flex-col mt-[24px] rounded-[66px] h-[16px] relative w-full bg-[#D8D8D8]">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full h-[16px] rounded-[66px] bg-[#D8D8D8] appearance-none cursor-pointer relative z-[2]"
                                    style={{
                                        background: `linear-gradient(270deg, #6546C7 0%, #D339D5 100%) no-repeat`,
                                        backgroundSize: `${value}% 100%`,
                                        visibility: 'visible'
                                    }}
                                />
                                {/* <GearRotater style={`left-[${value}%]`}/> */}
                            </div>
                        </div>
                        <p className='font-[400] mt-[20px] font-poppins text-[14px] text-center text-[#999C9F]'>Raised: <span className='font-popins font-[700] text-[14px]'>$12,474,042.377</span></p>
                        <div className='flex justify-center'>
                            <div className='bg-[#6388C9] mt-[20px] h-[1px] w-[90%]'></div>
                        </div>
                        <p className='font-[400] mt-[24px] font-poppins text-[14px] text-center text-[#000000]'>1 TUPL = <span className='font-popins font-[400] text-[14px] gradient-text'>$0.005626</span></p>
                        <div className='flex justify-center gap-[30px] mt-[24px] '>
                            <button className='bgBtnShadow h-[37px] w-[150px] flex items-center justify-center gap-[5px] rounded-[5px] text-[white] bg-[#7165EA]'> <img className='h-[24px]' src="/assets/eth.svg" alt="" />ETH</button>
                            <button className='bgBtnShadow h-[37px] w-[150px] flex items-center justify-center gap-[5px] rounded-[5px] border-[#9A9A9A] border-[1px] hover:bg-[#7165EA] hover:text-[white]'> <img className='h-[24px]' src="/assets/usdt.svg" alt="" />USDT</button>
                        </div>
                        <div className='mt-[24px] flex items-center indicator-line-container justify-center gap-[20px]'>
                            <div className='h-[1px] indicator-line w-[25%] bg-[#999C9F]'></div>
                            <p className='font-popins font-[700] text-[14px] text-[#999C9F]'>ETH Balance: 0.00000</p>
                            <div className='h-[1px] indicator-line w-[25%] bg-[#999C9F]'></div>
                        </div>
                        <div className='flex justify-center gap-[30px] mt-[40px]'>
                            <div>
                                <p className='font-popins font-[700] text-[14px] mb-[3px] text-[#999C9F]'>Pay with ETH</p>
                                <div className='h-[37px] w-[150px] flex items-center px-[10px] justify-between gap-[5px] rounded-[5px] border-[1px] border-[#9A9A9A] bg-[white]'>
                                    <input className='w-[70%] placeholder-black outline-none border-none' placeholder='0' type="text" />
                                    <img className='h-[24px]' src="/assets/eth.svg" alt="" />
                                </div>
                            </div>
                            <div>
                                <p className='font-popins font-[700] text-[14px] mb-[3px] text-[#999C9F]'>Receive TUPL</p>
                                <div className='h-[37px] w-[150px] flex items-center px-[10px] justify-between gap-[5px] rounded-[5px] bg-[white] border-[#9A9A9A] border-[1px]'>
                                    <input className='w-[70%] placeholder-black outline-none border-none' placeholder='0' type="text" />
                                    <img className='h-[20px]' src="/assets/weblogo.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <button className='connectWalletBigBtn h-[54px] indicator-button-wrapper w-[100%] mt-[100px] gradient-bg rounded-[10px] flex items-center justify-center gap-[10px]'>
                            <img className='transition-[.4s] h-[20px]' src="/assets/walleticon.svg" alt="" />
                            <p className='text-[20px] indicator-button font-poppins'>CONNECT WALLET</p>
                        </button>
                        <div className='flex justify-center'>
                            <div className='bg-[#999c9ff7] mt-[18px] h-[1px] w-[90%]'></div>
                        </div>
                        <div className='flex iten-center mt-[30px] cursor-pointer justify-center gap-[8px]'>
                            <img src="/assets/iicon.svg" alt="" />
                            <Link className='' href="/howtobuy"><p className='text-[18px] indicator-i-text text-[#7072A6]'>How To Buy</p></Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeHero;
