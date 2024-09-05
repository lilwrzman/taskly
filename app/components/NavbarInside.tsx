"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/projects", label: "Proyek Anda" },
  { href: "/settings", label: "Pengaturan" },
];

const NavbarInside = ({ currentPage }: { currentPage: string }) => {
  const { data: session } = useSession();
  const [navMobileShow, setNavMobileShow] = useState<boolean>(false);

  return (
    <nav className="w-full sticky top-0 z-10 bg-white">
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
                        currentPage == href.substring(1, href.length)
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
          <div className="hidden md:flex gap-4">
            <div className="flex items-center">
              <button className="rounded-full bg-custom-stone p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-custom-gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/signin" })}
              className="font-medium text-sm text-custom-gray border-[1px] border-custom-gray rounded-lg flex gap-2 items-center pl-4 pr-5 py-2.5 hover:bg-custom-gray hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
              Keluar
            </button>
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
                          currentPage == href.substring(1, href.length)
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

export default NavbarInside;
