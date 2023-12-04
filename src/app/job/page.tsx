import { Metadata } from "next";

import { redirect } from "next/navigation";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job`,
  description: `${SITE_TITLE} - Job`
};

export default function Job() {
  return redirect("/job/skills");
}
