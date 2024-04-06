import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './context/AuthProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: {
      template: '%s | Next.js',
      default: 'Next.js',
      description: 'Next.js description',
      keywords: ['Next.js', 'React', 'JavaScript'],
      referrer: 'origin-when-cross-origin',
      //   authors: [{ name: 'Sam aghapour' }],
      //   creator: 'Sam Aghapour',
      //   publisher: 'Sam Aghapour',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <AuthProvider>
               <ThemeProvider>
                  <main className={`prose-sm dark:prose-invert prose-img:m-0 prose-video:m-0 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:bg-dark bg-light`}>{children}</main>
               </ThemeProvider>
            </AuthProvider>
         </body>
      </html>
   );
}
