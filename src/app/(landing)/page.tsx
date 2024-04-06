import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Landing Home Page',
   keywords: ['Home Page'],
};

export default function page() {
   return (
      <div className='min-h-screen container py-4'>
         <h5 className='prose-invert'>Landing public page</h5>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis beatae recusandae ipsum iusto atque quia omnis! Corporis aspernatur qui commodi ab impedit consequatur dolore excepturi a soluta beatae odit, quisquam, incidunt expedita totam perspiciatis, repellendus magnam. Asperiores atque voluptatum rem error, explicabo sit libero, doloremque odit incidunt consequatur eveniet enim.</p>
      </div>
   );
}
