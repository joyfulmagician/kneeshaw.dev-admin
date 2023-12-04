import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import CreateGame from "@/components/game/CreateGame";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function AddGame() {
  return (
    <section className="p-[150px]">
      <CreateGame />
    </section>
  );
}
