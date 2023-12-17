import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./_header.scss"
import { faBed, faCalendarDays, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import Options from "../options/Options";
const Header = ({ type }) => {

    const navigate = useNavigate();
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, Options } });
        // hotels sayfasına git ve state'e bilgilerini de aktar
    }
    const [display, setDisplay] = useState(false);
    // disardidan type propu aldım(List.jsx) ve type list'e eşit degilse görunur.
    return (
        <>
            {type !== "list" && <>
                <div className="header">
                    <div className="headerContainer">
                        <div className="headerList">
                            <div className="headerListItem active ">
                                <FontAwesomeIcon icon={faBed} />
                                <span>Stays</span>
                            </div>
                            <div className="headerListItem">
                                <FontAwesomeIcon icon={faPlane} />
                                <span>Flights</span>
                            </div>
                            <div className="headerListItem">
                                <FontAwesomeIcon icon={faCar} />
                                <span>Car rentals</span>
                            </div>
                            <div className="headerListItem">
                                <FontAwesomeIcon icon={faTaxi} />
                                <span>Airport taxis</span>
                            </div>
                        </div>
                        {type !== "detayPage" && <>
                            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                            <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free OM3RBooking account</p>
                            <button className="headerBtn">Sign in / Register</button>
                            <div className="headerSearch">
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                    <input type="text" placeholder="Where are you going" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)} />
                                </div>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                    <span className="headerSearchText" onClick={() => setDisplay(!display)} > {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>
                                    {/* span içinde tarihleri yazdırdık */}
                                    {display && <DateRangePicker
                                        onChange={item => setDate([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={1}
                                        ranges={date}
                                        direction="horizontal"
                                        className="date"
                                    />}
                                </div>
                                <div className="headerSearchItem">
                                    <Options />
                                </div>
                                <div className="headerSearchItem">
                                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </>}
        </>
    )
}

export default Header