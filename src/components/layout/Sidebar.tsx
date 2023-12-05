/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import clsx from "clsx";

import Logo from "./Logo";

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="hidden h-[100vh] w-[240px] flex-col border-r-[1px] p-4 sm:flex">
      <div className="flex justify-center py-4">
        <Logo />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <Link
          href="/"
          className={clsx("text-[16px] ", pathName === "/" && "font-bold")}
        >
          Dashboard
        </Link>
        <Link
          href="/user"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/user") && "font-bold"
          )}
        >
          User
        </Link>
        <Link
          href="/game"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/game") && "font-bold"
          )}
        >
          Game
        </Link>
        <Link
          href="/blog"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/blog") && "font-bold"
          )}
        >
          Blog
        </Link>
        <Link
          href="/service"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/service") &&
              !pathName.includes("/job") &&
              "font-bold"
          )}
        >
          Service
        </Link>
        <Link
          href="/job/skills"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/job") && "font-bold"
          )}
        >
          Job
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href="/settings"
          className={clsx(
            "text-[16px] ",
            pathName.includes("/settings") && "font-bold"
          )}
        >
          Settings
        </Link>

        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
