import React from "react";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => (
  <div>
    <nav>
      <Link href="/">
        <a className="flex no-underline font-semibold text-slate-500">
          <Image src="/favicon.ico" alt="me" width="48" height="48" />

          <div className="ml-2 text-4xl">Hacker News</div>
        </a>
      </Link>
    </nav>

    {children}
  </div>
);

export default Layout;
