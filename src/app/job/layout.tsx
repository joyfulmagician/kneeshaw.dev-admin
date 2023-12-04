import { Metadata } from "next";

import TabBar from "@/components/job/TabBar";
import Layout from "@/components/layout";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Layout`,
  description: `${SITE_TITLE} - Layout`
};

export default function JobLayout({ children }: any) {
  return (
    <Layout>
      <TabBar />
      {children}
    </Layout>
  );
}
