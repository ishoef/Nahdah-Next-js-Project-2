## Authentication (this is now for google login)
## for that use google provider only

1. Create a File named 'auth.js' in the root folder
   and write this codes

   ------
   import NextAuth from "next-auth";
   import GoogleProvider from "next-auth/providers/google";
    export const {
handlers: [GET, POST],
auth,
signIn,
signOut,
} = NextAuth({
providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}),
],
});

--

2. Create an API and folder is 'app/api/auth/[...nextauth]/route.js
   and write this 

   --
   import { auth } from "@/auth";

export const { GET, POST } = auth;


3. Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET 
   for that go to this URL : https://console.cloud.google.com/apis/credentials
   and create new credentials and get the id and key 

4. Get the AUTH_SECRET by genarete with this url: https://generate-secret.vercel.app/64 
   go in this url it generate automatically a secret key, Get it 