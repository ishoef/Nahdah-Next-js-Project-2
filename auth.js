import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./lib/dbConnect";
import bcrypt from "bcryptjs";

// wait for the connected client
const client = await clientPromise; // top-level await in Next.js route modules is supported
const adapter = MongoDBAdapter(client);

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // credentials is a FormData or plain object depending on how called
        const email = credentials?.get
          ? credentials.get("email")
          : credentials?.email;
        const password = credentials?.get
          ? credentials.get("password")
          : credentials?.password;

        if (!email || !password) return null;

        const db = client.db("nahdahDB"); // optional: pass databaseName to adapter if needed
        const users = db.collection("users");

        // find user by email
        const userDoc = await users.findOne({
          email: String(email).toLowerCase(),
        });
        if (!userDoc) return null;

        // compare hashed password
        const isValid = await bcrypt.compare(
          String(password),
          userDoc.password
        );
        if (!isValid) return null;

        // return user object - must include id at minimum
        return {
          id: userDoc._id.toString(),
          email: userDoc.email,
          name: userDoc.name ?? null,
        };
      },
    }),
  ],

  
  session: {
    // using adapter -> defaults to "database"; you can leave this or explicitly set "database"
    strategy: "database",
  },
  // required in production: set AUTH_SECRET (or NEXTAUTH_SECRET)
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
});
