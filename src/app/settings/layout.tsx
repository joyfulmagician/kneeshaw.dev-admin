import Layout from "@/components/layout";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <Layout>{children}</Layout>;
}
