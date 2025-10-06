import { signIn, signOut } from "@/auth";

// Sign In
export async function doSignIn() {
  alert("signing in");
  await signIn("google", { callbackUrl: "/" });
}

// ✅ Fixed Sign Out
export async function doSignOut() {
  await signOut({ redirectTo: "/" }); // ✅ Works fine (server-side)
}
