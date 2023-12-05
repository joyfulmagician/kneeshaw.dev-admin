import { Metadata } from "next";

import GameList from "@/components/game/List";
import { SITE_TITLE } from "@/utils/constants";

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
