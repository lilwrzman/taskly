import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { NextAuthProvider } from "./providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import LenisScroll from "./components/LenisScroll";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Taskly",
  description: "Atur tugas harian Anda dengan mudah.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playfairDisplay.className} w-full`}>
        <LenisScroll/>
        <NextAuthProvider session={session}>
          <main className="w-full flex flex-col min-h-screen">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
