import "./_hotel.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../../context/SearchContext.jsx"
import { AuthContext } from "../../context/AuthContext.jsx"
import { useNavigate } from "react-router-dom"
import Reserve from "../../components/modal/Reserve.jsx"
const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }
    const handleMove = (dir) => {
        let newSlideNumber;
        if (dir === "l") {
            newSlideNumber = slideNumber === 0 ? 3 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 3 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    // urlde 3 / sonra id geliyor bu yuzden [2] yaptım
    const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/find/${id}`)


    const { dates, options } = useContext(SearchContext)
    const dayDifference = (date1, date2) => {
        const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
        const timeDiff = Math.abs(date2.getTime() - date1.getTime())
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    }
    // const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = () => {
        if (user) {
            setModal(true)
        } else {
            navigate("/login")
        }
    }
    return (
        <div>
            <Navbar />
            <Header type="detayPage" />
            {loading ? "Loading please wait" :
                <>
                    <div className="hotelContainer">
                        {open && <div className="slider">
                            <FontAwesomeIcon onClick={() => setOpen(false)} className="close" icon={faCircleXmark} />
                            <FontAwesomeIcon onClick={() => handleMove("l")} className="arrowLeft" icon={faCircleArrowLeft} />
                            <div className="sliderWrapper">
                                <img src={data.photos[slideNumber]} alt="slide" className="sliderImg" />
                            </div>
                            <FontAwesomeIcon onClick={() => handleMove("r")} className="arrowRight" icon={faCircleArrowRight} />
                        </div>}
                        <div className="hotelWrapper">
                            <button id="hotelReserveButton">Reserve or Book Now!</button>
                            <h1 className="hotelTitle">{data.name}</h1>
                            <div className="hotelAddress">
                                <span>{data.address}</span>
                            </div>
                            <span className="hotelDistance">
                                {data.distance}m from center
                            </span>
                            <span className="hotelPriceHighlight">
                                Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                            </span>
                            <div className="hotelImages">
                                {data.photos?.map((photo, i) => (
                                    <div className="hotelImgWrapper" key={i}>
                                        <img onClick={() => handleOpen(i)} src={photo} alt="img" />
                                    </div>
                                ))}
                            </div>
                            <div className="hotelDetails" id="hDtls" >
                                <div className="hotelDetailsTexts">
                                    <h1 className="hotelTitle" id="hTtl" >{data.title}</h1>
                                    <p className="hotelDesc" id="hDsc" >{data.description}</p>
                                </div>
                                <div className="hotelDetailsPrice">
                                    <h1 className="hotelTitle">Perfect for a 3-night stay!</h1>
                                    <span className="hotelDesc">
                                        Located in the real heart of {data.title }, this property has an
                                        excellent location score of 9.8!
                                    </span>
                                    <h2 className="hotelPrice">
                                        <b>${data.cheapestPrice}</b> (3 nights)
                                    </h2>
                                    <button onClick={handleClick} className="hotelReserveButton">Reserve or Book Now!</button>
                                </div>
                            </div>
                        </div>
                        <MailList />
                    </div>
                </>}
            <Footer />
            {modal && <Reserve setOpen={setModal} hotelId={id} />}
        </div>
    )
}

export default Hotel