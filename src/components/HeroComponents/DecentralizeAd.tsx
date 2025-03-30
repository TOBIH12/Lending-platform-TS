import {Link} from 'react-router-dom'


const DecentralizeAd = () => {
  return (
    <section className="adBg">
        <div className="adContainer">
        <div className="adTexts">
            <h1>The Liquidity Protocol For Lending And Borrowing</h1>
            <p>Decentralized exchange, Lending Market, Earn Interest, borrow trade and more</p>
        <Link to='/market'>
            <button className="btn btn-primary">
                Launch App
            </button>
                </Link>
        </div>

        <div className="adVideoContainer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DA2ZOM_5ekk?si=_js4-o8FtHjF-ZOR" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='adVideo'></iframe>
        </div>
        </div>
    </section>
  )
}

export default DecentralizeAd
