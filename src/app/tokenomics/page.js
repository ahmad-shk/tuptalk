import React from 'react';
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function page() {
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
    return (
        <div>
            <NavBar />
            <PageHeader heading={"TOKENOMICS"} subheading={"Tokenomics"} />
            <p className='font-[400] font-poppins mt-[30px]  text-[24px] token-heading docs-heading docs-main-heading leading-[36px] text-[black] text-center w-[60%] m-auto'>Tuptalk tokenomics is designed to ensure sustainability, equitable distribution, and long-term value for its ecosystem participants.</p>
            <div className="points-container px-[70px] mt-[120px]">
                <p className='text-[32px] font-[700] token-point-heading font-poppins gradient-text'>TOTAL SUPPLY</p>
                <p className='font-[400] text-[24px] token-point-para font-poppins leading-[36px] mt-[10px] pl-[80px]'>The total supply of TUPL tokens is capped at 10,000,000,000 TUPL.</p>
            </div>
            <div className='flex justify-center token-image-container relative bg-[] mt-[100px] mb-[30px]'>
                <img src="/assets/graphimg.svg" alt="" />
            </div>
            <div className="px-[70px] points-container">
      {points.map((point, index) => (
        <div key={index} className="points mt-[40px]">
          <p className="text-[32px] font-[700] token-point-heading font-poppins gradient-text uppercase">{point.title}</p>
          <p className="font-[400] text-[24px] token-point-para font-poppins leading-[36px] mt-[10px] pl-[80px]">
            {point.description}
          </p>
        </div>
      ))}
    </div>
    <Footer mt={"200px"} />
        </div>
    );
}

export default page;
