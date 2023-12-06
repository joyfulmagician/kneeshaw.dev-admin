"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getGame, updateGame } from "@/app/api/Game";

export default function UpdateGame() {
  const router = useRouter();
  const { id } = useParams();

  const [values, setValues] = useState<{
    image: File | null;
    imageBase64: string | null;
    title: string;
    price: number;
  }>({
    image: null,
    imageBase64: null,
    title: "",
    price: 0
  });

  const initialize = async () => {
    const res = await getGame(String(id));

    setValues({
      image: null,
      imageBase64: `data:${
        res.data.data.image.contentType
      };base64,${Buffer.from(res.data.data.image.data).toString("base64")}`,
      title: res.data.data.title,
      price: res.data.data.price
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      setValues((prev: any) => ({ ...prev, image: e?.target?.files?.[0] }));
    }
  };

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSaveClick = async () => {
    try {
      await updateGame(String(id), {
        image: values.image,
        title: values.title,
        price: values.price
      });
      toast("Game updated successfully.", { type: "success" });
      router.push("/game");
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
        <Input
          type="text"
          value={values.title}
          onChange={handleFieldChange("title")}
        />
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="w-[150px] text-center">Price:</span>
        <Input
          type="text"
          value={values.price}
          onChange={handleFieldChange("price")}
        />
      </div>

      <div className="flex flex-row justify-end gap-[20px]">
        <Link href="/game">
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
