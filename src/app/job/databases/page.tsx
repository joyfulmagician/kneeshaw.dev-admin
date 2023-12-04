import { Metadata } from "next";

import JobDatabasesList from "@/components/job/databases/DatabaseList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Databases`,
  description: `${SITE_TITLE} - Job Databases`
};

export default function Databases() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobDatabasesList />
    </section>
  );
}
