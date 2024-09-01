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
  const params = useParams()
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    setHash(window.location.hash)
  }, [params]);

  return (
    <nav className="w-full sticky top-0 z-10 bg-custom-stone">
      <div className="container px-16 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-custom-gray text-4xl">Taskly</h1>
          <ul className="flex items-center p-2">
            {navItems.map(({ href, label }) => {
              return (
                <li className="list-none" key={href}>
                  <Link
                    shallow={true}
                    href={href}
                    className={`${
                      hash === href ? "text-custom-orange" : "text-custom-gray"
                    } font-poppins text-sm font-sm block p-4 rounded-lg hover:bg-custom-orange hover:text-white hover:px-6 ease-in-out transition-all duration-300"`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
