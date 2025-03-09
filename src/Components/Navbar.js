import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <nav className="navbar navbar-expand-lg navbar-light  nav-header">
        <div className="container-fluid">
          <a
            style={{ color: "white" }}
            className="navbar-brand navbar-brand-center"
            href="/"
          >
            Saturn Blogger
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item">
                <Link className="btn btn-outline-primary">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-primary" to={"/addUser"}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
