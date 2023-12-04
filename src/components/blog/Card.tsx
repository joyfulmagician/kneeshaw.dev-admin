"use client";
import { useEffect, useState } from "react";
export default function Card() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Fetch the game data from the backend
    fetch("/game")
      .then((response) => response.json())
      .then((title) => {
        // Update the state with the received game data
        setTitle(title);
      })
      .catch((error) => {
        console.error("the error is" + error);
      });
  }, []);
  return (
    <div className="flex h-[400px] w-[300px] flex-col justify-between gap-[5px] rounded-xl border-[1px] border-white bg-[#36322F] pb-[10px]">
      <img
        className="h-[150px] w-full rounded-lg object-cover"
        src="/images/image01.png"
      />
      <p className="text-center text-[20px] text-[#d0483a]">
        Content Update 0.4.2
      </p>
      <p className="text-center text-[white]">
        Forgotten shore and the Dauntiess Few Please Wishist Titan Saga on
        Steam: Titan Saga
      </p>
      <button className="ml-auto ml-auto mr-auto h-[40px] w-1/2 rounded-xl border-[1px] border-[#AFC348] bg-transparent text-[#AFC348]">
        Read More
      </button>
    </div>
  );
}
