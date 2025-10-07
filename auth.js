import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./lib/dbConnect";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustedHosts: ["http://localhost:3000", "https://an-nahdah.vercel.app/"],
  secret: process.env.AUTH_SECRET,
  // debug: true,
});
