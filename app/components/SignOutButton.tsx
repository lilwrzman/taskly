"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="px-5 py-2.5 text-white bg-custom-gray hover:bg-gray-900 font-normal text-sm rounded-lg text-center"
      onClick={() => signOut({callbackUrl: "/signin"})}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
