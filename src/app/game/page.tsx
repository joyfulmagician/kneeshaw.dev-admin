import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Card from "@/components/game/Card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game`,
  description: `${SITE_TITLE} - Game`
};

export default function Game() {
  return (
    <main className="mt-[18px] flex flex-col gap-[60px] p-4">
      <div className="mr-[20px] mt-[36px] flex justify-end">
        <Link href="game/create">
          <Button type="button">
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-[60px]">
        <Card />
      </div>
    </main>
  );
}
