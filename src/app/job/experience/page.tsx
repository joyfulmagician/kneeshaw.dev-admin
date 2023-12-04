import { Metadata } from "next";

import JobExperiencesList from "@/components/job/experience/ExperienceList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Experience`,
  description: `${SITE_TITLE} - Job Experience`
};

export default function Experience() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobExperiencesList />
    </section>
  );
}
