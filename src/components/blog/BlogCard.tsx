"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";

import { Button } from "../ui/button";
import Link from "next/link";
import BlogDeleteDialog from "./DeleteDialog";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  onDeleted: () => void;
}

export default function BlogCard({
  id,
  image,
  title,
  description,
  onDeleted
}: Props) {
  return (
    <div className="relative flex h-[350px] w-[300px] flex-col rounded-[30px] border border-[2px] pb-[10px] text-center">
      <img
        src={image}
        alt={title}
        className="left-[50px] h-[200px] w-[300px] rounded-t-[30px] object-cover"
      />

      <div className="mt-[10px] flex-1 flex-col gap-[20px] px-[15px] pb-[5px]">
        <h3
          className="text-[18px] font-bold text-[#ED757F]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[12px]">{description}</p>
      </div>

      <div className="flex flex-row items-center justify-around">
        <Link href={`/blog/${id}`}>
          <Button variant="outline">
            <HiOutlinePencilSquare className="text-lg text-black" />
          </Button>
        </Link>

        <BlogDeleteDialog id={id} onDeleted={onDeleted} />
      </div>
    </div>
  );
}
