import React from "react";

export const Navbar = () => {
  return (
    <header
      className="navbar navbar-sticky navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#542FD8" }}
    >
      <div className="container position-relative">
        <a href="/" className="navbar-brand">
          <img
            className="navbar-brand-regular"
            src={require("../../images/logo-white.png")}
            alt="logo"
            width="50"
            height="50"
          />
        </a>
        <div className="navbar-inner">
          <nav>
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Screenshots
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
