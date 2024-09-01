import Link from "next/link";

const navItems = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-custom-gray">
      <div className="container px-4 py-4 md:px-8 lg:px-16 mx-auto">
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="flex gap-4 divide-x items-center">
            <h1 className="font-bold text-white texl-2xl md:text-4xl">Taskly</h1>
            <div className="flex flex-col px-4">
              <ul className="flex gap-2 md:gap-4">
                {navItems.map(({ href, label }) => {
                  return (
                    <li className="list-none" key={href}>
                      <Link
                        shallow={true}
                        href={href}
                        className="text-white font-poppins font-light text-xs md:text-sm"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="text-white font-poppins font-light text-xs md:text-sm">
                &copy; Taskly. All right reserved.
              </p>
            </div>
          </div>
          <p className="text-white font-poppins font-light text-xs md:text-sm">Support egydya.edh12@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
