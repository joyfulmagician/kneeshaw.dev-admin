import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Settings`,
  description: `${SITE_TITLE} - Settings`
};

export default function Settings() {
  return <>Settings</>;
}
