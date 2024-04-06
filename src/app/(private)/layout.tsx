import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Dashboard',
   description: 'Dashboard Description',
};

export default function DashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <header>private dashboard layout header</header>
         {children}
      </div>
   );
}
