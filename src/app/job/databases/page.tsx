import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Databases`,
  description: `${SITE_TITLE} - Job Databases`
};

const databases = [
  {
    id: "1",
    database: "Godot",
    description: "description1"
  },
  {
    id: "2",
    database: "2D",
    description: "description2"
  },
  {
    id: "3",
    database: "3D",
    description: "description3"
  },
  {
    id: "4",
    database: "Shaders",
    description: "description4"
  },
  {
    id: "5",
    database: "Environment",
    description: "description5"
  },
  {
    id: "6",
    database: "System",
    description: "description6"
  }
];

export default function Databases() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <div className="mr-[20px] flex justify-end">
        <Button type="button">
          <FaPlus className="text-md" />
          <span className="ml-[5px] text-[16px]">Add</span>
        </Button>
      </div>

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Database</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {databases.map((database) => (
            <TableRow key={database.id}>
              <TableCell className="font-medium">{database.id}</TableCell>
              <TableCell>{database.database}</TableCell>
              <TableCell>{database.description}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <Button className="bg-transparent hover:border hover:bg-transparent">
                  <HiOutlinePencilSquare className="text-lg text-black" />
                </Button>

                <Button className="bg-transparent hover:border hover:bg-transparent">
                  <MdDeleteOutline className="text-xl text-black" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
