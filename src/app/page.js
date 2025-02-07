import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/home/HomeHero';
import HomeRoadmap from './components/home/HomeRoadmap';
import HomeMarque from './components/home/HomeMarque';
import HomeTokenomics from './components/home/HomeTokenomics';
import Faqs from './components/home/Faqs';
import Footer from './components/Footer';
import HomeBottomSection from './components/home/HomeBottomSection';

function page() {
  return (
    <>
    <div className='overflow-x-hidden'>
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
