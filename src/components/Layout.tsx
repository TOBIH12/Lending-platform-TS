import HeroSection from "../pages/HeroSection"
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import ErrorPage from "../pages/ErrorPage"
import Market from "./MainApp/Market"
import Portfolio from "./MainApp/Portfolio"
import Transactions from "./MainApp/Transactions"
import Governance from "./MainApp/Governance"
import Vault from "./MainApp/Vault"

const Layout = () => {

  return (
   <>

   <Router>
<Routes>
  <Route path="/" element={<HeroSection/>} errorElement={<ErrorPage/>}/>
  <Route path="/market" element={<Market/>} errorElement={<ErrorPage/>}/>
  <Route path="/portfolio" element={<Portfolio/>} errorElement={<ErrorPage/>}/>
  <Route path="/transactions" element={<Transactions/>} errorElement={<ErrorPage/>} />
  <Route path="/governance" element={<Governance/>} errorElement={<ErrorPage/>} />
  <Route path="/vault" element={<Vault/>} errorElement={<ErrorPage/>} />
</Routes>
   </Router>
   
   </>
  )
}

export default Layout