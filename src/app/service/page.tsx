import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import ServiceList from "@/components/services/List";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Service`,
  description: `${SITE_TITLE} - Service`
};

export default function Service() {
  return (
    <section className="mt-[24px] flex flex-col gap-[60px] p-4">
      <ServiceList />
    </section>
  );
}
