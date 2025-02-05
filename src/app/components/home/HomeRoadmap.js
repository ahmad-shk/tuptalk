import React from 'react';
import Marquee from 'react-fast-marquee';
import HomeMarque from './HomeMarque';

function HomeRoadmap() {
    return (
        <>
            <div className='flex items-center flex-col'>
                <img src="/assets/upline.svg" alt="" />
                <p className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px]'>ROADMAP</p>
            </div>
            <div className='flex justify-center mt-[80px]'>
                <img src="/assets/roadmapimg.svg" alt="" />
            </div>
            <div className='h-[200px] bg-[] flex gap-[10px] justify-center'>
                <div className='translate-y-[-40%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>01</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>PRESALE</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Team onboard</li>
                        <li>Token Contract Development </li>
                        <li>Presale Launch </li>
                        <li>Marketing</li>
                        <li>Token Claim</li>
                    </ul>
                </div>
                <div className='translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>02</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Marketing</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Ecosystem Development </li>
                        <li>Extensive Marketing </li>
                        <li>Influencer Marketing</li>
                    </ul>
                </div>
                <div className='translate-y-[-16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>03</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>DEX Listing</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Dex listing</li>
                        <li>Smart Contract Audit</li>
                        <li>Marketing</li>
                        <li>Team Expansion</li>
                    </ul>
                </div>
                <div className='translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>04</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>CEX Listing</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Cex listing </li>
                        <li>Marketing </li>
                        <li>Team Expansion</li>
                    </ul>
                </div>
                <div className='translate-y-[-16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>05</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Development</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Platform Development </li>
                        <li>App Development </li>
                        <li>Extensive Marketing </li>
                        <li>Team Reward Program</li>
                    </ul>
                </div>
                <div className='translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>06</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Launch</p>
                    <ul className="list-disc leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Platform launch </li>
                        <li>App Launch </li>
                        <li>Community Reward</li>
                        <li>Mass Adoption </li>
                        <li>influencer Marketing</li>
                    </ul>
                </div>

            </div>
                <HomeMarque/>
                <div className='flex justify-center mt-[80px]'>
                <img src="/assets/upline.svg" alt="" />
            </div>
            {/* <div className='mt-[80px] px-[80px]'>
                <div className="roadmap-upper h-[350px] flex">
                    <div className="roadmap-upper-left h-[100%] w-[50%] bg-[]">
                        <img className='' src="/assets/roadmapleftimg.svg" alt="" />
                        <p className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px]'>FEATURES</p>
                    </div>
                    <div className="roadmap-upper-right h-[100%] w-[50%] flex items-center bg-[]">
                        <p className='text-[24px] font-[600] font-poppins leading-[45px]'>Tuptalk is decentralized and allows users to earn cryptocurrency rewards through active participation, fostering a vibrant, engaged community. It offers content creators a transparent and fair social media experience.</p>
                    </div>
                </div>
                <div className="roadmap-lower h-[350px] flex mt-[50px]">
                    <div className="roadmap-lower-left h-[100%] w-[45%] flex items-center bg-[]">
                        <p className='text-[24px] font-[600] font-poppins leading-[45px]'>Tuptalk enhances reach by integrating social networks, allowing users to share group chats or live radio sessions with followers. This instant access drives exponential growth and engagement, making it essential for businesses.</p>
                    </div>
                <div className="roadmap-lower-right h-[100%] w-[50%] bg-[] flex justify-center">
                        <img className='scale-[1.5]' src="/assets/roadmaprightimg.svg" alt="" />
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default HomeRoadmap;
