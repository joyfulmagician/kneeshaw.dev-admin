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
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Period`,
  description: `${SITE_TITLE} - Job Period`
};

const period = [
  {
    id: "1",
    period: "Short :",
    description: "description1"
  },
  {
    id: "2",
    period: "Medium :",
    description: "description2"
  },
  {
    id: "3",
    period: "Long :",
    description: "description3"
  }
];

export default function Period() {
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
            <TableHead className="w-[20%] text-center">Period</TableHead>
            <TableHead className="w-[60%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {period.map((period) => (
            <TableRow key={period.id}>
              <TableCell className="font-medium">{period.id}</TableCell>
              <TableCell className="flex flex-row items-center justify-around">
                <div className="w-[100px]">{period.period}</div>

                <Input
                  placeholder="1"
                  className="w-[50px] text-center text-[14px] font-[700] "
                />
                <div className="px-[10px]">~</div>
                <Input
                  placeholder="3"
                  className="w-[50px] text-center text-[14px] font-[700] "
                />
              </TableCell>

              <TableCell>{period.description}</TableCell>
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
