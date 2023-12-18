import React, { useState } from 'react'
import "./_list.scss"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { useLocation } from "react-router-dom"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from "../../hooks/useFetch.js"

const List = () => {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state?.destination || '');
    const [dates, setDates] = useState(location.state?.dates || [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState(location.state?.options || [{
        adult: 1,
        children: 0,
        room: 0
    }]);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [display, setDisplay] = useState(true);
    const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min={min || 0}&max={max || 999 }`);

    const handleClick = () => {
        reFetch()
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input className='lsItemInput' type="text" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span className='lsItemSpan'>
                                <span onClick={() => setDisplay(!display)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`} </span>
                            </span>
                            <div className="date">
                                {display && <DateRange
                                    onChange={item => setDates([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    ranges={dates}
                                    direction="horizontal"
                                    className="date"
                                />}
                            </div>
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Min price <small>per night</small></span>
                                <input type="number" onChange={(e) => setMin(e.target.value)} className='lsOptionInput' />
                            </div>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Max price <small>per night</small></span>
                                <input type="number" onChange={(e) => setMax(e.target.value)} className='lsOptionInput' />
                            </div>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Adult</span>
                                <input min={1} max={5} type="number" className='lsOptionInput' placeholder={options.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Children</span>
                                <input min={0} max={4} type="number" className='lsOptionInput' placeholder={options.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Room</span>
                                <input min={1} max={5} type="number" className='lsOptionInput' placeholder={options.room} />
                            </div>
                        </div>
                        <button onClick={handleClick} className='lsButton'>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "loading" : (
                            <>
                                {data?.map(item => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List