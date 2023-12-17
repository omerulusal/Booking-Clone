import "./_hotel.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const photos = [
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509557781.jpg?k=c7cd2172ea8072181c3133f239d9bc2381635b3817e5e6ac05602a54d2ccd9fd&o=&hp=1",
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509557710.jpg?k=52e37fd6dc16a524e2b6fc06e5ed35c502f1b7df45fc04edd01cfc3d09d67f71&o=&hp=1",
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509557759.jpg?k=0b5034cdf26620393621e3e66e6c9403a6315296754b8b0d65f7ab2a1b8f74b5&o=&hp=1",
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509557761.jpg?k=2255c80f7a16f5f3ab09c06874ce2b36ceca3cc94a303d33d0019d21cc58b990&o=&hp=1",
    }
]

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
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
    return (
        <div>
            <Navbar />
            <Header type="detayPage" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon onClick={() => setOpen(false)} className="close" icon={faCircleXmark} />
                    <FontAwesomeIcon onClick={() => handleMove("l")} className="arrowLeft" icon={faCircleArrowLeft} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="slide" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon onClick={() => handleMove("r")} className="arrowRight" icon={faCircleArrowRight} />
                </div>}
                <div className="hotelWrapper">
                    <button id="hotelReserveButton">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">The Legend</h1>
                    <div className="hotelAddress">
                        <span>Barcelona, Spain</span>
                    </div>
                    <span className="hotelDistance">
                        500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="img" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Barcelona</h1>
                            <p className="hotelDesc">
                                Barselona'da yer alan klimalı Galileu B Apartment, Sants Tren İstasyonu'na 1,1 km,
                                Camp Nou'ya ise 1,6 km uzaklıktadır. Tesis, La Pedrera'ya yaklaşık 3,9 km, Casa Batllo'ya 4 km ve Passeig de
                                Gracia'ya 4,3 km uzaklıktadır. Sigara içilmeyen tesis Montjuic Sihirli Çeşmesi'ne 2,6 km uzaklıktadır.
                                Dairede 1 yatak odası, düz ekran TV ve fırın, mikrodalga fırın, çamaşır makinesi, buzdolabı ve set üstü ocak
                                bulunan tam donanımlı mutfak vardır.Daire, Plaça Catalunya'ya ve Passeig de Gracia Metro İstasyonu'na 4,4 km uzaklıktadır.
                                En yakın havaalanı olan Barselona El Prat Havaalanı 11 km mesafededir.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1 className="hotelTitle">Perfect for a 9-night stay!</h1>
                            <span className="hotelDesc">
                                Located in the real heart of Berlin, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2 className="hotelPrice">
                                <b>$945</b> (9 nights)
                            </h2>
                            <button className="hotelReserveButton">Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
            </div>
            <Footer />
        </div>
    )
}

export default Hotel