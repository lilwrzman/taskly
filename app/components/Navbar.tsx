"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" },
];

const Navbar = () => {
  const [navMobileShow, setNavMobileShow] = useState<boolean>(false);
  const params = useParams();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <nav className="w-full sticky top-0 z-10 bg-custom-stone">
      <div className="container p-4 md:py-0 md:px-8 lg:px-16 mx-auto">
        <div className="flex items-center justify-between relative">
          <h1 className="font-bold text-custom-gray text-2xl md:text-4xl">
            Taskly
          </h1>
          <div className="hidden md:block">
            <ul className="flex items-center p-2">
              {navItems.map(({ href, label }) => {
                return (
                  <li className="list-none" key={href}>
                    <Link
                      shallow={true}
                      href={href}
                      className={`${
                        hash === href
                          ? "text-custom-orange"
                          : "text-custom-gray"
                      } font-poppins text-sm font-sm block p-4 rounded-lg hover:bg-custom-orange hover:text-white hover:px-6 ease-in-out transition-all duration-300"`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:hidden flex items-center relative">
            <button
              className=""
              onClick={() => setNavMobileShow(!navMobileShow)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex gap-2">
            <Link
              href="/signup"
              className="font-poppins bg-custom-gray rounded-lg text-white text-sm font-medium px-5 py-2.5 hover:bg-gray-900 ease-in-out transition-all duration-300"
            >
              Daftar
            </Link>
            <Link
              href="/signin"
              className="font-poppins text-custom-gray text-sm font-medium px-5 py-2.5 rounded-lg border-[1px] border-transparent hover:border-custom-gray ease-in-out transition-all duration-300"
            >
              Masuk
            </Link>
          </div>
          {navMobileShow == true && (
            <div className="bg-white p-2 rounded-lg absolute left-0 right-0 top-[100%] mt-4 flex flex-col gap-4 w-full h-fit box-border md:hidden">
              <ul className="flex flex-col w-full">
                {navItems.map(({ href, label }) => {
                  return (
                    <li className="list-none" key={href}>
                      <Link
                        shallow={true}
                        href={href}
                        className={`${
                          hash === href
                            ? "text-custom-orange"
                            : "text-custom-gray"
                        } text-center w-full font-poppins text-sm font-sm block p-4 rounded-lg hover:bg-custom-orange hover:text-white hover:py-6 ease-in-out transition-all duration-300"`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <div className="flex flex-col w-full gap-2">
                <Link
                  href="/signup"
                  className="flex-1 text-center font-poppins bg-custom-gray rounded-lg text-white text-sm font-medium px-5 py-2.5 hover:bg-gray-900 ease-in-out transition-all duration-300"
                >
                  Daftar
                </Link>
                <Link
                  href="/signin"
                  className="flex-1 text-center font-poppins text-custom-gray text-sm font-medium px-5 py-2.5 rounded-lg border-[1px] border-transparent hover:border-custom-gray ease-in-out transition-all duration-300"
                >
                  Masuk
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
