"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createService } from "@/app/api/ServiceService";

export default function CreateService() {
  const router = useRouter();
  const [values, setValues] = useState<{
    image: File | null;
    title: string;
    description: string;
  }>({
    image: null,
    title: "",
    description: ""
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      setValues((prev: any) => ({ ...prev, image: e?.target?.files?.[0] }));
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev: any) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev: any) => ({ ...prev, description: e.target.value }));
  };

  const handleSaveClick = async () => {
    try {
      await createService(values);
      toast("Service created successfully.", { type: "success" });
      router.push("/service");
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  return (
    <div className="flex w-full flex-col gap-[32px] text-[black]">
      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Image:</span>

        <div className="flex w-full flex-col gap-[32px]">
          {values.image && (
            <img
              src={URL.createObjectURL(values.image)}
              className="w-[128px] rounded border"
            />
          )}

          <Input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Title:</span>
        <Input type="text" onChange={handleTitleChange} />
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Description:</span>
        <Textarea
          placeholder="Type your description here."
          rows={5}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/service">
          <Button variant="outline">
            <span className="text-[16px]">Cancel</span>
          </Button>
        </Link>
        <Button type="button" onClick={handleSaveClick}>
          <span className="text-[16px]">Save</span>
        </Button>
      </div>
    </div>
  );
}
