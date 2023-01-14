
import Logo1 from '../img/LOGO1.png'

const Logo = (props:any) => {
    const {renderDefault, title} = props;
  return (
    <div className='flex item-center space-x-2'>
       <Image  
       className=' rounded-full object-cover'
       height={50}
       width={50}
       src{Logo1}
       ali="LOGO" />
        Logo</div>
  )
}

export default Logo