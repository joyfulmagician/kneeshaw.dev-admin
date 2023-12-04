import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import CreateBlog from "@/components/blog/CreateBlog";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function AddBlog() {
  return (
    <section className="p-[150px]">
      <CreateBlog />
    </section>
  );
}
