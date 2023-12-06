import { Metadata } from "next";

import CreateBlog from "@/components/blog/CreateBlog";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Blog`,
  description: `${SITE_TITLE} - Create Blog`
};

export default function AddBlog() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <CreateBlog />
    </section>
  );
}
