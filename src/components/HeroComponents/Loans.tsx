import LoanImg from '../../assets/istockphoto-1288081906-612x612 1.png';
import {Link} from 'react-router-dom';



const Loans = () => {
  return (
    <section className="heroContainer loan">
        <div className="heroImage">
        <img src={LoanImg} alt="" />
        </div>

        <div className="heroTexts">
            <h4>Instant loans</h4>
            <h2>Instant liquidity at your fingertips</h2>
            <p>Get an instant loan to unlock liquidity from idle crypto assets into Trillo</p>

            <Link to='/portfolio'>
    <button className="btn btn-secondary" role='status'>
        Start borrowing
    </button>
    </Link>
        </div>
    </section>
  )
}

export default Loans
