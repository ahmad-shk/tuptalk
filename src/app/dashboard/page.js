import React from 'react';
import NavBar from '../components/NavBar';
import DashboardNav from '../components/DashboardNav';

function page() {
  return (
    <div>
      <DashboardNav/>
      <div className='h-screen w-[100%] mt-[30px] flex'>
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
      <div className="dashboard-main w-[100%] bg-[]">
      <div className=' rounded-[20px] pt-[20px] relative bg-[] h-[240px]'>
     <img className='absolute top-[0px] opacity-[0.8] rounded-[20px] left-[0px] h-[100%] w-[100%] object-cover' src="/assets/dashboardhero.svg" alt="" />
        <p className=' relative z-[2] text-center font-[700] text-[24px] font-poppins leading-[36px]'>Presale Dashboard</p>
        <p className=' relative z-[2] text-center font-[300] text-[16px] leading-[24px] font-poppins'>Explore your transaction history, referral rewards and rank.</p>
      </div>
      <div className='w-[80%] pb-[80px] m-auto bg-[white] translate-y-[-70px]'>
      <div className='w-[325px] rounded-br-[100px] bg-[#F5F8FA] py-[20px] px-[20px]'>
      <div className='h-[70px] w-[70px] rounded-[50%] bg-[white] flex items-center justify-center'><img src="/assets/dashboardmadel.svg" alt="" /></div>
      <p className='font-[700] mt-[10px] text-[32px] font-poppins flex items-center gap-[10px]'>O <span className='font-[400] text-[32px] font-poppins'>TUPL</span></p>
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
        <div className='h-[60px] bg-[#CBCFEE] flex items-center justify-between px-[50px]'>
            <p className=' font-[600] text-[16px] font-poppins'>$  AMOUNT</p>
            <p className=' font-[600] text-[16px] font-poppins'>#  TRANSACTION HASH</p>
            <p  className='flex gap-[4px] font-[600] text-[16px] font-poppins'><img src="/assets/purchasetime.svg" alt="" />PURCHASE TIMESTAMP</p>
        </div>
        <p className='font-[400] text-[16px] font-poppins text-center py-[20px]'>No transaction found.</p>
      </div>
        
      </div>

      </div>
      <div>
      </div>

      </div>
    </div>
  );
}

export default page;
