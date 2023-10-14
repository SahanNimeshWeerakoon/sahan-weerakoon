import Button from "./Button";

const NavBar = ({ toggleContactModal }: { toggleContactModal: any }) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="/img/logo.png" alt="Sahan Weerakoon Logo" title="Sahan Weerakoon Logo" />
            </div>
            <div className="navbar_links">
                <ul>
                    <li><a href="#" onClick={toggleContactModal}>CONTACT MES</a></li>
                    <li><a href="#about">ABOUT ME</a></li>
                    <li><Button btnTxt="PROJECTS" url="#projects" /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;