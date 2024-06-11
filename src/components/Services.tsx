import { MdSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { ImTruck } from "react-icons/im";
import { MdDiscount } from "react-icons/md";
import FeatureCard from "./FeatureCard";

const Services = () => {
  const data = [
    {
      icon: <ImTruck className="text-4xl" />,
      title: "Free Delivery",
      desc: "Lorem Ipsum is simply dummy",
    },
    {
      icon: <SiMoneygram className="text-4xl" />,
      title: "Return & Refund",
      desc: "Lorem Ipsum is simply dummy",
    },
    {
      icon: <MdDiscount className="text-4xl" />,
      title: "Member Discount",
      desc: "Lorem Ipsum is simply dummy",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      title: "Suppor 24/7",
      desc: "Lorem Ipsum is simply dummy",
    },
  ];

  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          desc={item.desc}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Services;
