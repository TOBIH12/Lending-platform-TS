import {Link} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div>
      Page Not Found
      <Link to='/'>
      <h1>Home</h1>
      </Link>
    </div>
  )
}

export default ErrorPage
