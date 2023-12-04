import { Metadata } from "next";

import BlogList from "@/components/blog/List";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`
};

export default function Blog() {
  return (
    <main className="mt-[18px] flex flex-col gap-[60px] p-4">
      <BlogList />
    </main>
  );
}
