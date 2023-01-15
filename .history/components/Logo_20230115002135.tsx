import Image from "next/image";
import Logo1 from "../img/LOGO1.png";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image className="" src={Logo1} alt="logo" />
    </div>
  );
};

export default Logo;