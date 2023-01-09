import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/NavBar.css"

function NavBar() {
    const navRef = useRef();

    // Functionsto add and remove class name
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

        return (
            <header>
                <nav ref={navRef}>
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/education'>Education</a>
                    <a href='/experience'>Experience</a>
                    <a href='/projects'>Projects</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>

        );
}
 
export default NavBar;