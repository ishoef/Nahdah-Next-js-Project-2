"use client";

import { signIn, signOut } from "next-auth/react";

// Sign Out
export async function clientSignOut() {
  await signOut(); // ✅ client-safe logout
}

// Sign In with Google
export async function doSignIn() {
  await signIn("google", { callbackUrl: "/" });
}
