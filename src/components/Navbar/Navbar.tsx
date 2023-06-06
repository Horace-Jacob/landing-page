import React from "react";

export const Navbar = () => {
  return (
    <header className="primary-bg">
      <div className="container position-relative">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container p-0">
            <a href="/" className="navbar-brand">
              <img
                className="navbar-brand-regular"
                src={require("../../images/logo-white.png")}
                alt="logo"
                width="50"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item me-5">
                  <a className="nav-link text-white" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-white" href="/">
                    Features
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-white" href="/">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    Screenshots
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
