'use client'
import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function page() {

 const aboutImags = useRef([]);
 const aboutParas = useRef([]);

useGSAP(()=>{
  aboutImags.current.forEach((img, i)=>{
    gsap.to(aboutImags.current[i], {
      scale: 1,
      duration: .8,
      transformOrigin: 'center',
      scrollTrigger: {
        trigger: aboutImags.current[i],
      }
    })

    gsap.to(aboutParas.current[i], {
      opacity: 1,
      x: 0,
      duration: .6,
      scrollTrigger: {
        trigger: aboutParas.current[i],
      }
    })
  })
})

  return (
    <div>
      <NavBar/>
      <div className='pt-[80px]'>
      <PageHeader heading={"ABOUT US"} subheading={"About us"}/>
      <div className="about-inner-upper-container flex px-[80px] mt-[70px]">
        <div className="upper-left w-[55%]">
          <p ref={e=>aboutParas.current[0]=e} className='opacity-0 translate-x-[-100px] font-[400] about-text-1 text-[28px] font-inter leading-[45px]'>Tuptalk is a cutting-edge voice chat and radio broadcasting app that also incorporates robust social network functionalities, enabling seamless communication for businesses, influencers, communities, and friends. The rise of social networks has reshaped the way people connect and communicate, and Tuptalk is designed to harness that power by providing a comprehensive platform that integrates group calling, audio conferencing, and live radio broadcasts. Whether you’re a business looking to expand your digital footprint, an influencer aiming to increase your audience engagement, or simply someone who wants to stay connected with friends, Tuptalk offers a versatile solution for all your communication needs.</p>
        </div>
        <div className="upper-right w-[45%]">
          <img ref={e=>aboutImags.current[0]=e} className='scale-0 about-images' src="/assets/aboutrightimg.svg" alt="" />
        </div>
      </div>
      <div className="about-inner-lower-container flex px-[80px] mt-[0px]">
        <div className="lower-left w-[45%] bg-[]">
        <img ref={e=>aboutImags.current[1]=e} className='scale-0 about-images object-cover' src="/assets/aboutleftimg.svg" alt="" />
        </div>
        <div className="lower-right w-[55%] bg-[] flex items-center">
        <p ref={e=>aboutParas.current[1]=e} className='opacity-0 translate-x-[-100px] font-[400] about-text-2 text-[28px] font-inter leading-[45px]'>
        Expanding Reach Through Social Networks One of the greatest benefits of integrating social networks with communication platforms like Tuptalk is the ability to expand your reach. For example, when a user hosts a group voice chat or a live radio session, they can share the session with their social network followers. This instant access to a large audience allows for exponential growth in terms of reach and engagement. It’s an essential tool for businesses looking to market their services, influencers wanting to build their personal brand, or even online communities that thrive on active participation.
        </p>
        </div>
      </div>
      <Footer mt={"200px"} />
      </div>
    </div>
  );
}

export default page;
