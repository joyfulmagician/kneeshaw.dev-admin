import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import CreateGame from "@/components/game/CreateGame";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Blog`,
  description: `${SITE_TITLE} - Create Blog`
};

export default function AddGame() {
  return (
    <section className="p-4">
      <CreateGame />
    </section>
  );
}
