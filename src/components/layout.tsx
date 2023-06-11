import { ReactNode } from "react";

import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({children}: {children: ReactNode}) {
  return <body >
    <div className="flex flex-col h-screen">
    <NavBar/>
    <div className="container flex-grow mx-auto mt-4">{children}</div>
    <Footer/>
    </div>

    </body>
}