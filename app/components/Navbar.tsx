import { FC } from 'react';
import { Exo_2 } from 'next/font/google'
import Image from 'next/image'

const exo = Exo_2({
    subsets: ['latin']
});

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: FC<Props> = ({ setIsOpen }) => {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">
                    <Image
                        src="/img/logo.png?v=1"
                        width={500}
                        height={500}
                        alt="Sahan Weerakoon Logo"
                        className="w-30"
                    />
                    {/* <img src="/img/logo.png" alt="Sahan Weerakoon Logo" title="Sahan Weerakoon Logo" /> */}
                </div>
                <div className="navbar_links">
                    <a href="#" onClick={() => {setIsOpen((prev: boolean) => !prev)}} className={exo.className}>ABOUT&nbsp;&nbsp;ME</a>
                    <a href="#projects" className={exo.className}>PROJECTS</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;