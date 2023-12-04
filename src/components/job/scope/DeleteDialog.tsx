"use client";

import { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  deleteJobScope,
  getJobScope,
  updateJobScope
} from "@/app/api/JobScopeService";

interface JobScopeDeleteDialogProps {
  id: string;
  onDeleted: () => void;
}

export default function JobScopeDeleteDialog({
  id,
  onDeleted
}: JobScopeDeleteDialogProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<{
    name: string;
    description: string;
  }>({ name: "", description: "" });

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleRemoveClick = async () => {
    try {
      await deleteJobScope(id);
      setOpen(false);
      onDeleted();
      toast("Job scope removed successfully.", { type: "success" });
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  const initialize = async () => {
    try {
      const res = await getJobScope(id);
      setValues({
        name: res.data.data.name,
        description: res.data.data.description
      });
    } catch (err) {
      console.error("Initialize error: ", err);
    }
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <div className="mr-[20px] flex justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-transparent hover:border hover:bg-transparent">
            <MdDeleteOutline className="text-xl text-black" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Scope</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                readOnly
                id="name"
                className="col-span-3"
                value={values.name}
                onChange={handleFieldChange("name")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                readOnly
                id="description"
                className="col-span-3"
                value={values.description}
                onChange={handleFieldChange("description")}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button onClick={handleRemoveClick}>Remove</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
