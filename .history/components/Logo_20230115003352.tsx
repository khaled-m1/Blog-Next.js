import Image from "next/image";
import Logo2 from "../img/LOGO2.png";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex item-center space-x-2">
      <Image
        className=" object-cover"
        height={60}
        width={60}
        src={Logo2}
        alt="logo"
      />
      <div className="mt-3">{renderDefault(props)}</div>
    </div>
  );
};

export default Logo;
