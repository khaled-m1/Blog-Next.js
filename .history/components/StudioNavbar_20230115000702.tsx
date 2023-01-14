import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex item-center justify-between p-5">
        <Link href="/" className="text-[#BA2948] flex item-center">
          <ArrowUturnLeftIcon className="h-6 text-[#BA2948] mr-2" />
          Go To Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#BA2948]">
          <h1 className="font-bold text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos!
          </h1>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
