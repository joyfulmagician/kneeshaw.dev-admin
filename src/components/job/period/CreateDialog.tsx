"use client";

import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";
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
import { createJobPeriod } from "@/app/api/JobPeriodService";

interface JobPeriodCreateDialogProps {
  onCreated: () => void;
}

export default function JobPeriodCreateDialog({
  onCreated
}: JobPeriodCreateDialogProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<{
    name: string;
    minTerm: number;
    maxTerm: number;
    description: string;
  }>({ name: "", minTerm: 0, maxTerm: 0, description: "" });

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSaveClick = async () => {
    try {
      await createJobPeriod(values);
      setOpen(false);
      onCreated();
      toast("Job period created successfully.", { type: "success" });
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  useEffect(() => {
    setValues({ name: "", minTerm: 0, maxTerm: 0, description: "" });
  }, [open]);

  return (
    <div className="mr-[20px] flex justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Period</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={values.name}
                onChange={handleFieldChange("name")}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="min" className="text-right">
                Min
              </Label>
              <Input
                id="min"
                className="col-span-3"
                value={values.minTerm}
                onChange={handleFieldChange("minTerm")}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="max" className="text-right">
                Max
              </Label>
              <Input
                id="max"
                className="col-span-3"
                value={values.maxTerm}
                onChange={handleFieldChange("maxTerm")}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
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

            <Button onClick={handleSaveClick}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
