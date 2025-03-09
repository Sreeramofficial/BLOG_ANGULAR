import React from "react";

function Footer() {
  return (
    <div
      style={{
        paddingBottom: 50,
        backgroundColor: "rgb(56, 56, 56)",
        height: 100,
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            style={{ color: "white" }}
            className="navbar-brand navbar-brand-center nav-footer"
            href="/"
          >
            Saturn Blogger
            <br></br>
            <p>All rights are reserved</p>
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
        </div>
      </nav>
    </div>
  );
}

export default Footer;
