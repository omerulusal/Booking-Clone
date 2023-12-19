import { Link } from "react-router-dom"
import "./_searchItem.scss"

const SearchItem = ({ item }) => {

    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance" >{item.distance}m from city center</span>
                <span className="siTaxiOp" >Free airport taxi</span>
                <span className="siSubtitle" >Studio Apartment with Air conditioning</span>
                <span className="siFeatures" >{item.desc}</span>
                <span className="siCancelOp" >Free cancellation</span>
                <span className="siCancelOpSubtitle" >You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                {item.rating && <div className="siRating">
                    <span className="siRatingText">Excellent</span>
                    <button className="siRatingButton">{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`} style={{color:"inherit", textDecoration:"none"}} >
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem