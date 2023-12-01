import React from 'react';
import './Navbar.css';
import logo from "../utils/icons/logo.png"
import burgericon from "../utils/icons/burger.png"

const Navbar = () => {


    return (
        <>
            <div className='container' >
                <div id="mobile-nav">
                    <div>
                        <img src={logo} alt="logo" id='logo' />
                    </div>
                    <div>
                        <img src={burgericon} alt="burger-icon" id='burger' />
                    </div>
                </div>
                <nav>
                    <div className='nav-items'>
                        <ul>
                            <img src={logo} alt="logo" id='logo' />
                            <li><a href='#'>Product</a></li>
                            <li><a href='#'>Download</a></li>
                            <li><a href='#'>Solutions</a></li>
                            <li><a href='#'>Resources</a></li>
                            <li><a href='#'>Pricing</a></li>
                        </ul>
                    </div>
                    <div className='nav-items'>
                        <ul>
                            <li><a href='#'>Request a demo</a></li>
                            <li><a href='#' id='login'>Log in</a></li>
                            <li><button id='getnotionbtn'>Get Notion free</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar