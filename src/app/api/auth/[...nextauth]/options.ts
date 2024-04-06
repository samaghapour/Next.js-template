import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const options: NextAuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      GithubProvider({
         clientId: process.env.GITHUB_ID as string,
         clientSecret: process.env.GITHUB_SECRET as string,
      }),
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            username: {
               label: 'Username',
               type: 'text',
               placeholder: 'Username',
            },
            password: { label: 'Password', type: 'password', placeholder: 'Password' },
         },
         async authorize(credentials) {
            const res = await fetch('/your/endpoint', {
               method: 'POST',
               body: JSON.stringify(credentials),
               headers: { 'Content-Type': 'application/json' },
            });
            const user = await res.json();

            // If no error and we have user data, return it
            if (res.ok && user) {
               return user;
            }
            // Return null if user data could not be retrieved
            return null;
         },
      }),
   ],
   pages: {
      signIn: '/auth/signin',
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
   },
};
