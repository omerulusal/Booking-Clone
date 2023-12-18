import React, { useContext } from 'react'
import "./_navbar.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">OM3RBooking</span>
                </Link>
                {!user && <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>}
                {user && <div className="navItems">
                    <button className="navButton">Logout</button>
                </div>}
            </div>
        </div>
    )
}

export default Navbar