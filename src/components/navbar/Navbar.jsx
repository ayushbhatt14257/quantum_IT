import React, { useState } from 'react'
import LOGO from '../../assests/logo2.png'
import './navbar.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <>
            <section className='container navbar_section'>
                <div className="nav">
                    <div className="nav_left">
                        <div className="left_img">
                            <img src={LOGO} alt="img" />
                        </div>
                        <h3>Bisnes</h3>
                    </div>

                    <div className="nav_right">
                        <ul className={isMobile ? 'nav_menu-mobile ' : 'nav_menu'}
                            onClick={() => setIsMobile(false)}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Project</li>
                            <li>Blog</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>

                        <button className='mobile-menu-icon'
                            onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar