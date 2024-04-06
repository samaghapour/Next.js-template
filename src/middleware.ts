//without a defined mather, this one line applies next-auth to the entire project.
export { default } from 'next-auth/middleware';

//applies next-auth only to matching routes - matcher can be regex.
export const config = {
   matcher: ['/dashboard/:path*'],
};
