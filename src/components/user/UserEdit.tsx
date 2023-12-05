"use client";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { USER_STATUS } from "@/utils/constants";
import { getUser, updateUser } from "@/app/api/User";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { number } from "zod";

export default function UserEdit() {
  const { id } = useParams();
  const router = useRouter();

  const [values, setValues] = useState<{
    image: File | null;
    imageBase64: string | null;
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
    image: null,
    imageBase64: null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      setValues((prev: any) => ({ ...prev, image: e?.target?.files?.[0] }));
    }
  };

  const handleStatusChange = (selectedValue: string) => {
    setValues((prev: any) => ({ ...prev, status: Number(selectedValue) }));
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
      await updateUser(String(id), {
        image: values.image,
        email: values.email,
        userName: values.userName,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        role: values.role,
        status: values.status,
        shipping: values.shipping,
        credit: values.credit
      });
      toast("User updated successfully.", { type: "success" });
      router.push("/user");
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  const initialize = async () => {
    try {
      const res = await getUser(String(id));
      setValues({
        image: null,
        imageBase64: `data:${
          res.data.data.image.contentType
        };base64,${Buffer.from(res.data.data.image.data).toString("base64")}`,
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
    <div className="flex flex-col gap-[30px] px-[20px] py-[50px] xl:px-[300px]">
      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/user">
          <Button variant="outline">Cancel</Button>
        </Link>

        <Button onClick={handleSaveClick}>Save</Button>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="flex w-full flex-col gap-[20px]">
          <div className="flex flex-row gap-[50px]">
            {values.imageBase64 && !values.image && (
              <img
                src={values.imageBase64}
                className="h-[128px] rounded-full border object-cover"
              />
            )}

            {values.image && (
              <img
                src={URL.createObjectURL(values.image)}
                className="w-[128px] rounded-full border object-cover"
              />
            )}
            <div className="flex items-center justify-center text-[40px]">
              {values.firstName} <span className="mr-[20px]"></span>
              {values.lastName}'s Profile
            </div>
          </div>

          <Input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex w-1/2 flex-row items-center">
          <Label htmlFor="email" className="text-left">
            Email
          </Label>
          <Input
            id="email"
            className="ml-[40px] w-[400px]"
            value={values.email}
            onChange={handleFieldChange("email")}
          />
        </div>
        <div className="flex w-1/2 flex-row items-center">
          <Label htmlFor="userName" className="text-left">
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
          <Label htmlFor="FirstName" className=" text-left">
            FirstName
          </Label>
          <Input
            id="firstName"
            className="ml-[9px] w-[400px]"
            value={values.firstName}
            onChange={handleFieldChange("firstName")}
          />
        </div>
        <div className="flex w-1/2 flex-row items-center">
          <Label htmlFor="lastName" className=" text-left">
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

      <div className="flex flex-row items-center gap-4">
        <Label htmlFor="status" className="text-left">
          Status
        </Label>
        <Select
          value={String(values.status)}
          onValueChange={handleStatusChange}
        >
          <SelectTrigger className="ml-[20px]">
            <SelectValue
              placeholder={values.status === 1 ? "DISABLED" : "ENABLED"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">DISABLED</SelectItem>
            <SelectItem value="2">ENABLED</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="ml-[10%] border-[1px]" />
      <Label htmlFor="shipping" className="mt-[10px] text-left">
        SHIPPING:
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
      <div className="ml-[10%] border-[1px]" />

      <Label htmlFor="credit" className="mt-[10px] text-left">
        CREDIT:
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
        <Label htmlFor="credit.card" className="text-right" />
        <Input
          id="credit.card"
          className="col-span-12"
          value={values.credit.card}
          onChange={handleCreditChange("card")}
        />
      </div>
    </div>
  );
}
