import Image from "next/image";
import Logo2 from "../img/LOGO2.png";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image
        className="rounded-full object-cover"
        height={40}
        width={50}
        src={Logo2}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
