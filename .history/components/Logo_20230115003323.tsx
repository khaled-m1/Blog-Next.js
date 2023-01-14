import Image from "next/image";
import Logo2 from "../img/LOGO2.png";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex item-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={60}
        width={60}
        src={Logo2}
        alt="logo"
      />
      <div>{renderDefault(props)}</div>
    </div>
  );
};

export default Logo;
