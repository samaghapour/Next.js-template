'use client';
import Icon from '@/components/Icon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
   const [mounted, setMounted] = useState(false);
   const { systemTheme, theme, setTheme } = useTheme();

   // useEffect only runs on the client, so now we can safely show the UI
   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   const renderThemeChanger = () => {
      if (!mounted) return null;

      const currentTheme = theme === 'system' ? systemTheme : theme;

      if (currentTheme === 'dark') {
         return (
            <div onClick={() => setTheme('light')} className='rounded-[50%] cursor-pointer p-2 bg-[#272626]'>
               <Icon name='sun' width={20} height={20} />
            </div>
         );
      } else {
         return (
            <div onClick={() => setTheme('dark')} className='rounded-[50%] cursor-pointer p-2 bg-[#cdcdcd]'>
               <Icon name='moon' width={20} height={20} />
            </div>
         );
      }
   };

   return <>{renderThemeChanger()}</>;
};

export default ThemeSwitch;
