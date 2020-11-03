import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <div className="main-nav sticky-top p-0 d-md-flex d-lg-flex">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">
          <img
            class="logo"
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
      </Navbar>
    </div>
  );
};

export default Header;
