"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import UserDeleteDialog from "./DeleteDialog";
import UserEditDialog from "./EditDialog";
import { getAllUsers } from "@/app/api/User";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

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
            <TableHead className="w-[15%] text-center">Full Name</TableHead>
            <TableHead className="w-[15%] text-center">Email</TableHead>
            <TableHead className="w-[15%] text-center">UserName</TableHead>
            <TableHead className="w-[15%] text-center">Role</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {user.firstName}
                {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                {/* <UserEditDialog id={user._id} onUpdated={handleUpdated} /> */}
                <Link id={user._id} href={`/user/${user._id}`}>
                  <Button className="bg-transparent hover:border hover:bg-transparent">
                    <HiOutlinePencilSquare className="text-lg text-black" />
                  </Button>
                </Link>

                <UserDeleteDialog id={user._id} onDeleted={handleDeleted} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
