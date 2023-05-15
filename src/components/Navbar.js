import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMessageSquare, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaLinkedin />
      </div>
      <div className="search-bar">
        {/* Search functionality */}
      </div>
      <div className="icons">
        <div className="icon">
          <FiMessageSquare />
        </div>
        <div className="icon">
          <FiUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
