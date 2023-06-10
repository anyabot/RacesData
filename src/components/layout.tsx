import { ReactNode } from "react";

import Link from "next/link";
import NavBar from "./navbar";

export default function Layout({children}: {children: ReactNode}) {
  return <body>
    <NavBar/>
    <div className="container h-full mx-auto mt-4">{children}</div>
    </body>
}