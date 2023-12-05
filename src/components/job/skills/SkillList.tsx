"use client";

import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { getAllJobSkills } from "@/app/api/JobSkillService";

import { IJobSkill } from "@/types/interfaces";
import JobSkillCreateDialog from "./CreateDialog";
import JobSkillEditDialog from "./EditDialog";
import JobSkillDeleteDialog from "./DeleteDialog";

export default function JobSkillsList() {
  const [skills, setSkills] = useState<IJobSkill[]>([]);

  const initialize = async () => {
    const res = await getAllJobSkills();
    setSkills(res.data.data);
  };

  const handleCreated = () => {
    initialize();
  };

  const handleUpdated = () => {
    initialize();
  };

  const handleDeleted = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <JobSkillCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">No</TableHead>
            <TableHead className="w-[15%] text-center">Skill</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {skills.map((skill, index) => (
            <TableRow key={skill._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{skill.name}</TableCell>
              <TableCell className="text-left">{skill.description}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobSkillEditDialog id={skill._id} onUpdated={handleUpdated} />
                <JobSkillDeleteDialog
                  id={skill._id}
                  onDeleted={handleDeleted}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
