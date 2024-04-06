'use client';
import { signIn } from 'next-auth/react';
import React, { FormEvent } from 'react';

function page() {
   const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         const res = await signIn('credentials', { username: '', password: '', redirect: true, callbackUrl: '/dashboard' });
         console.log(res);
      } catch (err) {
         console.log(err);
      } finally {
      }
   };

   return (
      <div className='min-h-screen w-full flex items-center justify-center px-[16px]'>
         <form onSubmit={submitHandler} className='flex flex-col w-full gap-[17px] p-[22px]'>
            <input type='text' name='username' className='px-[12px] py-[6px] bg-[white]' />
            <input type='password' name='password' className='px-[12px] py-[6px] bg-[white]' />
            <button type='submit' className='bg-[red] w-1/2 mx-auto'>
               submit
            </button>
         </form>
      </div>
   );
}

export default page;
