import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Dashboard`,
  description: `${SITE_TITLE} - Dashboard`
};

export default function Dashboard() {
  return <Layout>Dashboard</Layout>;
}
