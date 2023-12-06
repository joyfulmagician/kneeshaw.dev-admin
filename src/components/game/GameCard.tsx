"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";

import { Button } from "../ui/button";
import Link from "next/link";
import GameDeleteDialog from "./DeleteDialog";

interface Props {
  id: string;
  image: string;
  title: string;
  price: number;
  onDeleted: () => void;
}

export default function GameCard({
  id,
  image,
  title,
  price,
  onDeleted
}: Props) {
  return (
    <div className="relative flex h-[400px] w-[300px] flex-col rounded-[30px] border border-[2px] p-[16px]">
      <img
        src={image}
        alt={title}
        className="left-[50px] h-[260px] w-[260px] rounded-[10px] object-cover"
      />

      <div className="mt-[10px] flex-1 flex-col gap-[20px] pb-[5px]">
        <h3
          className="text-[17px] font-bold text-[#ED757F]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[18px] font-bold text-[#AFC348]">$ {price}</p>
      </div>

      <div className="flex flex-row items-center justify-around">
        <Link href={`/game/${id}`}>
          <Button variant="outline">
            <HiOutlinePencilSquare className="text-lg text-black" />
          </Button>
        </Link>

        <GameDeleteDialog id={id} onDeleted={onDeleted} />
      </div>
    </div>
  );
}
