"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      router.push("/signin");
    } else {
      setErrors(data.errors);
    }
  };

  return (
    <div className="relative">
      {isLoading && <Spinner />}
      <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-2xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-1 text-custom-gray font-light text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Kembali
              </Link>
              <h1 className="text-2xl font-bold text-custom-gray">
                Daftar Akun
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-custom-gray"
                >
                  Nama Lengkap
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    id="name"
                    className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                    placeholder="Nama lengkap anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors && errors.name && (
                    <p className="text-red-500 font-normal text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>
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
                  <input
                    type="password"
                    id="password"
                    className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors && errors.password && (
                    <p className="text-red-500 font-normal text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full px-5 py-2.5 text-white bg-custom-gray hover:bg-gray-900 font-normal text-sm rounded-lg text-center"
                >
                  Daftar
                </button>
                <p className="text-sm font-light text-custom-gray text-center">
                  Sudah memiliki akun?{" "}
                  <Link
                    href="/signin"
                    className="font-medium text-custom-gray hover:underline"
                  >
                    Masuk
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
