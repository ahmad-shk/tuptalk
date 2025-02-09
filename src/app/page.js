'use client'
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/home/HomeHero';
import HomeRoadmap from './components/home/HomeRoadmap';
import HomeMarque from './components/home/HomeMarque';
import HomeTokenomics from './components/home/HomeTokenomics';
import Faqs from './components/home/Faqs';
import Footer from './components/Footer';
import HomeBottomSection from './components/home/HomeBottomSection';

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
  return (
    <>
    <div className='overflow-x-hidden'>
    <div
      className={`cursor-pointer fixed bottom-[60px] bottomtotop right-[25px] z-[9999] border-[2px] border-[#4A3AFF]  gap-[0px] min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex flex-col items-center justify-center transition-opacity duration-300 ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
       <img className="rotate-[270deg] inline h-[15px]" src="/assets/bottomtotop.svg" alt="Scroll to Top" />
       <img className="rotate-[270deg] inline h-[15px]" src="/assets/bottomtotop.svg" alt="Scroll to Top" />
    </div>
      <NavBar />
      <HomeHero />
      <HomeRoadmap />
      <HomeTokenomics />
      <Faqs />
      <HomeBottomSection/>
      <Footer mt={"200px"} />
    </div>

    </>
  );
}

export default page;
