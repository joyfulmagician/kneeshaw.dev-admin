import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import CreateService from "@/components/services/CreateService";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Service Create`,
  description: `${SITE_TITLE} - Service Create`
};

export default function AddService() {
  return (
    <section>
      <CreateService />
    </section>
  );
}
