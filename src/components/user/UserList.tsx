"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { getAllUsers } from "@/app/api/User";
import { IUser } from "@/types/interfaces";

import UserDeleteDialog from "./DeleteDialog";
import { Button } from "../ui/button";

export default function UsersList() {
  const [users, setUsers] = useState<IUser[]>([]);
  const initialize = async () => {
    const res = await getAllUsers();
    setUsers(res.data.data);
  };

  const handleDeleted = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[13%] text-center">AVATAR</TableHead>
            <TableHead className="w-[13%] text-center">Full Name</TableHead>
            <TableHead className="w-[13%] text-center">Email</TableHead>
            <TableHead className="w-[13%] text-center">UserName</TableHead>
            <TableHead className="w-[13%] text-center">Role</TableHead>
            <TableHead className="w-[13%] text-center">STATUS</TableHead>
            <TableHead colSpan={2} className=" text-center" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="flex justify-center">
                <img
                  src={`data:${user.image.contentType};base64,${Buffer.from(
                    user.image.data
                  ).toString("base64")}`}
                  className="h-[64px] w-[64px] rounded-full border object-contain"
                />
              </TableCell>
              <TableCell>
                {user.firstName}
                {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="flex flex-row items-center justify-center">
                  {user.status === 2 ? (
                    <FaCheckCircle />
                  ) : (
                    <FaSkullCrossbones />
                  )}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex flex-row items-center justify-center">
                  <Link id={user._id} href={`/user/${user._id}`}>
                    <Button className="bg-transparent hover:border hover:bg-transparent">
                      <HiOutlinePencilSquare className="text-lg text-black" />
                    </Button>
                  </Link>
                  <UserDeleteDialog id={user._id} onDeleted={handleDeleted} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
