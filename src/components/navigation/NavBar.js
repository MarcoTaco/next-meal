import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    // state for keeping hamburger menu open or close
    const [isOpen, setIsOpen] = useState(false);

    // open menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // close menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    // states for search value and search input box. turning them off and on
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    // next two consts are for changing the state of the search box
    const handleClick = () => {
        setIsInputVisible(true);
    };

    const closeSearch = () => {
        setIsInputVisible(false);
    };

    // next two consts are the logic of what goes on in the search box
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
                            <li className="choices"><Link to="/">Home</Link></li>
                            <li className="choices"><Link to="/ingredients-page">Ingredients Page</Link></li>
                            <li className="choices"><Link to="/food-display-page">Foods Display Page</Link></li>
                            <li className="choices"><a href="/menu-selection">Search</a></li>
                            <li className="choices"><a href="/contact-us">Contact Us</a></li>
                            <li className="choices"><a href="/about-us">About Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo-section">
                    <h1 className="logo">Next Meal</h1>
                </div>
                <div className="header-btns">
                    <nav>
                        <ul>
                            <li>
                                <div>
                                    {isInputVisible ? (
                                        <div className="search-container">
                                            <input className="search-box" type="text" value={searchValue} onChange={handleInputChange} placeholder="Search For A Dish!" />
                                            <div className="search-buttons-section">
                                                <FontAwesomeIcon icon={faSearch} className="search-button" onClick={handleSearch} />
                                                <FontAwesomeIcon icon={faTimes} className="search-button" onClick={closeSearch} />
                                            </div>
                                        </div>
                                    ) : (
                                        <FontAwesomeIcon icon={faSearch} className="search-button" onClick={handleClick} />
                                    )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;