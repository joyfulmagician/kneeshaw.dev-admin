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
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Services`,
  description: `${SITE_TITLE} - Job Services`
};

const services = [
  {
    id: "1",
    service: "Godot",
    description: "description1"
  },
  {
    id: "2",
    service: "2D",
    description: "description2"
  },
  {
    id: "3",
    service: "3D",
    description: "description3"
  },
  {
    id: "4",
    service: "Shaders",
    description: "description4"
  },
  {
    id: "5",
    service: "Environment",
    description: "description5"
  },
  {
    id: "6",
    service: "System",
    description: "description6"
  }
];

export default function Services() {
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
            <TableHead className="w-[15%] text-center">Service</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.id}</TableCell>
              <TableCell>{service.service}</TableCell>
              <TableCell>{service.description}</TableCell>
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
