"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/Card";

export default function BlogList() {
  const cards = [
    {
      image: "/images/blog/card01.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card02.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card03.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card04.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card05.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card06.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card07.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    },
    {
      image: "/images/blog/card08.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)..."
    }
  ];

  return (
    <>
      <div className="mr-[20px] mt-[36px] flex justify-end">
        <Link href="/blog/create">
          <Button>
            <FaPlus className="text-md" />
            <span className="ml-[5px] text-[16px]">Add</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-[50px]">
        {cards.map((props) => (
          <BlogCard
            key={props.title}
            image={props.image}
            title={props.title}
            subtitle={props.subtitle}
            description={props.paragraph}
          />
        ))}
      </div>
    </>
  );
}
