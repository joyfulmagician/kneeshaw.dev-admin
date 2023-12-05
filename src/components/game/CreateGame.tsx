"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateGame() {
  return (
    <div className="flex flex-col justify-center gap-[15px] rounded-xl p-[20px]">
      <input
        type="text"
        placeholder="Input Image"
        name="image"
        className="h-[52px] w-full rounded-[16px] border-[1px] border-[#36322f] bg-transparent  pl-[10px] "
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Input Title"
        name="title"
        onChange={handleChange}
        className="h-[52px] w-full rounded-[16px] border-[1px] border-[#36322f] bg-transparent pl-[10px]"
      />
      <input
        type="text"
        placeholder="Input Description"
        name="description"
        onChange={handleChange}
        className="h-[52px] w-full rounded-[16px] border-[1px] border-[#36322f] bg-transparent pl-[10px]"
      />
      <input
        type="number"
        placeholder="Input Price"
        name="price"
        onChange={handleChange}
        className="h-[52px] w-full rounded-[16px] border-[1px] border-[#36322f] bg-transparent pl-[10px]"
      />
      <button
        className="h-[52px] w-full rounded-[16px] bg-[#36322f] text-black text-white"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
}
