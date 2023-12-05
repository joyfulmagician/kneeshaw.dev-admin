"use client";

import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import { Button } from "../ui/button";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

export default function GameCard({ image, title, subtitle }: Props) {
  return (
    <div className="flex h-auto w-[320px] flex-col gap-[12px] rounded-[25px] border px-[24px] pt-[24px]">
      <img src={image} alt={image} />

      <h2 className="text-[17px] font-[700]">{title}</h2>

      <div className="flex flex-row items-center gap-[5px]">
        <IoMdCheckmark />
        <h4 className="text-[14px] font-[500]">{subtitle}</h4>
      </div>

      <div className="mt-[8px] flex justify-end">
        <Link
          href="/game/detail"
          type="Link"
          className="flex h-[40px] items-center justify-center rounded-[8px] border px-[20px] text-center text-[14px] font-semibold"
        >
          View details
        </Link>
      </div>

      <div className="flex flex-row items-center justify-around pb-[10px]">
        <Button className="bg-transparent hover:border hover:bg-transparent">
          <HiOutlinePencilSquare className="text-lg text-black" />
        </Button>

        <Button className="bg-transparent hover:border hover:bg-transparent">
          <MdDeleteOutline className="text-xl text-black" />
        </Button>
      </div>
    </div>
  );
}
