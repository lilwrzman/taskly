"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";

const PreviousPageButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-custom-gray font-light text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 text-custom-gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      Kembali
    </button>
  );
};

const SignInButton = () => {
  return (
    <button
      type="submit"
      className="w-full px-5 py-2.5 text-white bg-custom-gray hover:bg-gray-900 font-normal text-sm rounded-lg text-center"
    >
      Masuk
    </button>
  );
};

export default function SignInPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/protected");
    } else {
      if (res?.error) {
        const parsedErrors = JSON.parse(res.error);
        setErrors(parsedErrors);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && <Spinner />}
      <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-2xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <PreviousPageButton />
              <h1 className="text-2xl font-bold text-custom-gray">
                Masuk ke Akun Anda
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-custom-gray"
                >
                  Alamat Email
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    id="email"
                    className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors && errors.email && (
                    <p className="text-red-500 font-normal text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-custom-gray"
                >
                  Kata Sandi
                </label>
                <div className="flex flex-col gap-1">
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="block w-full py-2.5 pl-4 pr-10 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" className="absolute right-2" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-custom-gray"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors && errors.password && (
                    <p className="text-red-500 font-normal text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SignInButton />
                <p className="text-sm font-light text-custom-gray text-center">
                  Belum memiliki akun?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-custom-gray hover:underline"
                  >
                    Daftar
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
