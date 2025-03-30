import { Link } from 'react-router-dom'
import SavingsImage from '../../assets/3766571-removebg-preview 1.png'
const Savings = () => {
  return (
   <section className="heroContainer">
    <div className="heroTexts">
    <h4>Savings</h4>
    <h2>Generate passive yeilds on your assets</h2>
    <p>Crypto assets deposited in Trillo earn attractive APYs based on dynamic rates according to market demands. Earnings are available immediately with no lockup.</p>


    <Link to='/portfolio'>
    <button className="btn btn-secondary" role='status'>
        Start saving
    </button>
    </Link>
    </div>

    <div className="heroImage">
    <img src={SavingsImage} alt="" />
    </div>
   </section>
  )
}

export default Savings
