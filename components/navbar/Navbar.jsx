"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import style from "./navbar.module.css";

const Navbar = () => {
  const session = useSession();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Blogs
      </Link>
      <div className={style.links}>
        <DarkModeToggle />
        {links.map((item) => (
          <Link key={item.id} href={item.url} className={style.link}>
            {item.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button onClick={signOut} className={style.logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
