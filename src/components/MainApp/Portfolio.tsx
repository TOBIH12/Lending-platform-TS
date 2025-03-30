import { ReactNode, useEffect, useState } from 'react';
import Trillo from '../../assets/Group 1034.png';
import SideNav from './SideNav'
import { IoIosPaper, IoMdClose } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { FaBars, FaTelegramPlane } from 'react-icons/fa';
import Announcement from '../Announcement';
import LendImg from '../../assets/icons8-request_money 1.png'
import BorrowImg from '../../assets/icons8-request_money 1 (1).png'
import PercentageImg from '../../assets/icons8-percentage 1.png'
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Ethereum2 from '../../assets/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png 1.png';
import USDT2 from '../../assets/tether-usdt-logo 2.png';
import AAVE from '../../assets/aave-aave-logo 1.png';
import Tron from '../../assets/tron-trx-logo 1.png';
import EthereumIcon from '../../assets/Ethereum.png';
import { Switch } from './CheckBox';




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

const Portfolio = () => {
     const [socials] = useState(sideNavSocials);
      const [openNav, setOpenNav] = useState<Boolean>(window.innerWidth > 900 ? false : true)
      const [active, setActive] = useState<Boolean>(false)
      const [openModal, setOpenModal] = useState<Boolean>(false)
      const [supplyModal, OpenSupplyModal] = useState<Boolean>(false)
      const [borrowModal, OpenBorrowModal] = useState<Boolean>(false)
      const [tokenBalance] = useState<number>(100)
      const [borrowed] = useState<number>(0)
      const [supplyValue, setSupplyValue] = useState<number>()
      const [errorMessage, setErrorMessage] = useState<string>('')
      const [statusPercentage] = useState<number>(45)
      const [statusColor] = useState<string>('green')
      const [isOn, setIsOn] = useState<boolean>(false)
     
    
    
      const handleMenu = () => {
        setActive(prev => !prev)
    }
    
    const handleClosedMenu = () =>{
      setOpenNav(false)
    }

    const closeModal = () =>{
      OpenSupplyModal(false);
      OpenBorrowModal(false);
    }
    
    const handleModalVisibility = () => {
      setOpenModal((prev) => !prev)
    }
    const checkScreenSize = () => {
            if(window.innerWidth < 900){
                setOpenNav(true)
            } else if(window.innerWidth >= 800){
                setOpenNav(false)
            };
    
        }

        const handleSupplyModal = () =>{
          OpenSupplyModal((prev) => !prev)
        }
        const handleBorrowModal = () =>{
          OpenBorrowModal((prev) => !prev)
        }       
        window.addEventListener('resize', checkScreenSize)
    
        useEffect(() => {
            checkScreenSize();
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
    openNav &&  <div className="menuIcons" onClick={handleMenu}>
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

     { !openNav && <hr />} {openModal && <div className="modalPage"></div>}

  <div className="market">
  <div className="announcement">
      <Announcement/>
     </div>

     <h1>Ethereum mainnet</h1>

     <div className="ethereumBoards">
      <div className="topBoards">
        <div className="statBoards">
  <div className="figureSpan">
    <h2>$0.00</h2>
    <span>Lend</span>
  </div>
  <div className="lendImg">
 <img src={LendImg} alt="" />
  </div>

        </div>
        <div className="statBoards">
  <div className="figureSpan">
    <h2>$0.00</h2>
    <span>Borrowed</span>
  </div>
  <div className="lendImg">
 <img src={BorrowImg} alt="" />
  </div>

        </div>
        <div className="statBoards">
  <div className="figureSpan">
    <h2>0.00%</h2>
    <span>Net APY</span>
  </div>
  <div className="lendImg">
 <img src={PercentageImg} alt="" />
  </div>

        </div>
      </div>
      <div className="bottomBoards">
        <div className="second">
        <div className="figureSpan">
    <h2>$300,000</h2>
    <span>Balance</span>
  </div>
  <div className="moreButtons">
    <button className='moreButton'>Trade Now <FaArrowRight /> </button>
  </div>
        </div>
        <div className="second">
        <div className="figureSpan">
    <h2>4</h2>
    <span>Strategies</span>
  </div>
  <div className="moreButtons">
    <button className='moreButton'>Show Strategies<FaArrowRight /> </button>
  </div>
        </div>
      </div>
     </div>

<div className="positionsHeader">
     <h2>Your positions</h2>

     <div className="searchBar">
      <CiSearch className='searchIcon'/>
      <input type="text" className="search" placeholder='Search positions'/>
     </div>

</div>

<div className="positionSection">
  <div className="positionBoard">
<div className="balanceDiv">
<div className="iconData">
  <img src={Ethereum2} alt="" />
  <div className="balance">
    <h2>$0.00</h2>
    <span>0.00 ETH</span>
  </div>
</div>
<div className="position">No Position</div>
</div>

<hr />

<div className="supplyBorrowPerc">
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Supply</div>

  </div>
  <hr />
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Borrow</div>

  </div>
</div>
<hr />

<div className="supplyBorrowBtns">
  <button className="supplyBorrow" onClick={handleSupplyModal} >Supply</button>
  <button className="supplyBorrow" onClick={handleBorrowModal}>Borrow</button>
</div>
  </div>

  <div className="positionBoard">
<div className="balanceDiv">
<div className="iconData">
  <img src={USDT2} alt="" />
  <div className="balance">
    <h2>$0.00</h2>
    <span>0.00 USDT</span>
  </div>
</div>
<div className="position">No Position</div>
</div>

<hr />

<div className="supplyBorrowPerc">
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Supply</div>

  </div>
  <hr />
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Borrow</div>

  </div>
</div>
<hr />

<div className="supplyBorrowBtns">
  <button className="supplyBorrow" onClick={handleSupplyModal}>Supply</button>
  <button className="supplyBorrow" onClick={handleBorrowModal}>Borrow</button>
</div>
  </div>

  <div className="positionBoard">
<div className="balanceDiv">
<div className="iconData">
  <img src={AAVE} alt="" />
  <div className="balance">
    <h2>$0.00</h2>
    <span>0.00 AAV</span>
  </div>
</div>
<div className="position">No Position</div>
</div>

<hr />

<div className="supplyBorrowPerc">
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Supply</div>

  </div>
  <hr />
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Borrow</div>

  </div>
</div>
<hr />

<div className="supplyBorrowBtns">
  <button className="supplyBorrow" onClick={handleSupplyModal}>Supply</button>
  <button className="supplyBorrow" onClick={handleBorrowModal}>Borrow</button>
</div>
  </div>

  <div className="positionBoard">
<div className="balanceDiv">
<div className="iconData">
  <img src={Tron} alt="" />
  <div className="balance">
    <h2>$0.00</h2>
    <span>0.00TRX</span>
  </div>
</div>
<div className="position">No Position</div>
</div>

<hr />

<div className="supplyBorrowPerc">
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Supply</div>

  </div>
  <hr />
  <div className="supplyPerc">
  <div className="supplyBorrowNums">
    <h3>0.08%</h3>
    <div className="smallPerc">
    <div className="greenDot"></div>
  <h4>0.o5%</h4>
    </div>

  </div>
  <div className="statName">Borrow</div>

  </div>
</div>
<hr />

<div className="supplyBorrowBtns">
  <button className="supplyBorrow" onClick={handleSupplyModal}>Supply</button>
  <button className="supplyBorrow" onClick={handleBorrowModal}>Borrow</button>
</div>
  </div>

</div>


  </div>

  {
    supplyModal && <div className="supplyModalPage">
      <div className="supplyModalHeader">
        <h1>Supply ETH</h1>
      <IoMdClose onClick={closeModal} className='menuIcon closeConnect'/>
      </div>

      <div className="supplyModalContents">
        <div className="token">
      <div className="tokenBalance">
        <h3>Token Balance</h3>
        <h2>{tokenBalance}</h2>
      </div>
      <div className="tokenIcon">
        <img src={Ethereum2} alt="" />
      </div>
        </div>

        <hr />
        <div className="supplyInputDiv">
        {tokenBalance < supplyValue! || supplyValue! < 0 ? <p className="errorMessage">{errorMessage}</p> : ''}
        <input type="number" className='supplyInput' value={isOn ? tokenBalance : supplyValue} onChange={(e) => {
          setSupplyValue(e.target.valueAsNumber)}} placeholder='Amount to supply'/>

        </div>
        <hr />

        <div className="setMax">
          <div className="maxAmount">
          <h1>Set Max</h1>
          {isOn && <h4>{tokenBalance} ETH</h4>}
          </div>

          <div className="switchDiv">
            <Switch isOn={isOn} handleToggle={() => setIsOn(!isOn)}/>
          </div>

        </div>

        <hr />

        <h2>Supply/Lending rates</h2>

        <div className="lending">
          <div className="ethLendingImg">
            <img src={EthereumIcon} alt="" />
          <h4>ETH Lending APY</h4>
          </div>
          <h5>3.67%</h5>
        </div>
        <div className="lending">
          <div className="ethLendingImg">
            <img src={EthereumIcon} alt="" />
          <h4>Trl Lending APY</h4>
          </div>
          <h5>3.67%</h5>
        </div>
        <div className="lending">
          <div className="ethLendingImg">
          <h3>Total Net APY with MNT Boost</h3>
          </div>
          <h2>7.35%</h2>
        </div>
        <div className="lending">
          <div className="ethLendingImg">
          <h5>In one year</h5>
          </div>
          <h5>9.07%</h5>
        </div>

        <div className={tokenBalance >= supplyValue! || supplyValue! > 0 || isOn ? 'btn supplyBtn' : 'inactiveBtn'} onClick={() =>{
          if(tokenBalance < supplyValue! || supplyValue! < 0){
            setErrorMessage('Input a valid balance please')
          }else if(tokenBalance >= supplyValue!){
            setErrorMessage('')
          }
        }}>Amount to supply</div>
      </div>
    </div>
  }

  {
    borrowModal && <div className="supplyModalPage">
    <div className="supplyModalHeader">
      <h1>Borrow Aave</h1>
    <IoMdClose onClick={closeModal} className='menuIcon closeConnect'/>
    </div>

    <div className="supplyModalContents">
      <div className="token">
    <div className="tokenBalance">
      <h3>Borrowed</h3>
      <h2>{borrowed}</h2>
    </div>
    <div className="tokenIcon">
      <img src={AAVE} alt="" />
    </div>
      </div>

      <hr />
      <div className="supplyInputDiv">
      {tokenBalance < supplyValue! || supplyValue! < 0 ? <p className="errorMessage">{errorMessage}</p> : ''}
      <input type="number" className='supplyInput' placeholder='Amount to borrow'/>

      </div>
      <hr />

      <div className="debtPosition">
        <h1>Projected Debt Position</h1>

      </div>

      <hr />

      <div className="lending borrowStatus">
        <div className="ethLendingImg">
        <h5>Status</h5>
        </div>
        <div className="statusSituation">Safe</div>
      </div>

      <div className="statusPerc">
        <h1>{statusPercentage}%</h1>
        <div style={
        {width: "100%", height: '0.4rem', backgroundColor: 'rgba(228, 234, 249, 1)', borderRadius: '0.5rem', overflow: 'hidden'}
    }>

      <div style={
        {width: `${statusPercentage}%`, backgroundColor: `${statusColor}`, borderRadius: '0.5rem', height: '100%', transition: 'all 1s ease-in-out' }
      }></div>
      
    </div>
      </div>

      <div className="liquidationPrice">
        <h2>Liquidation price (ETH)</h2>
        <h1>$2.450/$2.800</h1>
      </div>

      <div className='btn supplyBtn'>Borrow</div>
    </div>
  </div>

  }
  </section>
  )
}

export default Portfolio