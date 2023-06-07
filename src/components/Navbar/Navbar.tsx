import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <header className="">
      <div className="container position-relative">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container p-0">
            <a href="/" className="navbar-brand">
              <FontAwesomeIcon
                icon={faCubes}
                style={{ color: "white" }}
                className="nav-icon"
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
