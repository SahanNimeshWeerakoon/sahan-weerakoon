import { useState } from 'react'
import Button from "./miniComponents/Button";

const NavBar = ({ toggleContactModal }: { toggleContactModal: any }) => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">
                    <img src="/img/logo.png" alt="Sahan Weerakoon Logo" title="Sahan Weerakoon Logo" />
                </div>
                <div className="navbar_links">
                    <img src="/img/Hamberger.png" alt="Nav menu icon" title="Nav menu icon" onClick={() => {setIsMobileNavActive(state => !state)}} />
                    <ul>
                        <li><a href="#" onClick={() => toggleContactModal("toggleModal")}>CONTACT ME</a></li>
                        <li><a href="#about">ABOUT ME</a></li>
                        <li><Button btnTxt="PROJECTS" url="#projects" /></li>
                    </ul>
                </div>
            </div>
            <ul className={`navbar_mobile ${isMobileNavActive ? 'active' : ''}`}>
                <li><a href="#" onClick={() => toggleContactModal("toggleModal")}>CONTACT ME</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><Button btnTxt="PROJECTS" url="#projects" /></li>
            </ul>
        </nav>
    );
}

export default NavBar;