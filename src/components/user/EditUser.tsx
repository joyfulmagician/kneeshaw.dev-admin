"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function EditUser() {
  return (
    <div className="flex flex-col gap-[30px] p-[100px] text-[black]">
      <div className="flex flex-row justify-end gap-[20px]">
        <Button type="button" className="bg-[#36322f]">
          Save
        </Button>
        <Button
          type="button"
          className="border-[1px] border-[#36322f] bg-transparent text-[black]"
        >
          Cancel
        </Button>
      </div>
      <p className="text-[40px] font-bold">Ivan's Profile</p>
      <div className="flex flex-row items-center  ">
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4">Name:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="Ivan"
          />
        </div>
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4 text-center">E-mail:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="ivan@gmail.com"
          />
        </div>
      </div>
      <div className="flex flex-row items-center  ">
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4 ">UserName:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="ivan"
          />
        </div>
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4  text-center">Password:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <p className="w-1/12">Role:</p>
        <Select>
          <SelectTrigger className="] h-[52px] w-[200px] border-[1px] border-[#36322f]">
            <SelectValue placeholder="Gamer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Gamer</SelectItem>
            <SelectItem value="dark">Developer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row items-center ">
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4">Shipping:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="First Name"
          />
        </div>
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4"></div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="Second Name"
          />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/12"></div>
        <div className="w-7/12">
          <input
            className="h-[52px] w-full rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="flex flex-row items-center  ">
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4">Credit Card:</div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="First Name"
          />
        </div>
        <div className="flex w-1/3 flex-row items-center">
          <div className="w-1/4"></div>
          <input
            className="h-[52px] w-3/4 rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="Second Name"
          />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/12"></div>
        <div className="w-7/12">
          <input
            className="h-[52px] w-full rounded-lg border-[1px] border-[#36322f] p-[5px]"
            placeholder="First Name"
          />
        </div>
      </div>
    </div>
  );
}
