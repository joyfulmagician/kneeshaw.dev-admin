import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
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

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};

const users = [
  {
    id: "1",
    fullname: "Ivan Kovalenko",
    email: "email1@gmail.com",
    username: "ivan",
    role: "developer"
  },
  {
    id: "2",
    fullname: "Mikka Korhonen",
    email: "email2@gmail.com",
    username: "mikka",
    role: "gamer"
  }
];

export default function User() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <div className="mr-[20px] flex justify-end">
        <Link href="user/1">
          <Button type="button">
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

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
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <Link href="user/1">
                  <Button className="bg-transparent hover:border hover:bg-transparent">
                    <HiOutlinePencilSquare className="text-lg text-black" />
                  </Button>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-transparent hover:border hover:bg-transparent">
                      <MdDeleteOutline className="text-xl text-black" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogDescription>
                        Are you sure want to delete?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>no</AlertDialogCancel>
                      <AlertDialogAction>yes</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
