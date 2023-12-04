"use client";

import { Button } from "../ui/button";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({ image, title, description }: Props) {
  return (
    <div className="relative flex h-auto w-[200px] flex-col bg-gray-100 pb-[10px] text-center">
      <img
        src={image}
        alt={title}
        className="absolute left-[50px] top-[-50px] h-[100px] w-[100px] object-cover"
      />
      <div className="mt-[60px] flex-1 flex-col gap-[5px] px-[15px] pb-[15px]">
        <h3
          className="text-[18px] font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[12px]">{description}</p>
      </div>
      <div className="flex flex-row items-center justify-around">
        <Button variant="secondary" className="w-[70px] border">
          Edit
        </Button>
        <Button variant="secondary" className="w-[70px] border">
          Delete
        </Button>
      </div>
    </div>
  );
}
