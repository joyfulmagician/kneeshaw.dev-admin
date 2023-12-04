import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};

export default function UserEdit({ params }: { params: { id: number } }) {
  return <main></main>;
}
