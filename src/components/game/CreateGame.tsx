"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateGame() {
  return (
    <div className="flex flex-col gap-[30px] p-[100px] text-[black]">
      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/game">
          <Button variant="outline" className="w-[80px]">
            <span className="text-[16px]">Cancel</span>
          </Button>
        </Link>

        <Button type="button" className="w-[80px]">
          <span className="text-[16px]">Save</span>
        </Button>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[18px]">
          <p className="w-[100px] text-center">Image:</p>
          <Input type="text" className="w-[500px]"></Input>
        </div>

        <div className="flex items-center gap-[18px]">
          <p className="w-[100px] text-center">Title:</p>
          <Input type="text" className="w-[500px]"></Input>
        </div>

        <div className="flex items-center gap-[18px]">
          <p className="w-[100px] text-center">Description:</p>
          <Input type="text" className="w-[500px]"></Input>
        </div>

        <div className="flex items-center gap-[18px]">
          <p className="w-[100px] text-center">Price:</p>
          <Input type="text" className="w-[500px]"></Input>
        </div>
      </div>
    </div>
  );
}
