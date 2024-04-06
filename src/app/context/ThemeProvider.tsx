'use client';

import { ThemeProvider as Provider } from 'next-themes';
import { useState, useEffect } from 'react';

type Props = {
   children: string | React.JSX.Element | React.JSX.Element[];
};

const ThemeProvider = ({ children }: Props) => {
   const [mounted, setMounted] = useState<boolean>(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return <>{children}</>;
   }

   return (
      <Provider enableSystem={true} attribute='class'>
         {children}
      </Provider>
   );
};

export default ThemeProvider;
