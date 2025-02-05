import React from 'react';
import NavBar from '../components/NavBar';

function page() {
  return (
    <div>
      <NavBar/>
      <div className='h-screen w-[100%] bg-[] flex'>
      <div className="sidebar w-[275px] pr-[14px] h-[100%] bg-[]">
        <div className='h-[52px] rounded-r-[20px] pl-[20px] bg-[#EFEFFE] hover:bg-[#EFEFFE] cursor-pointer duration-300 flex items-center gap-[15px]'>
            <img className='h-[18px]' src="/assets/dashboardicon.svg" alt="" />
            <p className='text-[20px] leading-[30px] font-[400] font-poppins text-[#7169E6]'>Dashboard</p>
        </div>
        <div className='h-[52px] rounded-r-[20px] pl-[20px] hover:bg-[#EFEFFE] cursor-pointer duration-300 flex items-center gap-[15px]'>
            <img className='h-[24px]' src="/assets/importicon.svg" alt="" />
            <p className='text-[20px] leading-[30px] font-[400] font-poppins text-[#7169E6]'>Import token</p>
        </div>
        <div className='h-[52px] rounded-r-[20px] pl-[20px] hover:bg-[#EFEFFE] cursor-pointer duration-300 flex items-center gap-[15px]'>
            <img className='h-[20px]' src="/assets/dollericon.svg" alt="" />
            <p className='text-[20px] leading-[30px] font-[400] font-poppins text-[#7169E6]'>Buy TUPL</p>
        </div>
        <div className='flex justify-center my-[20px]'>
        <div className='w-[129px] h-[1px] bg-[#7169E6]'></div>
        </div>
        <div className='flex items-center gap-[10px] pl-[15px] mt-[40px]'>
        <img src="/assets/profileimage.svg" alt="" />
        <div>
            <p className='font-poppins font-[600] text-[16px] leading-[24px] text-[#707188]'>0xed1d...14A5</p>
            <p className='font-poppins font-[300] text-[14px] leading-[21px] text-[#707188]'>0 TUPL</p>
        </div>
        </div>
        <div className='h-[129px] ml-[14px] rounded-[10px] bg-[#EFEFFE] w-[226] py-[18px] gap-[10px] flex flex-col mt-[20px] px-[15px]'>
        <div className=' flex h-[37px] rounded-[5px] w-[199px] gradient-bg flex pl-[15px] gap-[15px] items-center'>
            <img className='h-[20px]' src="/assets/walleticon.svg" alt="" />
            <p className='font-poppins font-[300] text-[16px] leading-[45px]'>0xed1d...14A5</p>
        </div>
        <div className=' flex h-[37px] rounded-[5px] w-[199px] flex pl-[15px] gap-[15px] border-[#D9D9D9] border-[1px] items-center'>
            <img className='h-[15px]' src="/assets/disconnecticon.svg" alt="" />
            <p className='font-poppins font-[400] text-[16px] leading-[45px]'>DISCONNECT</p>
        </div>
        </div>
      </div>
      <div className="dashboard-main w-[100%] bg-[pink]"></div>
      <div>
      </div>

      </div>
    </div>
  );
}

export default page;
