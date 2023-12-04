"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateService() {
  return (
    <div className="flex flex-col gap-[30px] text-[black]">
      <div className="flex items-center gap-[16px]">
        <span className="w-[100px] text-center">Image:</span>
        <Input type="file" className="w-[500px]" />
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[100px] text-center">Title:</span>
        <Input type="text" className="w-[500px]" />
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[100px] text-center">Description:</span>
        <Textarea placeholder="Type your message here." id="message" />
      </div>

      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/service">
          <Button variant="outline" className="w-[80px]">
            <span className="text-[16px]">Cancel</span>
          </Button>
        </Link>
        <Button type="button" className="w-[80px]">
          <span className="text-[16px]">Save</span>
        </Button>
      </div>
    </div>
  );
}
