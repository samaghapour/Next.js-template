'use client';
import ThemeSwitch from '@/components/ ThemeSwitch';
import Image from 'next/image';
import React from 'react';
import MobileMenu from '../mobileMenu';
import NavLink from '@/components/navLink';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const styleActiveLink = (isActive: boolean) => {
   return ` hover:text-[#262626] hover:dark:text-[#e2e2e2] transition-all font-[500] text-[16px] p-1 ${isActive ? 'dark:text-[#e2e2e2] border-b dark:border-[#e2e2e2] border-[#262626] text-[#262626]' : 'dark:text-white text-[#090909]'}`;
};

function LandingHeader() {
   return (
      <header className='w-full sticky flex items-center justify-between top-0 left-0 dark:bg-[#19191fcd] bg-[#c7c7c7c2] backdrop-blur-[3px] lg:py-2 md:py-4 container py-2'>
         <Image src={'/images/next.svg'} className='w-[100px] h-[50px] lg:w-[140px] lg:h-[80px]' alt={'Next.js'} width={140} height={80} />

         <MobileMenu />
         <nav className='w-fit hidden md:flex items-center gap-[20px]'>
            <ThemeSwitch />
            <NavLink href={'/'} className={styleActiveLink}>
               Home
            </NavLink>
            <NavLink href={'/about'} className={styleActiveLink}>
               About
            </NavLink>
            <NavLink href={'/contact'} className={styleActiveLink}>
               Contact
            </NavLink>

            <Button onClick={() => signIn()}>Login</Button>
         </nav>
      </header>
   );
}

export default LandingHeader;
