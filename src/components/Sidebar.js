import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; 
import { FaHome, FaCalendarAlt } from 'react-icons/fa'; 
import { IoMdTrendingUp } from "react-icons/io";
import { BsChatSquareHeartFill } from "react-icons/bs";

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
      
      <ul className='categories'>
        <hr/>
        <p className='category'>Categories</p>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Action</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Comedy</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Crime</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Fantasy</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Horror</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Mystery</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Romance</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Science Fiction</span>
        </li>
        <li className="category-item">
          <BsChatSquareHeartFill size={25} className="category-icon" />
          <span className="category-text">Thriller</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
