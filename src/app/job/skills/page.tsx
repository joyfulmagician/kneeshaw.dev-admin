import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import JobSkillsList from "@/components/job/skills/SkillList";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Skills`,
  description: `${SITE_TITLE} - Job Skills`
};

export default async function Skills() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobSkillsList />
    </section>
  );
}
