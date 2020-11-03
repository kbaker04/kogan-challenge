import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="main-nav sticky-top p-0 d-md-flex d-lg-flex">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">
          <img
            className="logo"
            src="//static.kogan.com/static/img/christmas_theme/kogan/kogan-xmax-logo.7278c20a9e73.png"
            alt="Kogan Australia"
            style={{ padding: 0, margin: "4px auto", height: "32px" }}
          />
        </Navbar.Brand>

        <NavLink className="nav-link" to="/">
          Products
        </NavLink>
        <NavLink className="nav-link" to="/setup">
          Setup
        </NavLink>

        <a
          href="https://1drv.ms/b/s!AtH9X3ehW9uYxBN9BUlT-0aZ7Vqf?e=qHcutd"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          CV
        </a>
      </Navbar>
    </div>
  );
};

export default Header;
