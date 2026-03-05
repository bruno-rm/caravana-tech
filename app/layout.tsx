import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

export const metadata: Metadata = {
  title: "caravana.tech",
  description: "a serviço dos direitos digitais",
};

//"bg-gradient-to-b from-[#dbdda8] via-[#669a2f] to-[#48773a]"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#dbdda8]">
          <nav className=" flex items-center  bg-[#669a2f] h-15 rounded-br-[50] ">
            <div className="flex w-1/2  ml-[5%]">
              <Image
                src="/images/logo-640-110.png"
                width={640}
                height={110}
                alt="logo"
                className="w-60"
              ></Image>
            </div>
            <div className="flex w-1/2 justify-end mr-15 ">
              <MdEmail className="text-[#dbdda8] text-4xl " />
            </div>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
