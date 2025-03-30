import Footer from "../components/Footer"
import Header from "../components/Header"
import DecentralizeAd from "../components/HeroComponents/DecentralizeAd"
import Funds from "../components/HeroComponents/Funds"
import Loans from "../components/HeroComponents/Loans"
import MarketStats from "../components/HeroComponents/MarketStats"
import Savings from "../components/HeroComponents/Savings"

const HeroSection = () => {
  return (
    <>
    <Header/>
    <DecentralizeAd />
    <MarketStats />
    <Savings />
    <Loans />
    <Funds />
    <Footer/>
    </>
  )
}

export default HeroSection
