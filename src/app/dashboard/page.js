'use client'
import React, { useEffect, useState ,useRef} from 'react';
import NavBar from '../components/NavBar';
import DashboardNav from '../components/DashboardNav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function page() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const mainDiv = document.querySelector('.dashboard-main');
      if (mainDiv) {
        const scrollTop = mainDiv.scrollTop;
        const scrollHeight = mainDiv.scrollHeight - mainDiv.clientHeight;

        // Calculate percentage scrolled
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        // Show icon after 2% scroll, and hide it when user scrolls back to the top
        if (scrollPercentage >= 2) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    const mainDiv = document.querySelector('.dashboard-main');
    if (mainDiv) {
      mainDiv.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainDiv) {
        mainDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    const mainDiv = document.querySelector('.dashboard-main');
    if (mainDiv) {
      mainDiv.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  const [value, setValue] = useState(true);
  const pathname = usePathname();
  const handleDownload = () => {
    window.open('/assets/tuptalkinfo.pdf', '_blank'); // Opens the PDF in a new tab
};

const wholePage = useRef(null);
const dashboardImg = useRef(null);
const dashboardModal = useRef(null);

useGSAP(()=>{
  gsap.to(wholePage.current, {
    scale: 1,
    delay: .3,
    duration: .8,
    transformOrigin: 'top',
    onComplete: ()=>{
      gsap.to(dashboardImg.current, {
        opacity: .8,
        x: 0,
        duration: .4,
        onComplete: ()=>{
          gsap.to(dashboardModal.current, {
            opacity: 1,
            y: -70,
            duration: .4
          })
        }
      })
    }
  })
})

  return (
    <div className=''>
    <div
      className={`cursor-pointer fixed bottom-[60px] bottomtotop right-[25px] z-[9999] border-[2px] border-[#4A3AFF]  gap-[0px] min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex flex-col items-center justify-center transition-opacity duration-300 ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
       <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-[#4A3AFF]">
            <path
              fill-rule="evenodd"
              d="M12 21c-.414 0-.75-.336-.75-.75V7.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12.75 7.06v13.19c0 .414-.336.75-.75.75z"
              clip-rule="evenodd" />
          </svg>
    </div>
    <div ref={wholePage} className='scale-0'>
      <DashboardNav setValue={setValue} value={value} />
      <div className=' bg-[] dashboard-inner w-[100%] pt-[0px] flex' style={{ height: "calc(100vh - 100px)" }}>
        <div className={`sidebar dashboard-sidebar-2 w-[315px] scrollnone overflow-y-scroll duration-700 pr-[14px] bg-[]`} >
          <div className='h-[52px] rounded-r-[20px] pl-[20px] bg-[#EFEFFE] hover:bg-[#EFEFFE] cursor-pointer duration-300 flex items-center gap-[15px]'>
            <img className='h-[18px]' src="/assets/dashboardicon.svg" alt="" />
            <p className='text-[18px] leading-[30px] font-[400] font-poppins text-nowrap text-[#7169E6]'>Dashboard</p>
          </div>
          <div className='flex flex-col bg-[] justify-center items-center mt-[20px] gap-[27px]'>
          </div>
          <div className='flex items-center gap-[10px] pl-[15px] mt-[40px]'>
            <img src="/assets/profileimage.svg" alt="" />
            <div>
              <p className='font-poppins font-[600] text-nowrap text-[16px] leading-[24px] text-[#707188]'>0xed1d...14A5</p>
              <p className='font-poppins font-[300] text-nowrap text-[14px] leading-[21px] text-[#707188]'>0 TUPL</p>
            </div>
          </div>
          <div className='min-h-[129px] ml-[14px] rounded-[10px] bg-[#EFEFFE] w-[226] py-[18px] gap-[10px] flex flex-col mt-[20px] px-[15px]'>
            <div className=' flex h-[37px] rounded-[5px] w-[199px] gradient-bg flex pl-[15px] gap-[15px] items-center'>
              <img className='h-[20px]' src="/assets/walleticon.svg" alt="" />
              <p className='font-poppins font-[300] text-nowrap text-[16px] leading-[45px]'>0xed1d...14A5</p>
            </div>
            <div className=' flex h-[37px] rounded-[5px] w-[199px] flex pl-[15px] gap-[15px] border-[#D9D9D9] border-[1px] items-center'>
              <img className='h-[15px]' src="/assets/disconnecticon.svg" alt="" />
              <p className='font-poppins font-[400] text-nowrap text-[16px] leading-[45px]'>DISCONNECT</p>
            </div>
            <div className='flex  items-center home-hero-button-social-container gap-[5px] justify-center mt-[5px]'>
              <img className=' home-hero-button-social h-[30px] cursor-pointer' src="/assets/twitter.svg" alt="" />
              <img className=' home-hero-button-social h-[32px] cursor-pointer' src="/assets/telegram.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={`sidebar dashboard-sidebar scrollnone w-[240px] ${value ? 'translate-x-[-100%]' : 'translate-x-[0%]'} absolute z-[10] bg-[white] overflow-y-scroll duration-700 bg-[]`} style={{ height: "calc(100vh - 100px)" }}>
          <div className='h-[30px] w-[30px] rounded-[50%] bg-[#738DED] text-[20px] font-[500] flex items-center justify-center text-white absolute top-[10px] right-[10px]' onClick={() => { setValue(!value) }}>X</div>
          <div className='h-[52px] rounded-r-[20px] pl-[20px] bg-[#EFEFFE] hover:bg-[#EFEFFE] cursor-pointer duration-300 flex items-center gap-[15px]'>
            <img className='h-[18px]' src="/assets/dashboardicon.svg" alt="" />
            <p className='text-[18px] leading-[30px] font-[400] font-poppins text-nowrap text-[#7169E6]'>Dashboard</p>
          </div>
          <div className='flex justify-center my-[20px]'>
            <div className='w-[129px] h-[1px] bg-[#7169E6]'></div>
          </div>
          <div className='flex flex-col bg-[] justify-center items-center mt-[20px] gap-[27px]'>
            <Link href="/">
              <p className='hover:scale-[1.05] duration-300 text-[#707188] text-nowrap font-[400] text-[18px] font-Poppins'>Home</p>
              <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
            </Link>
            <Link href="/howtobuy">
              <p className='hover:scale-[1.05] duration-300 font-[400] text-nowrap text-[#707188] text-[18px] font-Poppins'>How to buy</p>
              <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/howtobuy" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
            </Link>
            <Link href=""  onClick={handleDownload}>
              <p className='hover:scale-[1.05] duration-300 font-[400] text-nowrap text-[#707188] text-[18px] font-Poppins'>Whitepaper</p>
              <div className={`h-[2px] w-[100%]  bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
            </Link>
            <Link href="/docs">
              <p className='font-[400] text-[18px] text-[#707188] text-nowrap font-Poppins'>Docs</p>
              <div className={`h-[2px] w-[100%] bg-gradient-to-r from-[#6545C8] to-[#D943C6] ${pathname === "/docs" ? 'opacity-[1]' : 'opacity-[0]'} `}></div>
            </Link>
          </div>
          <div className='flex items-center gap-[10px] pl-[15px] mt-[40px]'>
            <img src="/assets/profileimage.svg" alt="" />
            <div>
              <p className='font-poppins font-[600] text-nowrap text-[16px] leading-[24px] text-[#707188]'>0xed1d...14A5</p>
              <p className='font-poppins font-[300] text-nowrap text-[14px] leading-[21px] text-[#707188]'>0 TUPL</p>
            </div>
          </div>
          <div className='min-h-[129px] ml-[14px] rounded-[10px] bg-[#EFEFFE] w-[226] py-[18px] gap-[10px] flex flex-col mt-[20px] px-[15px]'>
            <div className=' flex h-[37px] rounded-[5px] w-[199px] gradient-bg flex pl-[15px] gap-[15px] items-center'>
              <img className='h-[20px]' src="/assets/walleticon.svg" alt="" />
              <p className='font-poppins font-[300] text-nowrap text-[16px] leading-[45px]'>0xed1d...14A5</p>
            </div>
            <div className=' flex h-[37px] rounded-[5px] w-[199px] flex pl-[15px] gap-[15px] border-[#D9D9D9] border-[1px] items-center'>
              <img className='h-[15px]' src="/assets/disconnecticon.svg" alt="" />
              <p className='font-poppins font-[400] text-nowrap text-[16px] leading-[45px]'>DISCONNECT</p>
            </div>
            <div className='flex  items-center home-hero-button-social-container gap-[5px] justify-center mt-[5px]'>
              <img className=' home-hero-button-social h-[30px] cursor-pointer' src="/assets/twitter.svg" alt="" />
              <img className=' home-hero-button-social h-[32px] cursor-pointer' src="/assets/telegram.svg" alt="" />
            </div>
          </div>
        </div>



        <div className="dashboard-main w-[100%] scrollnone bg-[] overflow-y-auto" >
          <div className=' rounded-l-[20px] dashboard-banner pt-[20px] relative bg-[] h-[240px]'>
            <img ref={dashboardImg} className='opacity-0 translate-x-[300px] absolute top-[0px] dashboard-banner rounded-l-[20px] left-[0px] h-[100%] w-[100%] object-cover' src="/assets/dashboardhero.svg" alt="" />
            <p className=' relative z-[2] dashboard-heading text-center font-[700] text-[24px] font-poppins leading-[36px]'>Presale Dashboard</p>
            <p className=' relative z-[2] dashboard-sub-heading text-center font-[300] text-[16px] leading-[24px] font-poppins'>Explore your transaction history.</p>
          </div>
          <div ref={dashboardModal} className='opacity-0 w-[80%] dashboard-table-container pb-[80px] m-auto bg-[white] translate-y-[270px]'>
            <div className='w-[325px] rounded-br-[100px] bg-[#F5F8FA] py-[20px] px-[20px]'>
              <div className='h-[70px] w-[70px] rounded-[50%] bg-[white] flex items-center justify-center'><img src="/assets/dashboardmadel.svg" alt="" /></div>
              <p className='font-[700] mt-[10px] text-[32px] dashboard-tupl-price font-poppins flex items-center gap-[10px]'>5.123.456 <span className='font-[400] dashboard-tupl-price text-[32px] font-poppins'>TUPL</span></p>
              <p className='text-[#707188] mt-[25px] text-[14px] font-[400] font-poppins flex items-center gap-[10px]'>Estimated USD Valuation: <span className='text-[#707188] text-[14px] font-[700] font-poppins'>$0.005625</span></p>
              <p className='text-[#7169E6] text-[16px] font-[400] font-poppins'>Total Assets</p>
            </div>
            <div className='w-[100%]  bg-[#F5F8FA] mt-[55px]'>
              <div className="purchase-history-header flex justify-between px-[30px] py-[15px]">
                <div>
                  <p className='font-poppins font-[400] text-[14px]'>Purchase History</p>
                  <p className='font-poppins ml-[5px] font-[400] text-[14px] text-[#7169E6]'>(Showing from to of 0 records)</p>
                </div>
                <div>
                  <p className='font-poppins font-[400] text-[14px]'>Page</p>
                  <p className='font-poppins font-[400] text-[14px] text-[#8B8C9E]'>1 of 1</p>
                </div>
              </div>
              <div className='h-[60px] scrollnone bg-[#CBCFEE] table-heading-container flex items-center justify-between px-[50px]'>
                <p className=' text-nowrap table-heading font-[600] text-[16px] font-poppins'>$  AMOUNT</p>
                <p className=' text-nowrap table-heading font-[600] text-[16px] font-poppins'>#  TRANSACTION HASH</p>
                <p className=' text-nowrap table-heading flex gap-[4px] font-[600] text-[16px] font-poppins'><img src="/assets/purchasetime.svg" alt="" />PURCHASE TIMESTAMP</p>
              </div>
              <p className='font-[400] text-[16px] font-poppins text-center py-[20px]'>No transaction found.</p>
            </div>

          </div>

        </div>
        <div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default page;
