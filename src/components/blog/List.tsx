"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/app/api/Blog";
import { IBlog } from "@/types/interfaces";

export default function BlogList() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const initialize = async () => {
    const res = await getAllBlogs();
    setBlogs(res.data.data);
  };

  const handleDeleted = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <div className="mr-[20px] mt-[36px] flex justify-end">
        <Link href="/blog/create">
          <Button>
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-[60px]">
        {blogs?.map((b) => (
          <BlogCard
            key={b._id}
            id={b._id}
            image={`data:${b.image.contentType};base64,${Buffer.from(
              b.image.data
            ).toString("base64")}`}
            title={b.title}
            description={b.description}
            onDeleted={handleDeleted}
          />
        ))}
      </div>
    </>
  );
}
