import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import UpdateGame from "@/components/game/UpdateGame";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Edit Game`,
  description: `${SITE_TITLE} - Edit Game`
};

export default function EditGame() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <UpdateGame />
    </section>
  );
}
