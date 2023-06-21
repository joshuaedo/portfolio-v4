// "use client";
import "./globals.css";
import "./locomotive-scroll.css";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua Edo • Software Developer",
  description: "Joshua Edo's Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,201,1,300,600,400,700&display=swap"
        rel="stylesheet"
      />
      <body className={`bg-black text-white tracking-wider w-full`}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
