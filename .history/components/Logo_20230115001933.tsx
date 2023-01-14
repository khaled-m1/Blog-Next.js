import Image from 'next/image'
import Logo1 from '../img/LOGO1.png'

const Logo = (props:any) => {
    const {renderDefault, title} = props;
  return (
    <div className='flex item-center space-x-2'>
       <Image  
       className="rounded-full object-cover"
     
        />


        Logo</div>
  )
}

export default Logo