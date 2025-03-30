import { IoMdClose } from 'react-icons/io'
import CheckBox, { Next } from './MainApp/CheckBox'
import { Link } from 'react-router-dom'
import AccountImg from '../assets/Group 1081.png'
import {Cancel} from './MainApp/CheckBox';
import { IoEyeOutline } from "react-icons/io5";


interface Props{
    closeModal: ()=>void
    Metamask: string
    BSC: string
    Group: string
    handleCheckBox?: ()=>void
    check?: boolean
    handleFirstAccountCheck?: ()=>void
    firstAccountCheck?: boolean
    handleSecondAccountCheck?: ()=>void
    seconAccountCheck: boolean
    secondModal: boolean
    handleWalletClick: ()=>void
    ethereumIcon: string
    handleModalVisibility: ()=>void
    handleSecondModalVisibility: ()=>void
    name: string
    openThirdModalFunc: ()=>void
    openThirdModal: boolean
}



const ConnectWallet = ({ closeModal, Metamask, BSC, Group, handleCheckBox, check, handleFirstAccountCheck, firstAccountCheck, handleSecondAccountCheck, seconAccountCheck, secondModal, handleWalletClick, ethereumIcon, handleModalVisibility, name, openThirdModalFunc, openThirdModal, handleSecondModalVisibility }: Props) => {

    
   return (
     <>
    { 
    !secondModal &&
     <div className="connectWallet">
     <div className="connectWalletHeader">
   <h1>Connect Wallet</h1>
     <IoMdClose onClick={closeModal} className='menuIcon closeConnect'/>
     </div>
   
   <div className="walletPlatforms">
 
   <div className="walletPlatform" onClick={handleWalletClick}>
     <img src={Metamask} alt="" className="platformImg" />
     <span>Metamask</span>
   </div>
 
   <div className="walletPlatform" onClick={handleWalletClick}>
     <img src={BSC} alt="" className="platformImg" />
     <span>BSC</span>
   </div>
 
   <div className="walletPlatform" onClick={handleWalletClick}>
     <img src={Group} alt="" className="platformImg" />
     <span>WalletConnect</span>
   </div>
 
   </div>
   
   <div className="policy">
     <div className="policyCheck" onClick={handleCheckBox}>
     <CheckBox check={check}/>
     </div>
   
     <div className="policyTerms">
       <Link>Accept</Link> Terms of Use. Privacy Policy, and <Link>Disclaimer</Link>
     </div>
   </div>
   
     </div>}
 
     {
      secondModal && 
         <div className={!openThirdModal ? "walletConnect" : 'walletUnconnect'}>
             <div className="walletHeader">
                 MetaMask Notification
             </div>
 
             <div className="walletContent">
 
                 <div className="pageCount">
                    {!secondModal && <div className="pageNav">Back</div>}
                     <div className="count">1 of 2</div>
                 </div>
 
             <div className="mainNet">
             <img src={ethereumIcon} alt="" className="ethereumIcon" />
             <h3>Etheruem mainnet</h3>
             </div>
             <h1>Connect With MetaMask</h1>
             <span>Select the account(s) to use on this site</span>
 
             <div className="selectAccount">
                 <div className="selectAll">
                <input type="checkbox" name="" id="" checked />
                     <span>Select all</span>
                 </div>
 
                 <div className="newAccount">
                     <Link>New Account</Link>
                 </div>
             </div>
 
 
             <div className="accountsList">
                 <div className="account">
                     <div className="accountCheck" onClick={()=> {
                         !seconAccountCheck && handleFirstAccountCheck
                     } } >
                         <CheckBox firstAccountCheck={!seconAccountCheck && firstAccountCheck}/>
                     </div>
                     <div className="accountImg">
                         <img src={AccountImg} alt="" />
                     </div>
 
                     <div className="accountDesc">
                         <h1>Account 1 (...24fd)</h1>
                         <span>120.327545 ETH</span>
                     </div>
                 </div>
 
                 <hr />
                 <div className="account">
                     <div className="accountCheck" onClick={()=> !firstAccountCheck && handleSecondAccountCheck}>
                         <CheckBox firstAccountCheck={!firstAccountCheck && seconAccountCheck}/>
                     </div>
                     <div className="accountImg">
                         <img src={AccountImg} alt="" />
                     </div>
 
                     <div className="accountDesc">
                         <h1>Account 2 (...24fd)</h1>
                         <span>120.327545 ETH</span>
                     </div>
                 </div>
             </div>
 
             <div className="learnMore">
                 Only connect with sites you trust. <Link>Learn More</Link>
             </div>
             </div>
 
           <div className="proceedBtns">
             <Cancel handleModalVisibility={handleModalVisibility}/>
             <Next name={name} openThirdModalFunc={openThirdModalFunc} />
           </div>
 
         </div>
     }
 
     {
         openThirdModal &&
             <div className={!secondModal ? 'closeThirdModal' : "walletConnect"}>
                <div className="walletHeader">
                 MetaMask Notification
             </div>
 
             <div className="walletContent">
 
                 <div className="pageCount">
                     <div className="pageNav" onClick={handleSecondModalVisibility}>Back</div>
                     <div className="count">2 of 2</div>
                 </div>
 
             <div className="mainNet">
             <img src={ethereumIcon} alt="" className="ethereumIcon" />
             <h3>Etheruem mainnet</h3>
             </div>
             <h1>Connect to Account 1 (...24fd)</h1>
             <span>Allow this site to:</span>
 
             <div className="sitePermission">
 
             <IoEyeOutline className='permissionEye'/>
             <h3>See address, account balance, activity and suggest transactions to approve</h3>
             </div>
 
             <hr />
 
 
            
             <div className="learnMore">
                 Only connect with sites you trust. <Link>Learn More</Link>
             </div>
             </div>
 
           <div className="proceedBtns">
             <Cancel handleSecondModalVisibility={handleSecondModalVisibility}/>
             <Next name={'Connect'} />
           </div>
 
             </div>
     }
 
     </>
   )

}


export default ConnectWallet