import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import JobBudget from "@/components/job/budget/Budget";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Budget`,
  description: `${SITE_TITLE} - Job Budget`
};

export default function Budget() {
  return (
    <section className="flex justify-center">
      <JobBudget />
    </section>
  );
}
