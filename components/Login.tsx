"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex items-center justify-center flex-col">
      <Image
        src={
          "https://chromeunboxed.com/wp-content/uploads/2022/12/ChatGPT-Feature-1200x900.png"
        }
        height={300}
        width={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse "
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
