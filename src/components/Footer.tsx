import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <section className="footer">
      <div className="footLinks">
      <Link to='/'>
      <h3>Home</h3>
      </Link>
      <Link to='/'>
      <h3>Whitepaper</h3>
      </Link>
      <Link to='/'>
      <h3>Docs</h3>
      </Link>
      </div>
      <div className="copyright">&copy; 2025 Trillo. All rights reserved</div>
    </section>
  )
}

export default Footer
