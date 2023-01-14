import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const StudioNavbar = (props: any) => {
  return (
    <div>
      <div>
        <Link href="/" className="text-[]">Go To Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
