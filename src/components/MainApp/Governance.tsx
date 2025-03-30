import SideNav from "./SideNav";
import Trillo from '../../assets/Group 1034.png';
import { FaTelegramPlane } from "react-icons/fa";
import { ReactNode, useState } from "react";
import { IoIosPaper } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


type Array = {
  id: number
  added?: Boolean
  icon: ReactNode
  navText: String
  link: String
}


const sideNavSocials: Array[] = [
  {
    id: 6,
    icon: <IoIosPaper />,
    navText: 'Whitepaper',
    link: '/whitepaper'
  },
  {
    id: 7,
    icon: <FaXTwitter />,
    navText: 'Twitter',
    link: 'facebook.com'
  },
  {
    id: 8,
    icon: <FaTelegramPlane />,
    navText: 'Telegram',
     link: 'telegram.com'
  },
]


const Governance = () => {
    const [socials] = useState(sideNavSocials)

  
    return (
      <section className="marketPage">
        <div className="sideNav">
          <div className="sideNavItems">
          <SideNav image={Trillo} btnText="Connect wallet" sideNavSocials={socials}/>
          </div>
          
        </div>
        <hr />
      <div className="market">
        Governance
      </div>
      </section>
    )
}

export default Governance