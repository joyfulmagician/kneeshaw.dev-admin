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
import { getAllJobDatabases } from "@/app/api/JobDatabaseService";

import JobDatabaseCreateDialog from "./CreateDialog";
import JobDatabaseEditDialog from "./EditDialog";
import JobDatabaseDeleteDialog from "./DeleteDialog";

export default function JobDatabasesList() {
  const [databases, setDatabases] = useState<IJobDatabase[]>([]);

  const initialize = async () => {
    const res = await getAllJobDatabases();
    setDatabases(res.data.data);
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
      <JobDatabaseCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Database</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {databases.map((database, index) => (
            <TableRow key={database._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{database.name}</TableCell>
              <TableCell className="text-left">
                {database.description}
              </TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobDatabaseEditDialog
                  id={database._id}
                  onUpdated={handleUpdated}
                />

                <JobDatabaseDeleteDialog
                  id={database._id}
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
