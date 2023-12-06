import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import UpdateBlog from "@/components/blog/UpdateBlog";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Edit Blog`,
  description: `${SITE_TITLE} - Edit Blog`
};

export default function EditBlog() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <UpdateBlog />
    </section>
  );
}
