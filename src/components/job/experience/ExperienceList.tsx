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
import { getAllJobExperiences } from "@/app/api/JobExperienceService";
import JobExperienceCreateDialog from "@/components/job/experience/CreateDialog";
import JobExperienceEditDialog from "@/components/job/experience/EditDialog";
import JobExperienceDeleteDialog from "@/components/job/experience/DeleteDialog";
import { IJobExperience } from "@/types/interfaces";

export default function JobExperiencesList() {
  const [experiences, setExperiences] = useState<IJobExperience[]>([]);

  const initialize = async () => {
    const res = await getAllJobExperiences();
    setExperiences(res.data.data);
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
      <JobExperienceCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Experience</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {experiences.map((experience, index) => (
            <TableRow key={experience._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{experience.name}</TableCell>
              <TableCell className="text-left">
                {experience.description}
              </TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobExperienceEditDialog
                  id={experience._id}
                  onUpdated={handleUpdated}
                />

                <JobExperienceDeleteDialog
                  id={experience._id}
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
