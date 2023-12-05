"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";

import { Button } from "../ui/button";
import Link from "next/link";
import ServiceDeleteDialog from "./DeleteDialog";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  onDeleted: () => void;
}

export default function ServiceCard({
  id,
  image,
  title,
  description,
  onDeleted
}: Props) {
  return (
    <div className="relative flex h-auto w-[200px] flex-col rounded-[10px] border pb-[10px] text-center">
      <img
        src={image}
        alt={title}
        className="absolute left-[50px] top-[-50px] h-[100px] w-[100px] object-cover"
      />

      <div className="mt-[60px] flex-1 flex-col gap-[5px] px-[15px] pb-[5px]">
        <h3
          className="text-[18px] font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[12px]">{description}</p>
      </div>

      <div className="flex flex-row items-center justify-around">
        <Link href={`/service/${id}`}>
          <Button variant="outline">
            <HiOutlinePencilSquare className="text-lg text-black" />
          </Button>
        </Link>

        <ServiceDeleteDialog id={id} onDeleted={onDeleted} />
      </div>
    </div>
  );
}
