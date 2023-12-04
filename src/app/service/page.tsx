import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Service`,
  description: `${SITE_TITLE} - Service`
};

export default function Service() {
  const services = [
    {
      image: "/images/services/service_image_01.png",
      title: "Mobile Game Development",
      description: "Specialized in creating captivating and immersive games"
    },
    {
      image: "/images/services/service_image_02.png",
      title: "Unity 2D <br /> Game",
      description:
        "Tailoring mechanics, graphics, and animations to suit your vision"
    },
    {
      image: "/images/services/service_image_03.png",
      title: "Unity 3D <br /> Game",
      description:
        "Creating realistic environments, lifelike characters, and dynamic gameplay"
    },
    {
      image: "/images/services/service_image_04.png",
      title: "Unreal Game Development",
      description: "Transforming your ideas into a polished and thrilling game"
    },
    {
      image: "/images/services/service_image_05.png",
      title: "Godot Game Dev elopment",
      description:
        "Developing high-quality games that run smoothly across various platforms"
    },
    {
      image: "/images/services/service_image_06.png",
      title: "HTML5 Game Development",
      description:
        "Interactive games that are compatible with desktops, laptops, and mobile devices"
    },
    {
      image: "/images/services/service_image_07.png",
      title: "Web3 Game Development",
      description: "Creating innovative and immersive gaming experiences"
    },
    {
      image: "/images/services/service_image_08.png",
      title: "Daaps Development",
      description:
        "We leverage our expertise to build secure and user-friendly dApps"
    },
    {
      image: "/images/services/service_image_09.png",
      title: "Blockchain Integration",
      description: "Specialized in creating captivating and immersive games"
    },
    {
      image: "/images/services/service_image_10.png",
      title: "Bug <br /> Fixing",
      description:
        "Tailoring mechanics, graphics, and animations to suit your vision"
    },
    {
      image: "/images/services/service_image_11.png",
      title: "System <br /> Design",
      description:
        "Creating realistic environments, lifelike characters, and dynamic gameplay"
    },
    {
      image: "/images/services/service_image_12.png",
      title: "API <br /> Creation",
      description:
        "Creating realistic environments, lifelike characters, and dynamic gameplay"
    }
  ];
  return (
    <main className="mt-[24px] flex flex-col gap-[60px] p-4">
      <div className="mr-[20px] flex justify-end">
        <Button type="button">
          <FaPlus className="text-md" />
          <span className="ml-[5px] text-[16px]">Add</span>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-[60px]">
        {services.map((props) => (
          <ServiceCard
            key={props.title}
            image={props.image}
            title={props.title}
            description={props.description}
          />
        ))}
      </div>
    </main>
  );
}
