import Image from 'next/image';
import React from 'react';

function LandingFooter() {
   return (
      <div className='w-full lg:pt-[100px] pt-[20px] pb-[20px] container dark:bg-[#090909] bg-[#c7c7c7]'>
         <Image src={'/images/next.svg'} alt={'Next.js'} width={140} height={80} className='w-[100px] h-[50px] lg:w-[140px] lg:h-[80px]' />
         <p className='w-full lg:w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At blanditiis saepe possimus odio, est excepturi esse beatae voluptatibus ea nulla doloremque? Repellendus ea eum nesciunt officia, porro nam iste illo quo soluta similique corporis quis. Ut perferendis sequi maiores voluptate!</p>
         <div className='w-full lg:mt-[70px] flex items-center justify-center'>© {new Date().getFullYear()} All Rights Reserved</div>
      </div>
   );
}

export default LandingFooter;
