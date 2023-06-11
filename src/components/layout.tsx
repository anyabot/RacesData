import { ReactNode } from "react";

import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({children}: {children: ReactNode}) {
  return <body className="flex flex-col h-screen">
    <NavBar/>
    <div className="container h-full mx-auto mt-4">{children}</div>
    <Footer/>
    </body>
}