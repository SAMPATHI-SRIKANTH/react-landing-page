import React from "react";
import "./index.css"; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#jj">BUY COURSES</a>
          </li>
          <li>
            <a href="#jj">PROGRAMS</a>
          </li>
          <li>
            <a href="#jj">FREE RESOURCES</a>
          </li>
          <li>
            <a href="#jj">FREE RESOURCES</a>
          </li>
        </ul>
      </nav>
      <div className="login">Login</div>
    </header>
  );
};

export default Header;
