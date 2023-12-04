import { Metadata } from "next";

import CreateService from "@/components/services/CreateService";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create Service`,
  description: `${SITE_TITLE} - Create Service`
};

export default function AddService() {
  return (
    <section className="p-[150px]">
      <CreateService />
    </section>
  );
}
