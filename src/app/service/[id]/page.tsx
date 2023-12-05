import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import UpdateService from "@/components/services/UpdateService";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Edit Service`,
  description: `${SITE_TITLE} - Edit Service`
};

export default function EditService() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <UpdateService />
    </section>
  );
}
