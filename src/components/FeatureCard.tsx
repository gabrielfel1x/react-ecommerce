import React from "react";

interface propsType {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: propsType) => {
  return (
    <div className="flex items-center gap-2 bg-cards px-4 py-6">
      {icon}
      <div>
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-tertiary">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
