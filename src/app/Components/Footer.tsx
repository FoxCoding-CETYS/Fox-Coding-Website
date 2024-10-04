import Fox from '../svg/4'
import { SocialIcon } from 'react-social-icons'
export default function Footer () {
    return (
        <div className="w-full bg-black flex flex-row h-28">
            <div className="flex items-center justify-center w-1/3 flex-row space-x-1">
                <SocialIcon url="https://github.com/" fgColor='white' bgColor='transparent' style={{ width: '60px', height:'60px'}}/>
                <SocialIcon url="https://linkedin.com/" fgColor='black' bgColor='white' style={{ width: '30px', height:'30px' }}/>
                <SocialIcon url="https://instagram.com/" fgColor='white' bgColor='transparent'/>
                <SocialIcon url="https://facebook.com/" fgColor='white' bgColor='transparent ' style={{ width: '50px', height:'50px' , marginLeft:"-10px" }}/>
            </div>

            <div className="flex items-center justify-center w-1/3">
                <Fox width={70} height={70}/>
            </div>

            <div className="flex items-center justify-center text-2xl text-[#FFD850] w-1/3">
                foxcoding@cetys.edu.mx
            </div>
        </div>
    )
}