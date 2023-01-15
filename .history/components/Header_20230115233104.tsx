import Image from "next/image";
import Link from "next/link";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: BoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: DevicePhoneMobileIcon,
    },
  ];
  return (
    <div className="flex items-center hustify-between space-x-2 font-bold px-10 py-5">
     <div className="flex items-center space"></div>
      <div></div>
    </div>
  );
};

export default Header;
