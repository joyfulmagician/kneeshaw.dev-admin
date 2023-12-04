"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "../ui/input";

export default function CreateService() {
  return (
    <div className="flex flex-col gap-[30px] p-[100px] text-[black]">
      <div className="flex flex-row justify-end gap-[20px]">
        <Button type="button" className="bg-[#36322f]">
          Save
        </Button>
        <Button
          type="button"
          className="border-[1px] border-[#36322f] bg-transparent text-[black]"
        >
          Cancel
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
      </div>
    </div>
  );
}
