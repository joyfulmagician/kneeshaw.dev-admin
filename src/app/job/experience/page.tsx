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
  title: `${SITE_TITLE} - Job Experience`,
  description: `${SITE_TITLE} - Job Experience`
};

const experience = [
  {
    id: "1",
    experience: "Small",
    description: "Looking for someone relatively new on this field"
  },
  {
    id: "2",
    experience: "Medium",
    description: "Looking for substantial experience in this field"
  },
  {
    id: "3",
    experience: "Large",
    description: "Looking for comprehensive and deep expertise in this field"
  }
];

export default function Experience() {
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
            <TableHead className="w-[15%] text-center">Experience</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {experience.map((experience) => (
            <TableRow key={experience.id}>
              <TableCell className="font-medium">{experience.id}</TableCell>
              <TableCell>{experience.experience}</TableCell>
              <TableCell>{experience.description}</TableCell>
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
