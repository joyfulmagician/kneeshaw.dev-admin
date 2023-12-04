import { Metadata } from "next";

import JobServicesList from "@/components/job/services/ServicesList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Services`,
  description: `${SITE_TITLE} - Job Services`
};

const services = [
  {
    id: "1",
    service: "Godot",
    description: "description1"
  },
  {
    id: "2",
    service: "2D",
    description: "description2"
  },
  {
    id: "3",
    service: "3D",
    description: "description3"
  },
  {
    id: "4",
    service: "Shaders",
    description: "description4"
  },
  {
    id: "5",
    service: "Environment",
    description: "description5"
  },
  {
    id: "6",
    service: "System",
    description: "description6"
  }
];

export default function Services() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobServicesList />
    </section>
  );
}
