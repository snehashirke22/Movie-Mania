import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert(`You searched for: ${query}`);
        }
    };

    return (
        <header className="header">
            <div className="logo">
                {logo && <img src={logo} alt="MovieSmash Logo" className="logo-img" />}
                <p className="site-name">MovieMania</p>
            </div>
            <div className="header-actions">
                {isSidebarOpen ? (
                    <AiOutlineClose
                        className="menu-bar-icon"
                        color="black"
                        onClick={toggleSidebar}
                        aria-label="Close Sidebar"
                    />
                ) : (
                    <GiHamburgerMenu
                        className="menu-bar-icon"
                        color="black"
                        onClick={toggleSidebar}
                        aria-label="Open Sidebar"
                    />
                )}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search movies..."
                        aria-label="Search Movies"
                        value={query}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyPress}
                    />
                    <BsSearch className="search-icon" />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
};

export default Header;
