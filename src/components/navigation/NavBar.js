import { useRef, useState } from "react";
import "../../styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    const navRef = useRef();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const [isInputVisible, setIsInputVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleClick = () => {
        setIsInputVisible(true);
    };

    const closeSearch = () => {
        setIsInputVisible(false);
    };


    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        console.log('Perform search with: ', searchValue);
        setSearchValue('');
        setIsInputVisible(false);
    };

    return (
        <header>
            <div className="header-group">
                <div className="hamburger-section">
                    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className={`menu ${isOpen ? 'open' : ''}`}>
                        <div className={`exit-menu ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
                            <div className="x-line-one"></div>
                            <div className="x-line-two"></div>
                        </div>
                        <ul className="hamburger-menu-choices">
                            <li className="choices"><a href="/">Home</a></li>
                            <li className="choices"><a href="/menu-selection">Search</a></li>
                            <li className="choices"><a href="/contact-us">Contact Us</a></li>
                            <li className="choices"><a href="/about-us">About Us</a></li>
                            {/* <li>Login</li> */}
                        </ul>
                    </div>
                </div>
                <div className="logo-section">
                    <h1 className="logo">Next Meal</h1>
                </div>
                <div className="header-btns">
                    <nav ref={navRef}>
                        <ul>
                        {/* 
                        I want to save the login for when/if i implement users being able 
                        to sign in
                        
                        <a className="header-btns-login" href="/">Login</a>
                        */}
                        <li>
                            <div>
                                {isInputVisible ? (
                                    <div className="search-container">
                                        <input className="search-box" type="text" value={searchValue} onChange={handleInputChange} placeholder="Search For A Dish!" />
                                        <div className="search-buttons">
                                            <FontAwesomeIcon icon={faSearch} className="search-button" onClick={handleSearch} />
                                            <FontAwesomeIcon icon={faTimes} className="search-button" onClick={closeSearch} />
                                        </div>
                                    </div>
                                ) : (
                                    <FontAwesomeIcon icon={faSearch} className="search-button" onClick={handleClick} />
                                )}
                            </div>
                        </li>
                        {/*
                        this is an x mark to close the, soon to be, pop out menu, just need to implement a way to only show
                        when the side menu is
                        <button className="hamburger-ex" onClick={showNavBar}>
                            <FaTimes/>
                        </button>
                        */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;