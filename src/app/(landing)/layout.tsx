import LandingHeader from './components/header';
import LandingFooter from './components/footer';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <LandingHeader />
         {children}
         <LandingFooter />
      </div>
   );
}
