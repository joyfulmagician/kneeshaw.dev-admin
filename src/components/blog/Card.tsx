"use client";

import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

import { Button } from "../ui/button";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function BlogCard({
  image,
  title,
  subtitle,
  description
}: Props) {
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   // Fetch the game data from the backend
  //   fetch("/game")
  //     .then((response) => response.json())
  //     .then((title) => {
  //       // Update the state with the received game data
  //       setTitle(title);
  //     })
  //     .catch((error) => {
  //       console.error("the error is" + error);
  //     });
  // }, []);

  return (
    <div className="h-auto w-[280px] rounded-[25px] border text-center">
      <img src={image} alt={image} />

      <div className="mt-[6px] flex flex-col gap-[12px] px-[6px]">
        <div>
          <h2 className="text-[20px] font-[600]">{title}</h2>
          <h4 className="text-[15px] font-[500]">{subtitle}</h4>
        </div>

        <p className="text-[12px] font-[400]">{description}</p>
      </div>

      <div className="mt-[8px] flex justify-center">
        <Link
          href="/blog/detail"
          type="Link"
          className="flex h-[30px] items-center justify-center rounded-[14px] border px-[20px] text-center text-[14px] font-semibold"
        >
          Read more
        </Link>
      </div>

      <div className="flex flex-row items-center justify-around">
        <Button className="bg-transparent hover:border hover:bg-transparent">
          <HiOutlinePencilSquare className="text-lg text-black" />
        </Button>

        <Button className="bg-transparent hover:border hover:bg-transparent">
          <MdDeleteOutline className="text-xl text-black" />
        </Button>
      </div>
    </div>
  );
}
