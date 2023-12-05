"use client";

import Link from "next/link";

interface LogoProps {
  disableLink?: boolean;
}

export default function Logo({ disableLink }: LogoProps) {
  const logoImg = (
    <img
      className="min-h-[86px] min-w-[192px]"
      src="/logo/logo-black.png"
      alt="Logo"
    />
  );

  if (disableLink) return logoImg;

  return <Link href="/">{logoImg}</Link>;
}
