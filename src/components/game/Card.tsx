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
    <div className="flex h-[400px] w-[300px] flex-col gap-[5px] rounded-xl bg-[#36322F] p-[25px]">
      <img src="/images/image01.png" />
      <p className="text-[white]">Titan Saga: Chains of Koronos</p>
      <p className="text-[#AFC348]">$123.0</p>
      <button className="ml-auto  h-[50px] w-1/2 rounded-xl border-[1px] border-[#AFC348] bg-transparent text-[#AFC348]">
        Details
      </button>
    </div>
  );
}
