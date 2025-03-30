import SideNav from "./SideNav";
import Trillo from '../../assets/Group 1034.png';
import { FaTelegramPlane } from "react-icons/fa";
import { ReactNode, useEffect, useState } from "react";
import { IoIosPaper } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Announcement from "../Announcement";
import { DummyMarketStat } from "../../Data";
import Bitcoin from '../../assets/bitcoin-btc-logo 1.png';
import USDT from '../../assets/tether-usdt-logo 1.png';
import Solana from '../../assets/solana-sol-logo 1.png';
import Metamask from '../../assets/metamask-2728406-2261817 1.png';
import BSC from '../../assets/binance-coin-bnb-logo 1.png';
import Group from '../../assets/Group.png';
import ConnectWallet from "../ConnectWallet";
import EthereumIcon from '../../assets/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png 1.png';



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

type Props = {
  percentage: number
  color: string
}

const ProgressBar = ({ percentage, color }: Props) => {
  return (
    <div style={
        {width: "100%", height: '0.6rem', backgroundColor: 'rgba(241, 242, 247, 1)', borderRadius: '0.5rem', marginBottom: '0.4rem', overflow: 'hidden'}
    }>

      <div style={
        {width: `${percentage}%`, backgroundColor: `${color}`, borderRadius: '0.5rem', height: '100%', transition: 'all 1s ease-in-out' }
      }></div>
      
    </div>
  )
}


const Market = () => {
  const [socials] = useState(sideNavSocials)
  const [btcPercentage] = useState<number>(45);
  const [usdtPercentage] = useState<number>(55);
  const [solPercentage] = useState<number>(45);
  const [supplyTheme] = useState<string>('rgba(61, 85, 213, 1)');
  const [borrowTheme] = useState<string>('rgba(28, 208, 172, 1)');
  const [openNav, setOpenNav] = useState<Boolean>(window.innerWidth > 900 ? false : true)
  const [hideCred, setHideCred] = useState<Boolean>(window.innerWidth > 800 ? false : true) 
  const [active, setActive] = useState<Boolean>(false)
  const [openModal, setOpenModal] = useState<Boolean>(false)
  const [check, setCheck] = useState<boolean>(false)
  const [firstAccountCheck, setFirstAccountCheck] = useState<boolean>(false)
  const [secondAccountCheck, setSecondAccountCheck] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false);
  const [btnName] = useState<string>('Next')
  const [openThirdModal, setOpenThirdModal] = useState<boolean>(false)


  const handleMenu = () => {
    setActive(prev => !prev)
}

const handleClosedMenu = () =>{
  setOpenNav(false)
}

const handleModalVisibility = () => {
  setOpenModal((prev) => !prev)
}
const handleSecondModalVisibility = ()=>{
  setOpenThirdModal(false);
  setSecondModal(true);
}
const openThirdModalFunc = () =>{
  setOpenThirdModal(true)
}
const returnFirstModal = () => {
  setSecondModal(false);
}
const closeModal = () =>{
  setOpenModal(false)
}

const handleCheckBox = () => {
  setCheck((prev) => !prev)
}
const handleFirstAccountCheck = () => {
 
    setFirstAccountCheck(prev => !prev)
 
}
const handleSecondAccountCheck = () => {
  setSecondAccountCheck(prev => !prev)
}

