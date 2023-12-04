import { Metadata } from "next";

import JobPeriodsList from "@/components/job/period/PeriodList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Period`,
  description: `${SITE_TITLE} - Job Period`
};

export default function Period() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobPeriodsList />
    </section>
  );
}
