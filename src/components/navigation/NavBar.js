import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/NavBar.css";

function NavBar(){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="header-group">
                <div className="hamburger">
                    <button className="hamburger-bars" onClick={showNavBar}> <FaBars /> </button>
                </div>
                <div className="logo-section">
                    <h1 className="logo">Next Meal</h1>
                </div>
                {/* 
                    so this is how you comment on react huh 
                    i need to look up what ref is. id imagine it's like html
                    where it's referencing something. good for navigating pages or something
                */}
                <div className="header-btns">
                    <nav ref={navRef}>
                        <a className="header-btns-login" href="/">Login</a>
                        <a className="header-btns-search" href="/">Search</a>
                        
                        {/*
                         this is an x mark to close the, soon to be, pop out menu, just need to implement a way to only show
                         when the side menu is
                        <button className="hamburger-ex" onClick={showNavBar}>
                            <FaTimes/>
                        </button>
                        */}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;