const checkScreenSize = () => {
        if(window.innerWidth < 900){
            setOpenNav(true)
        } else if(window.innerWidth >= 800){
            setOpenNav(false)
        };

        if(window.innerWidth > 800){
          setHideCred(false)
        }else if(window.innerWidth <= 800){
            setHideCred(true)
        }
    }

    window.addEventListener('resize', checkScreenSize)

    const handleWalletClick = () => {
        setSecondModal((prev) => !prev)
    }

    useEffect(() => {
        checkScreenSize();
        returnFirstModal();
    }, []);

   

  
  return (
    <section className="marketPage">
      {
        !openNav ?
      <div className="sideNav">
        <div className="sideNavItems">
        <SideNav image={Trillo} btnText="Connect wallet" handleModalVisibility={handleModalVisibility} closeNav={handleClosedMenu} sideNavSocials={socials}/>
        </div>
        
      </div> :  ''
      } 
  {
    openNav && 
     <div className="menuIcons" onClick={handleMenu}>
    { !active &&  <FaBars className='menuIcon'/>}
</div>
  }

  {
    active && <div className="closedUpSideNav">
    <div className="sideNavItems">
    <div className="menuIcons " onClick={handleMenu}>
      <IoMdClose className='menuIcon closeIcon' /> 
      </div>
    <SideNav image={Trillo} btnText="Connect wallet" handleModalVisibility={handleModalVisibility} closeNav={handleMenu} sideNavSocials={socials}/>
    </div>
    
  </div> 
  }

     { !openNav && <hr />}
 
{
  openModal &&
    <ConnectWallet closeModal={closeModal} Metamask={Metamask} BSC={BSC} Group={Group} handleCheckBox={handleCheckBox} check={check} handleFirstAccountCheck={handleFirstAccountCheck} firstAccountCheck={firstAccountCheck} handleSecondAccountCheck={handleSecondAccountCheck} seconAccountCheck={secondAccountCheck} secondModal={secondModal} handleWalletClick={handleWalletClick} ethereumIcon={EthereumIcon} handleModalVisibility={returnFirstModal} name={btnName} openThirdModalFunc={openThirdModalFunc} openThirdModal={openThirdModal} handleSecondModalVisibility={handleSecondModalVisibility}/>
 }

    <div className="market">
     <div className="announcement">
      <Announcement/>
     </div>

     <h1>Market</h1>

     <div className="marketDashboard">
      <div className="totalSupply">
        <div className="supplyStat">
          <h6>Total Supply</h6>

          <h2>$1,220,340,500</h2>

          <p>Top 3</p>

          <div className="coinMonitor">

          <div className="coindetail">
            <img src={Bitcoin} alt="" className="coinMonitorImg" />
            <h2> BTC</h2>
          </div>
        <div className="percentageSupply">{btcPercentage}%</div>

            </div>
            <div className="progressbar">

          <ProgressBar percentage={btcPercentage} color={supplyTheme}/>

        </div>

          <div className="coinMonitor">
      
          <div className="coindetail">
            <img src={USDT} alt="" className="coinMonitorImg" />
            <h2> USDT</h2>
          </div>
        <div className="percentageSupply">{usdtPercentage}%</div>
            </div>

            <ProgressBar percentage={usdtPercentage} color={supplyTheme}/>

          <div className="coinMonitor">
         
          <div className="coindetail">
            <img src={Solana} alt="" className="coinMonitorImg" />
            <h2>SOL</h2>
          </div>
        <div className="percentageSupply">{solPercentage}%</div>
            </div>

            <ProgressBar percentage={solPercentage} color={supplyTheme}/>

          <div className="dashboardstats">
            <div className="volume">
              <p>24h supply volume</p>

              <h4>$20,523,400</h4>
            </div>

            <div className="users">
              <p># of users</p>

              <h4>15,300</h4>
            </div>
          </div>

        </div>
      </div>
      <div className="totalBorrow">
      <div className="supplyStat">
          <h6>Total Borrow</h6>

          <h2>$120,340,500</h2>

          <p>Top 3</p>

          <div className="coinMonitor">

<div className="coindetail">
  <img src={Bitcoin} alt="" className="coinMonitorImg" />
  <h2> BTC</h2>
</div>
<div className="percentageBorrow">{btcPercentage}%</div>

  </div>
  <ProgressBar percentage={btcPercentage} color={borrowTheme}/>

<div className="coinMonitor">

<div className="coindetail">
  <img src={USDT} alt="" className="coinMonitorImg" />
  <h2> USDT</h2>
</div>
<div className="percentageBorrow">{usdtPercentage}%</div>
  </div>

  <ProgressBar percentage={usdtPercentage} color={borrowTheme}/>

<div className="coinMonitor">

<div className="coindetail">
  <img src={Solana} alt="" className="coinMonitorImg" />
  <h2>SOL</h2>
</div>
<div className="percentageBorrow">{solPercentage}%</div>
  </div>
  <ProgressBar percentage={solPercentage} color={borrowTheme}/>


          <div className="dashboardstats">
            <div className="volume">
              <p>24h supply volume</p>

              <h4>$20,523,400</h4>
            </div>
            
            <div className="users">
              <p># of users</p>

              <h4>15,300</h4>
            </div>
          </div>

        </div>
      </div>
     </div>

     <div className="marketStatistics">
     <div className="statsHeaders">
      <div className="asset">
        <h3>Asset</h3>
      </div>
      <div className="assetsKeys">
      <h3>Total Supply</h3>
    { !hideCred &&  <h3>Supply APY</h3>}
      <h3>Total Borrow</h3>
     { !hideCred && <h3>Borrow APY</h3>}
      </div>
     </div>

    {
      DummyMarketStat.map((stats) =>  <div className="mainStats">
        <div className="coinTitles">
        <img src={stats.image} alt="coin logo" className="statImage" />
        <div className="coinNames">
          <h2>{stats.initials}</h2>
          <h4>{stats.title}</h4>
        </div>
        </div>

        <div className="assetsStats">
          <h3>{stats.supply}</h3>
         { !hideCred && <h3>{stats.supplyApy}</h3>}
          <h3>{stats.borrow}</h3>
         { !hideCred && <h3>{stats.borrowApy}</h3>}
        </div>
      </div>)
    }
     </div>


    </div>
    </section>
  )
};

export default Market