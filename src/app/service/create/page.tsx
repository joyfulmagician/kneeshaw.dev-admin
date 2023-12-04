import { Metadata } from "next";

import CreateService from "@/components/services/CreateService";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Service`,
  description: `${SITE_TITLE} - Create Service`
};

export default function AddService() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-[32px]">
      <CreateService />
    </section>
  );
}
