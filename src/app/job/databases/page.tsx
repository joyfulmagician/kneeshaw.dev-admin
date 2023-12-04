import { Metadata } from "next";

import JobDatabasesList from "@/components/job/databases/DatabaseList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Databases`,
  description: `${SITE_TITLE} - Job Databases`
};

const databases = [
  {
    id: "1",
    database: "Godot",
    description: "description1"
  },
  {
    id: "2",
    database: "2D",
    description: "description2"
  },
  {
    id: "3",
    database: "3D",
    description: "description3"
  },
  {
    id: "4",
    database: "Shaders",
    description: "description4"
  },
  {
    id: "5",
    database: "Environment",
    description: "description5"
  },
  {
    id: "6",
    database: "System",
    description: "description6"
  }
];

export default function Databases() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobDatabasesList />
    </section>
  );
}
