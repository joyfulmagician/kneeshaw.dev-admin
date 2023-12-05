import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import GameList from "@/components/game/List";

import Link from "next/link";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game`,
  description: `${SITE_TITLE} - Game`
};

export default function Game() {
  return (
    <main className="mt-[18px] flex flex-col gap-[60px] p-4">
      <GameList />
    </main>
  );
}
