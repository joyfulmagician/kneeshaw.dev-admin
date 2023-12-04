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
import { getAllJobPeriods } from "@/app/api/JobPeriodService";

import JobPeriodCreateDialog from "./CreateDialog";
import JobPeriodEditDialog from "./EditDialog";
import JobPeriodDeleteDialog from "./DeleteDialog";

export default function JobPeriodsList() {
  const [periods, setPeriods] = useState<IJobPeriod[]>([]);

  const initialize = async () => {
    const res = await getAllJobPeriods();
    setPeriods(res.data.data);
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
      <JobPeriodCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[10%] text-center">Name</TableHead>

            <TableHead className="w-[10%] text-center">Period</TableHead>
            <TableHead className="w-[60%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {periods.map((period, index) => (
            <TableRow key={period._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{period.name}</TableCell>

              <TableCell>
                <div className="flex flex-row justify-center gap-[12px]">
                  <p>{period.minTerm}</p>
                  <div className="px-[12px]">~</div>
                  <p>{period.maxTerm}</p>
                </div>
              </TableCell>

              <TableCell className="text-left">{period.description}</TableCell>

              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobPeriodEditDialog
                  id={period._id}
                  onUpdated={handleUpdated}
                />

                <JobPeriodDeleteDialog
                  id={period._id}
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
