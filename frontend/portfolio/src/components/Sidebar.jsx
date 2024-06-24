import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='sidebar'>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <div className="hamburger-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>
      <div className={`sidebar-content ${showSidebar ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar



