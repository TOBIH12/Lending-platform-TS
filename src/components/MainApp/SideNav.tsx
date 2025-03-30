import { Link } from 'react-router-dom';
import '../../index.css'
import { ReactNode } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { IoFlowerOutline } from 'react-icons/io5';
import { TbTransactionBitcoin } from 'react-icons/tb';
import { GoLaw } from 'react-icons/go';
import { PiVaultFill } from 'react-icons/pi';


interface Array{
  id: number
  added?: Boolean
  icon:  ReactNode
  navText: String
  link: string
}

interface Props{
  image: string;
  btnText?: string
  sideNavSocials: Array[]
  handleModalVisibility: ()=>void
  closeNav: ()=>void
}


const SideNav = ({image, btnText, sideNavSocials, handleModalVisibility, closeNav}: Props) => {
 
  return (
    <div className='navLeft'>

      <div className="logoButton">
        
      <Link to='/' className='logoContainer'>
        <img src={image} alt="" className="logo-image" />
        </Link>

      
        { window.location.pathname === '/market' &&
         <button className="btn btn-secondary" onClick={() => {
          handleModalVisibility();
          closeNav();
        }}>{btnText}</button>}

        {
          window.location.pathname === '/portfolio' &&
          <div className="btn walletAddress">
            0x24ab32...ed12
          </div>
        }

      </div>

        <hr />

      <div className="sideNavOptions">
        <div className="sideNavOption">
          <Link to='/market' className={window.location.pathname === '/market' ? 'activeSideNavLink' : 'sideNavLink'} >
          <div className="sideNavIcon"><FaChartBar/></div>
          <div className="sideNavText">Market</div>
          </Link>
        </div>
        <div className="sideNavOption">
          <Link to='/portfolio' className={window.location.pathname === '/portfolio' ? 'activeSideNavLink' : 'sideNavLink'}>
          <div className="sideNavIcon"><IoFlowerOutline /></div>
          <div className="sideNavText">Portfolio</div>
          </Link>
        </div>
        <div className="sideNavOption" >
          <Link to='/transactions' className={window.location.pathname === '/transactions' ? 'activeSideNavLink' : 'sideNavLink'}>
          <div className="sideNavIcon"><TbTransactionBitcoin /></div>
          <div className="sideNavText">Transactions</div>
          </Link>
        </div>
        <div className="sideNavOption">
          <Link to='/governance' className={window.location.pathname === '/governance' ? 'activeSideNavLink' : 'sideNavLink'}>
          <div className="sideNavIcon"><GoLaw /></div>
          <div className="sideNavText">Governance</div>
          </Link>
        </div>
        <div className="sideNavOption">
          <Link to='/vault' className={window.location.pathname === '/vault' ? 'activeSideNavLink' : 'sideNavLink'}>
          <div className="sideNavIcon"><PiVaultFill /></div>
          <div className="sideNavText">Vault</div>
          </Link>
        </div>
  
      </div>

      <hr />

      <div className="sideNavSocials">
        {
          sideNavSocials.map(({icon, navText, link, id}) => <div className="sideNavSocial">
            <Link to={link} key={id} className='sideNavLink'>
              <div className="sideNavIcon">{icon}</div>
              <div className="sideNavText">{navText}</div>
            </Link>
          </div> )
        }
      </div>

    </div>
  )
}

export default SideNav