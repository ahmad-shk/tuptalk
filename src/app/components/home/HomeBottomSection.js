import React from 'react';
import Link from 'next/link';

function HomeBottomSection() {
  return (
    <div>
      <div className='flex items-center flex-col mt-[100px]'>
        <img src="/assets/upline.svg" alt="" />
        <Link href="/">
          <div className='flex items-center gap-[10px]'>
            <img className='h-[80px]' src="/assets/weblogo.svg" alt="" />
            <img className='h-[17px]' src="/assets/logotext.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className='w-[80%] m-auto'>
        <p className='font-[400] text-[24px] font-poppins'>Built on the ETH blockchain, is a modern decentralized social network that strives to increase the link between content creators and their audiences.
          Content creators can token-gate their content, granting access only to supporters who have an TUPL or pay a membership fee in $TUPL</p>
      </div>
    </div>
  );
}

export default HomeBottomSection;
