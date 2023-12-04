"use client";

import Link from "next/link";

import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/services/ServiceCard";
import { useEffect, useState } from "react";
import { getAllServices } from "@/app/api/ServiceService";

export default function ServiceList() {
  const [services, setServices] = useState<IService[]>([]);

  const initialize = async () => {
    const res = await getAllServices();
    setServices(res.data.data);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <div className="mr-[20px] flex justify-end">
        <Link href="/service/create">
          <Button type="button">
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-[60px]">
        {services?.map((s) => (
          <ServiceCard
            key={s._id}
            image={`data:${s.image.contentType};base64,${Buffer.from(
              s.image.data
            ).toString("base64")}`}
            title={s.title}
            description={s.description}
          />
        ))}
      </div>
    </>
  );
}
