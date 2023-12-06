"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GameCard from "./GameCard";
import { IGame } from "@/types/interfaces";
import { getAllGames } from "@/app/api/Game";

export default function GameList() {
  const [games, setGames] = useState<IGame[]>([]);

  const initialize = async () => {
    const res = await getAllGames();
    setGames(res.data.data);
  };

  const handleDeleted = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <div className="mr-[20px] mt-[36px] flex justify-end">
        <Link href="/game/create">
          <Button>
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-[60px]">
        {games?.map((g) => (
          <GameCard
            key={g._id}
            id={g._id}
            image={`data:${g.image.contentType};base64,${Buffer.from(
              g.image.data
            ).toString("base64")}`}
            title={g.title}
            price={g.price}
            onDeleted={handleDeleted}
          />
        ))}
      </div>
    </>
  );
}
