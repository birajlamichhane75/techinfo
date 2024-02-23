"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "./redux/provider";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          TechInfo
        </title>
      </head>
      <body className={inter.className}>

        <div className="w-[50%] mx-auto shadow-lg min-h-[100vh]">
          <div className="px-6 h-full">
            <ToastContainer />
            <Providers>{children}</Providers>
          </div>
        </div>

      </body>
    </html>
  );
}
