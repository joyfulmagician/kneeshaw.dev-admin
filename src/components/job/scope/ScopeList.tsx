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
import { getAllJobScopes } from "@/app/api/JobScopeService";
import JobScopeCreateDialog from "@/components/job/scope/CreateDialog";
import JobScopeEditDialog from "@/components/job/scope/EditDialog";
import JobScopeDeleteDialog from "@/components/job/scope/DeleteDialog";

export default function JobScopesList() {
  const [scopes, setScopes] = useState<IJobScope[]>([]);

  const initialize = async () => {
    const res = await getAllJobScopes();
    setScopes(res.data.data);
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
      <JobScopeCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Scope</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {scopes.map((scope, index) => (
            <TableRow key={scope._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{scope.name}</TableCell>
              <TableCell className="text-left">{scope.description}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <JobScopeEditDialog id={scope._id} onUpdated={handleUpdated} />

                <JobScopeDeleteDialog
                  id={scope._id}
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
