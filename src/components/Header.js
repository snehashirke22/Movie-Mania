import React from 'react';
import '../styles/Header.css';
import movie from '../assets/movie.png';
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import PropTypes from 'prop-types';
import { useDarkMode } from '../context/DarkModeContext';

const Header = ({ toggleSidebar, isSidebarOpen, setQuery}) => {
    
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <header className="header">
            <div className="logo">
                {movie && <img src={movie} alt="MovieSmash Logo" className="logo-img" />}
                <p className="site-name">MovieMania</p>
            </div>
            <div className="header-actions">
                {isSidebarOpen ? (
                    <AiOutlineClose
                        className="menu-bar-icon"
                        onClick={toggleSidebar}
                        aria-label="Close Sidebar"
                    />
                ) : (
                    <GiHamburgerMenu
                        className="menu-bar-icon"
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
                        onChange={handleInputChange}
                    />
                    <BsSearch className="search-icon" />
                </div>


                    <div onClick={toggleDarkMode}>
                        {isDarkMode ? 
                        <MdLightMode
                            size={30}
                            color="white"
                            aria-label="Switch to Light Mode"
                            style={{ cursor: 'pointer' }} /> 
                            : 
                            <MdDarkMode
                            size={30}
                            aria-label="Switch to Dark Mode"
                            style={{ cursor: 'pointer' }} />}
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
