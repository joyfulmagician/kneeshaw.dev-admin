import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Layout from "./layout";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job`,
  description: `${SITE_TITLE} - Job`
};

export default function Job() {
  return redirect("/job/skills");
}
