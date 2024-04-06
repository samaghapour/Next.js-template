import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Authentication',
   description: 'Authentication Description',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <div>{children}</div>;
}
