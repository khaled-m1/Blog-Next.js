import Image from "next/image";
import Logo2 from "../img/LOGO2.png";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image
        className=" object-cover"
        height={50}
        width={50}
        src={Logo2}
        alt="logo"
        b
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
