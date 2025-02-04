import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/home/HomeHero';
import HomeRoadmap from './components/home/HomeRoadmap';
import HomeMarque from './components/home/HomeMarque';
import HomeTokenomics from './components/home/HomeTokenomics';
import Faqs from './components/home/Faqs';
import Footer from './components/Footer';

function page() {
  return (
    <>
      <NavBar/>
      <HomeHero/>
      <HomeRoadmap/>
      <HomeTokenomics/>
      <Faqs/>
      <Footer mt={"400px"}/>
      
    </>
  );
}

export default page;
