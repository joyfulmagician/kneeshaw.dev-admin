import { Metadata } from "next";

import JobScopesList from "@/components/job/scope/ScopeList";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Scope`,
  description: `${SITE_TITLE} - Job Scope`
};

export default function Scope() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <JobScopesList />
    </section>
  );
}
