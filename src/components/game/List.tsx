"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import GameCard from "@/components/game/Card";

export default function BlogList() {
  const cards = [
    {
      image: "/images/game/image01.png",
      title: "Titan Saga: Chains of Kronos",
      subtitle: "Purchased"
    }
  ];

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

      <div className="flex flex-wrap justify-center gap-[50px]">
        {cards.map((props) => (
          <GameCard
            key={props.title}
            image={props.image}
            title={props.title}
            subtitle={props.subtitle}
          />
        ))}
      </div>
    </>
  );
}