import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'About',
   description: 'Landing About page',
   keywords: ['About page'],
};

export default function page() {
   return (
      <div className='flex min-h-screen flex-col items-center justify-between'>
         <h5>Landing public page | about us</h5>
      </div>
   );
}
