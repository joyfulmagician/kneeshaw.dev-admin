import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import CreateBlog from "@/components/blog/CreateBlog";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Blog`,
  description: `${SITE_TITLE} - Create Blog`
};

export default function AddBlog() {
  return (
    <section className="p-4">
      <CreateBlog />
    </section>
  );
}
