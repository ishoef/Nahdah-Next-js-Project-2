import { signIn } from "@/auth";

export default function doSignIn() {
  return (
    <form
      action={async () => {
        await signIn("google");
      }}
    >
      <button type="submit">Sign in with Google</button>
    </form>
  );
}
