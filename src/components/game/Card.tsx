// "use client";
// import { useEffect, useState } from "react";
// export default function Card() {
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     // Fetch the game data from the backend
//     fetch("/game")
//       .then((response) => response.json())
//       .then((title) => {
//         // Update the state with the received game data
//         setTitle(title);
//       })
//       .catch((error) => {
//         console.error("the error is" + error);
//       });
//   }, []);
//   return (
//     <div className="flex h-[400px] w-[300px] flex-col gap-[5px] rounded-xl bg-[#36322F] p-[25px]">
//       <img src="/images/image01.png" />
//       <p className="text-[white]">Titan Saga: Chains of Koronos</p>
//       <p className="text-[#AFC348]">$123.0</p>
//       <button className="ml-auto  h-[50px] w-1/2 rounded-xl border-[1px] border-[#AFC348] bg-transparent text-[#AFC348]">
//         Details
//       </button>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

import { Button } from "../ui/button";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function GameCard({ image, title, description, price }: Props) {
  return (
    <div className="h-auto w-[280px] rounded-[25px] border text-center">
      <img src={image} alt={image} />

      <div className="mt-[6px] flex flex-col gap-[12px] px-[6px]">
        <div>
          <h2 className="text-[20px] font-[600]">
            {title}:{description}
          </h2>
        </div>

        <p className="text-[18px] font-[400] text-[]">{price}$</p>
      </div>

      <div className="mt-[8px] flex justify-center">
        <Link
          href="/game/1"
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
