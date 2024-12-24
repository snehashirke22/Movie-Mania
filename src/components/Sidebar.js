import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { FaHome, FaCalendarAlt } from 'react-icons/fa';
import { IoMdTrendingUp } from "react-icons/io";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { BiSolidMoviePlay } from "react-icons/bi";


const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/" activeClassName="active" className="menu-item-link">
            <FaHome size={28} className="menu-icon" />
            <span className="menu-text">Home</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/trending" activeClassName="active" className="menu-item-link">
            <IoMdTrendingUp size={28} className="menu-icon" />
            <span className="menu-text">Trending</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/upcoming" activeClassName="active" className="menu-item-link">
            <FaCalendarAlt size={28} className="menu-icon" />
            <span className="menu-text">Upcoming</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/peoplechoice" activeClassName="active" className="menu-item-link">
            <BsChatSquareHeartFill size={28} className="menu-icon" />
            <span className="menu-text">People's Choice</span>
          </NavLink>
        </li>
      </ul>

      <ul className="categories">
        <hr />
        <p className="category">Genres</p>
        <li className="category-item">
          <NavLink to="/genre/28" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Action</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/35" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Comedy</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/80" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Crime</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/14" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Fantasy</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/27" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Horror</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/9648" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Mystery</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/878" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Science Fiction</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/53" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">Thriller</span>
          </NavLink>
        </li>
        <li className="category-item">
          <NavLink to="/genre/36" activeClassName="active" className="category-item-link">
            <BiSolidMoviePlay size={25} className="category-icon" />
            <span className="category-text">History</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
