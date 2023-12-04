"use client";

import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-row gap-2">
      <Sidebar />

      <div className="flex max-h-[100vh] flex-1 flex-col overflow-auto p-4">
        {children}
      </div>
    </main>
  );
}
