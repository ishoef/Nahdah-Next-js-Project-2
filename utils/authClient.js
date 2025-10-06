"use client";

import { signIn, signOut } from "next-auth/react";

export async function clientSignOut() {
  await signOut({ callbackUrl: "/" }); // ✅ client-safe logout
}

export async function doSignIn() {
  alert("signing in");
  await signIn("google", { callbackUrl: "/" });
}
