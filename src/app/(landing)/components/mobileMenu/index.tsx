'use client';
import ThemeSwitch from '@/components/ ThemeSwitch';
import Icon from '@/components/Icon';
import NavLink from '@/components/navLink';
import Link from 'next/link';
import React, { useState } from 'react';

const styleActiveLink = (isActive: boolean) => {
   return ` hover:text-[#262626] p-2 hover:dark:text-[#e2e2e2] transition-all font-[500] text-[16px] p-1 ${isActive ? 'dark:text-[#e2e2e2] border-b dark:border-[#e2e2e2] border-[#262626] text-[#262626]' : 'dark:text-white text-[#090909]'}`;
};

function MobileMenu() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const closeMenu = () => setIsMobileMenuOpen(false);

   return (
      <>
         <button onClick={() => setIsMobileMenuOpen(true)} className='flex md:hidden'>
            <Icon name='menu' width={25} height={25} />
         </button>

         <div className={`fixed flex md:hidden justify-center dark:bg-[#19191f] bg-[#c7c7c7] backdrop-blur-[10px] items-center inset-0 transition-all z-[9999] ${isMobileMenuOpen ? 'w-full h-screen scale-[1] opacity-100' : 'w-0 h-0 opacity-0'}`}>
            <button className='absolute flex items-center justify-center top-[10px] right-[10px]' onClick={closeMenu}>
               <Icon name='close' width={35} height={35} />
            </button>
            <nav
               className='flex flex-col items-center gap-[10px]'
               onClick={(e) => {
                  if (e.target !== e.currentTarget) {
                     closeMenu();
                  }
               }}>
               <li className='mb-7'>
                  <ThemeSwitch />
               </li>
               <NavLink href={'/'} className={styleActiveLink}>
                  Home
               </NavLink>

               <NavLink href={'/about'} className={styleActiveLink}>
                  About
               </NavLink>

               <NavLink href={'/contact'} className={styleActiveLink}>
                  Contact
               </NavLink>

               <Link href='/login'>
                  <button className='dark:bg-primary bg-primary-dark rounded-[4px] border-none mt-2 py-1 px-3 hover:bg-primary-light transition-all text-[#f6f6f6] font-[500] outline-none text-[18px]'>Login</button>
               </Link>
            </nav>
         </div>
      </>
   );
}

export default MobileMenu;
