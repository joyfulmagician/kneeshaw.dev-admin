import { Metadata } from "next";

import JobServicesList from "@/components/job/services/ServicesList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Services`,
  description: `${SITE_TITLE} - Job Services`
};

export default function Services() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobServicesList />
    </section>
  );
}
