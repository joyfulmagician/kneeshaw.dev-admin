"use client";

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { usePathname, useRouter } from "next/navigation";

export default function TabBar() {
  const router = useRouter();
  const pathName = usePathname();

  const handleTabChange = (tab: string) => () => {
    router.push(tab);
  };

  return (
    <Tabs defaultValue={pathName.replace("/job/", "")} className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger
          value="skills"
          className="flex-1"
          onClick={handleTabChange("/job/skills")}
        >
          Skills
        </TabsTrigger>
        <TabsTrigger
          value="services"
          className="flex-1"
          onClick={handleTabChange("/job/services")}
        >
          Services
        </TabsTrigger>
        <TabsTrigger
          value="databases"
          className="flex-1"
          onClick={handleTabChange("/job/databases")}
        >
          Databases
        </TabsTrigger>
        <TabsTrigger
          value="scope"
          className="flex-1"
          onClick={handleTabChange("/job/scope")}
        >
          Scope
        </TabsTrigger>
        <TabsTrigger
          value="period"
          className="flex-1"
          onClick={handleTabChange("/job/period")}
        >
          Period
        </TabsTrigger>
        <TabsTrigger
          value="experience"
          className="flex-1"
          onClick={handleTabChange("/job/experience")}
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          value="budget"
          className="flex-1"
          onClick={handleTabChange("/job/budget")}
        >
          Budget
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
