import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Contact',
   description: 'Landing Contact Page',
   keywords: ['Contact Page'],
};

export default function page() {
   return (
      <div className='flex min-h-screen flex-col items-center justify-between'>
         <h5>Landing public page | contact us</h5>
      </div>
   );
}
