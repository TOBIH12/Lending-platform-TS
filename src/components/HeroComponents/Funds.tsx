
import { DummyFundsData } from "../../Data";



const Funds = () => {
  return (
   <section className="funds">
    <div className="fundscontainer">
       <h1 className="fundsHeader">
        Keeping your funds safe is our top priority
       </h1>

       <div className="fundItems">
            {
                DummyFundsData.map((data) => <div className="fundItem">
                    <img src={data.image} alt="" className="fundThumbnail" />
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>)
            }
       </div>
    </div>
   </section>
  )
}

export default Funds
