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
          <li><Link onClick={toggleSidebar} to="/">Home</Link></li>
          <li><Link onClick={toggleSidebar} to="/about">About Me</Link></li>
          <li><Link onClick={toggleSidebar} to="/projects">My Projects</Link></li>
          <li><Link onClick={toggleSidebar} to="/skills">My Skills</Link></li>
          <li><Link onClick={toggleSidebar} to="/contact">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar



