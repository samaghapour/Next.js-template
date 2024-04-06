'use client';
import Link, { LinkProps } from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends LinkProps {
   href: string;
   className?: (isActive: boolean) => string;
   children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, className, children, ...rest }) => {
   const pathname = usePathname();
   const isActive = pathname === href;

   return (
      <Link href={href} className={className ? className(isActive) : ''} {...rest}>
         {children}
      </Link>
   );
};

export default NavLink;
