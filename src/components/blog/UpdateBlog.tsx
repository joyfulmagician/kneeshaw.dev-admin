"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getBlog, updateBlog } from "@/app/api/Blog";

export default function UpdateBlog() {
  const router = useRouter();
  const { id } = useParams();

  const [values, setValues] = useState<{
    image: File | null;
    imageBase64: string | null;
    title: string;
    description: string;
  }>({
    image: null,
    imageBase64: null,
    title: "",
    description: ""
  });

  const initialize = async () => {
    const res = await getBlog(String(id));

    setValues({
      image: null,
      imageBase64: `data:${
        res.data.data.image.contentType
      };base64,${Buffer.from(res.data.data.image.data).toString("base64")}`,
      title: res.data.data.title,
      description: res.data.data.description
    });
  };

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
      await updateBlog(String(id), {
        image: values.image,
        title: values.title,
        description: values.description
      });
      toast("Blog updated successfully.", { type: "success" });
      router.push("/blog");
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <div className="flex w-full flex-col gap-[32px] text-[black]">
      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Image:</span>

        <div className="flex w-full flex-col gap-[32px]">
          {values.imageBase64 && !values.image && (
            <img
              src={values.imageBase64}
              className="w-[128px] rounded border"
            />
          )}

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
        <Input type="text" value={values.title} onChange={handleTitleChange} />
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Description:</span>
        <Textarea
          placeholder="Type your description here."
          rows={5}
          value={values.description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/blog">
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
