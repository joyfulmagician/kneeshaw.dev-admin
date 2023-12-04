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
import { getAllJobServices } from "@/app/api/JobServiceService";
import JobServiceCreateDialog from "@/components/job/services/CreateDialog";
import JobServiceEditDialog from "@/components/job/services/EditDialog";
import JobServiceDeleteDialog from "@/components/job/services/DeleteDialog";

export default function JobServicesList() {
  const [services, setServices] = useState<IJobService[]>([]);

  const initialize = async () => {
    const res = await getAllJobServices();
    setServices(res.data.data);
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
      <JobServiceCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Service</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {services.map((service, index) => (
            <TableRow key={service._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell className="text-left">{service.description}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobServiceEditDialog
                  id={service._id}
                  onUpdated={handleUpdated}
                />

                <JobServiceDeleteDialog
                  id={service._id}
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
