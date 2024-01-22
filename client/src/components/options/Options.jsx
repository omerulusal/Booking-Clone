import { useState } from "react";
import "./_options.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const Options = () => {
    const [openOptions, setOpenOptions] = useState(false);//toogle gorevi gorucektir
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 0
    })
    return (
        <>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room}`}</span>
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <button className="optionCounterBtn" onClick={() => options.adult > 1 && setOptions({ ...options, adult: options.adult - 1 })}>-</button>
                    {/* en az 1 yetişkin olmak zorunda. setOptions ile tum state degerlerini aldım ( ardından yetişkin sayısını 1 azalttım */}
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterBtn" onClick={() => options.adult < 5 && setOptions({ ...options, adult: options.adult + 1 })}>+</button>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <button className="optionCounterBtn" onClick={() => options.children > 0 && setOptions({ ...options, children: options.children - 1 })}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterBtn" onClick={() => options.children < 4 && setOptions({ ...options, children: options.children + 1 })}>+</button>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <button className="optionCounterBtn" onClick={() => options.room > 1 && setOptions({ ...options, room: options.room - 1 })}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterBtn" onClick={() => options.room < 3 && setOptions({ ...options, room: options.room + 1 })}>+</button>
                </div>
            </div>}
        </>
    )
}

export default Options