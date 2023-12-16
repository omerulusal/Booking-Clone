import React from 'react'
import "./_navbar.scss"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">OM3RBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar