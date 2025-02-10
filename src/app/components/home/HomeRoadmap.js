'use client'
import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import HomeMarque from './HomeMarque';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function HomeRoadmap() {

    const roadmapTop = useRef(null);
    const roadmapText = useRef(null);
    const roadmapImg = useRef(null);
    const roadmapSteps = useRef([]);
    const featuresTop = useRef(null);
    const featuresText = useRef(null)
    const featuresImg = useRef([]);
    const featureBlogs = useRef([])

    useGSAP(()=>{
        gsap.to(roadmapTop.current, {
            transformOrigin: 'center',
            scale: 1,
            duration: .4,
            onComplete: ()=>{
                gsap.to(roadmapText.current, {
                    transformOrigin: 'center',
                    scale: 1,
                    duration: .4,
            })
            },
            scrollTrigger: {
                trigger: roadmapTop.current,
                start: '100px bottom',
                marker: true 
            }
        });
        gsap.to(roadmapImg.current, {
            opacity: 1,
            y: 0,
            duration: .4,
            scrollTrigger: {
                trigger: roadmapImg.current,
                start: '200px bottom',
                marker: true 
            }
        });
        gsap.to(roadmapSteps.current, {
            y: 0,
            duration: .4,
            opacity: 1,
            stagger: .2,
            scrollTrigger: {
                trigger:roadmapSteps.current,
                start: '100px bottom'
            }
        });
        gsap.to(featuresTop.current, {
            transformOrigin: 'center',
            scale: 1,
            duration: .4,
            onComplete: ()=>{
               gsap.to(featuresText.current, {
                transformOrigin: 'center',
                scale: 1,
                duration: .4,
            })
            },
            scrollTrigger: {
                trigger: featuresTop.current,
                start: '100px bottom',
                marker: true 
            }
        });
        gsap.to(featuresImg.current[0], {
            scale: 1,
            duration: .4,
            transformOrigin: 'center',
            onComplete: ()=>{
                gsap.to(featureBlogs.current[0], {
                   opacity: 1,
                   x: 0,
                   duration: .4
                })
            },
            scrollTrigger: {
                trigger: featuresImg.current[0],
                start: '100px bottom'
            }
        });
        gsap.to(featuresImg.current[1], {
            scale: 1.5,
            duration: .4,
            transformOrigin: 'center',
            onComplete: ()=>{
                gsap.to(featureBlogs.current[1], {
                   opacity: 1,
                   x: 0,
                   duration: .4
                })
            },
            scrollTrigger: {
                trigger: featuresImg.current[1],
                start: '100px bottom'
            }
        });
    }) 
    return (
        <>
            <div className='flex roadmap-header items-center flex-col'>
                <img ref={roadmapTop} src="/assets/upline.svg" alt="" className='scale-0' />
                <p ref={roadmapText} className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px] scale-0'>ROADMAP</p>
            </div>
            <div className='flex justify-center mt-[80px]'>
                <img ref={roadmapImg} src="/assets/roadmapimg.svg" alt="" className='roadmap-img opacity-0 translate-y-[-100px]' />
            </div>
            <div className=' bg-[] px-[20px] roadmap-points-wrapper flex flex-wrap gap-[10px] justify-center [&>*]:opacity-0 [&>*]:translate-y-[100px]'>
                <div ref={(e)=>roadmapSteps.current[0]=e} className=' roadmap-point-1 translate-y-[-40%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>01</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>PRESALE</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Team onboard</li>
                        <li>Token Contract Development </li>
                        <li>Presale Launch </li>
                        <li>Marketing</li>
                        <li>Token Claim</li>
                    </ul>
                </div>
                <div ref={(e)=>roadmapSteps.current[1]=e} className='roadmap-point-2 translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>02</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Marketing</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Ecosystem Development </li>
                        <li>Extensive Marketing </li>
                        <li>Influencer Marketing</li>
                    </ul>
                </div>
                <div ref={(e)=>roadmapSteps.current[2]=e} className=' roadmap-point-3 translate-y-[-16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>03</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>DEX Listing</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Dex listing</li>
                        <li>Smart Contract Audit</li>
                        <li>Marketing</li>
                        <li>Team Expansion</li>
                    </ul>
                </div>
                <div ref={(e)=>roadmapSteps.current[3]=e} className=' roadmap-point-4 translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>04</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>CEX Listing</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Cex listing </li>
                        <li>Marketing </li>
                        <li>Team Expansion</li>
                    </ul>
                </div>
                <div ref={(e)=>roadmapSteps.current[4]=e} className=' roadmap-point-5 translate-y-[-16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>05</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Development</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Platform Development </li>
                        <li>App Development </li>
                        <li>Extensive Marketing </li>
                        <li>Team Reward Program</li>
                    </ul>
                </div>
                <div ref={(e)=>roadmapSteps.current[5]=e} className=' roadmap-point-6 translate-y-[16%]'>
                    <p className='font-[700] text-[28px] text-[#102168] font-dmsans leading-[36px]'>06</p>
                    <p className='font-[700] text-[20px] text-[#102168] font-dmsans leading-[26px]'>Launch</p>
                    <ul className="list-disc disc-wrapper leading-[18px] mt-[6px] pl-5 text-[14px] font-[700] font-dmsans">
                        <li>Platform launch </li>
                        <li>App Launch </li>
                        <li>Community Reward</li>
                        <li>Mass Adoption </li>
                        <li>influencer Marketing</li>
                    </ul>
                </div>

            </div>
            <div className='py-[60px]'>
                <HomeMarque/>
            </div>
                <div className='flex items-center roadmap-header flex-col mt-[80px]'>
                <img ref={featuresTop} src="/assets/upline.svg" alt="" className='scale-0' />
                <p ref={featuresText} className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px] scale-0'>FEATURES</p>
            </div>
            <div className='mt-[80px] features-container px-[80px]'>
                <div className="roadmap-upper h-[350px] flex">
                    <div className="roadmap-upper-left h-[100%] w-[50%] bg-[]">
                        <img ref={(e)=>featuresImg.current[0]=e} className='scale-0' src="/assets/roadmapleftimg.svg" alt="" />
                    </div>
                    <div className="roadmap-upper-right h-[100%] w-[50%] flex items-center bg-[]">
                        <p ref={(e)=>featureBlogs.current[0]=e} className='text-[24px] font-[600]  roadmap-upper-text font-poppins leading-[45px] opacity-0 translate-x-[100px]'>Tuptalk is decentralized and allows users to earn cryptocurrency rewards through active participation, fostering a vibrant, engaged community. It offers content creators a transparent and fair social media experience.</p>
                    </div>
                </div>
                <div className="roadmap-lower h-[350px] flex mt-[50px]">
                    <div className="roadmap-lower-left h-[100%] w-[45%] flex items-center bg-[]">
                        <p ref={(e)=>featureBlogs.current[1]=e} className='text-[24px] font-[600] roadmap-lower-text font-poppins leading-[45px] opacity-0 translate-x-[-100px]'>Tuptalk enhances reach by integrating social networks, allowing users to share group chats or live radio sessions with followers. This instant access drives exponential growth and engagement, making it essential for businesses.</p>
                    </div>
                <div className="roadmap-lower-right h-[100%] w-[50%] bg-[] flex justify-center">
                        <img ref={(e)=>featuresImg.current[1]=e} className='scale-[0]' src="/assets/roadmaprightimg.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeRoadmap;
