import { doSignIn } from "@/utils/authClient";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // TODO: Integrate Google OAuth / NextAuth
    doSignIn();
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="cursor-pointer w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
    >
      <FcGoogle size={20} className="text-red-500" />
      <span className="font-medium text-gray-700 dark:text-gray-200">
        Login with Google
      </span>
    </button>
  );
};

export default GoogleLogin;
