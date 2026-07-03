import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import "@uploadthing/react/styles.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// import Link from "next/link";

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-[#dbdda8]">
        {/* componente do uploadThing para eliminar o carregamento do botão de upload */}
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <div className="bg-[#dbdda8]">
          <nav className=" flex items-center  bg-[#669a2f] h-15 rounded-br-[50] ">
            <div className="flex w-1/2  ml-[5%]">
              <Link href={`/`}>
              <Image
                src="/images/logo-640-110.svg"
                priority={true}
                width={640}
                height={110}
                alt="logo"
                className="w-60"
              ></Image> 
              </Link>
            </div>
            <div className="flex w-1/2 justify-end mr-15 ">
              <MdEmail className="text-[#dbdda8] text-4xl " />
            </div>
          </nav>
          </div>

          <main className="bg-[#dbdda8]">{children}</main>
        
      </body>
    </html>
  );
}
