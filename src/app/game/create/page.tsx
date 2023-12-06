import { Metadata } from "next";

import CreateGame from "@/components/game/CreateGame";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Game`,
  description: `${SITE_TITLE} - Create Game`
};

export default function AddGame() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <CreateGame />
    </section>
  );
}
