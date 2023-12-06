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
import { deleteGame, getGame } from "@/app/api/Game";

interface GameDeleteDialogProps {
  id: string;
  onDeleted: () => void;
}

export default function GameDeleteDialog({
  id,
  onDeleted
}: GameDeleteDialogProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<{
    imageBase64: string | null;
    title: string;
    price: number;
  }>({
    imageBase64: null,
    title: "",
    price: 0
  });

  const handleRemoveClick = async () => {
    try {
      await deleteGame(id);
      setOpen(false);
      onDeleted();
      toast("Game removed successfully.", { type: "success" });
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  const initialize = async () => {
    try {
      const res = await getGame(String(id));

      setValues({
        imageBase64: `data:${
          res.data.data.image.contentType
        };base64,${Buffer.from(res.data.data.image.data).toString("base64")}`,
        title: res.data.data.title,
        price: res.data.data.price
      });
    } catch (err) {
      console.error("Initialize error: ", err);
    }
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <MdDeleteOutline className="text-xl text-black" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove Game</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Image
            </Label>
            {values.imageBase64 && (
              <img
                src={values.imageBase64}
                className="w-[128px] rounded border"
              />
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              readOnly
              id="name"
              className="col-span-3"
              value={values.title}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Price" className="text-right">
              Price
            </Label>
            <Input
              readOnly
              id="price"
              className="col-span-3"
              value={values.price}
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
  );
}
