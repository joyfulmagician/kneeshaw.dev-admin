"use client";

import { useEffect, useState } from "react";

import { HiOutlinePencilSquare } from "react-icons/hi2";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUser, updateUser } from "@/app/api/User";
import { USER_STATUS } from "@/utils/constants";

interface UserEditDialogProps {
  id: string;
  onUpdated: () => void;
}

export default function UserEditDialog({ id, onUpdated }: UserEditDialogProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<{
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    status: number;

    shipping: {
      firstName: string;
      lastName: string;
      card: string;
    };

    credit: {
      firstName: string;
      lastName: string;
      card: string;
    };
  }>({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "",
    status: USER_STATUS.ENABLED,
    shipping: { firstName: "", lastName: "", card: "" },
    credit: { firstName: "", lastName: "", card: "" }
  });

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleShippingChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        shipping: { ...prev.shipping, [field]: e.target.value }
      }));
    };

  const handleCreditChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        credit: { ...prev.credit, [field]: e.target.value }
      }));
    };

  const handleSaveClick = async () => {
    try {
      await updateUser(id, values);
      setOpen(false);
      onUpdated();
      toast("User updated successfully.", { type: "success" });
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  const initialize = async () => {
    try {
      const res = await getUser(id);
      setValues({
        email: res.data.data.email,
        userName: res.data.data.userName,
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        password: res.data.data.password,
        role: res.data.data.role,
        status: res.data.data.status,
        shipping: res.data.data.shipping ?? {
          firstName: "",
          lastName: "",
          card: ""
        },
        credit: res.data.data.credit ?? {
          firstName: "",
          lastName: "",
          card: ""
        }
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
            <HiOutlinePencilSquare className="text-lg text-black" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex w-1/2 flex-row items-center">
                <Label htmlFor="email" className="w-1/2 text-left">
                  E-mail
                </Label>
                <Input
                  id="email"
                  className="ml-[10px]"
                  value={values.email}
                  onChange={handleFieldChange("email")}
                />
              </div>
              <div className="flex w-1/2 flex-row items-center">
                <Label htmlFor="userName" className="w-1/2 text-left">
                  UserName
                </Label>
                <Input
                  id="userName"
                  className="ml-[5px]"
                  value={values.userName}
                  onChange={handleFieldChange("userName")}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex w-1/2 flex-row items-center">
                <Label htmlFor="FirstName" className="w-1/2 text-left">
                  FirstName
                </Label>
                <Input
                  id="firstName"
                  className="ml-[9px]"
                  value={values.firstName}
                  onChange={handleFieldChange("firstName")}
                />
              </div>
              <div className="flex w-1/2 flex-row items-center">
                <Label htmlFor="lastName" className="w-1/2 text-left">
                  LastName
                </Label>
                <Input
                  id="lastName"
                  className="ml-[5px]"
                  value={values.lastName}
                  onChange={handleFieldChange("lastName")}
                />
              </div>
            </div>

            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="status" className="text-left">
                Status
              </Label>
              <Select>
                <SelectTrigger className="col-span-5">
                  <SelectValue defaultValue={values.email} />
                </SelectTrigger>
                <SelectContent onSelect={handleFieldChange("status")}>
                  <SelectItem value="USER_STATUS.DISABLED">DISABLED</SelectItem>
                  <SelectItem value="USER_STATUS.ENABLED">ENABLED</SelectItem>
                </SelectContent>
              </Select>

              {/* <Input
                id="status"
                className="col-span-5"
                value={values.email}
                onChange={handleFieldChange("status")}
              /> */}
            </div>
            <div className="ml-[10%] border-[1px]"></div>
            <Label htmlFor="shipping" className="mt-[10px] text-left">
              shipping Card;
            </Label>
            <div className="flex flex-row justify-between gap-4">
              <Input
                id="shipping.firstName"
                className="col-span-3"
                value={values.shipping.firstName}
                onChange={handleShippingChange("firstName")}
              />
              <Input
                id="shipping.lastName"
                className="col-span-3"
                value={values.shipping.lastName}
                onChange={handleShippingChange("lastName")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="shipping.card"
                className="col-span-12"
                value={values.shipping.card}
                onChange={handleShippingChange("card")}
              />
            </div>
            <div className="ml-[10%] border-[1px]"></div>

            <Label htmlFor="credit" className="mt-[10px] text-left">
              Credit Card;
            </Label>
            <div className="flex flex-row justify-between gap-4">
              <Input
                id="credit.firstName"
                className="col-span-3"
                value={values.credit.firstName}
                onChange={handleCreditChange("firstName")}
              />
              <Input
                id="credit.lastName"
                className="col-span-3"
                value={values.credit.lastName}
                onChange={handleCreditChange("lastName")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="credit.card" className="text-right"></Label>
              <Input
                id="credit.card"
                className="col-span-12"
                value={values.credit.card}
                onChange={handleCreditChange("card")}
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
