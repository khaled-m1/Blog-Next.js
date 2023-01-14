
import Image from "next/image";
import Logo1 from '../img/LOGO1.png'

const Logo = (props:any) => {
    const {renderDefault, title} = props;
  return (
    <div>
    <Image src={Logo1} 
        alt="GFG logo imported from public directory" />
</div>
  )
}

export default Logo