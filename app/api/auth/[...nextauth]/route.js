import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

 
 

export const authoptions = NextAuth({
  providers: [
   
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),


    // EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
  ],
  debug: true,

  httpOptions: {
    timeout: 10000, // 10 seconds timeout
  },


  pages: {
    signIn: '/auth/signin', // Custom sign-in page if needed
    error: '/auth/error', // Error page if there's an issue
  },

  secret: process.env.NEXTAUTH_SECRET, // Secure token signing
});

// Named export for GET and POST methods
export const GET = authoptions;
export const POST = authoptions;