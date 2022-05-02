import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="container w-25 ">
            <div className="row  text-center">
              <div
                className="col-md-3 border"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => props.colourPallete("green")}
              >
                <strong>1</strong>
              </div>
              <div
                className="col-md-3 border "
                style={{
                  backgroundColor: "#978352",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => props.colourPallete("#978352")}
              >
                <strong>2</strong>
              </div>
              <div
                className="col-md-3 border "
                style={{
                  backgroundColor: "#7952b3",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => props.colourPallete("#7952b3")}
              >
                <strong>3</strong>
              </div>
              <div
                className="col-md-3 border"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => props.colourPallete("red")}
              >
                <strong>4</strong>
              </div>
              <div className="col-md-12 ">
                {props.mode === "dark" ? (
                  <strong style={{ color: "white" }}>colour pallete</strong>
                ) : (
                  <strong>colour pallete</strong>
                )}
              </div>
            </div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {/* Enable DarkMode */}
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "set About text",
};
