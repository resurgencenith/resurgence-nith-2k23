import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import FadeInFromTop from "./AnimationComponents/FadeInFromTop";

export default function Navbar() {
  return (
      <div className="navbar-container container">
      <input type="checkbox" name="" id="" className="checkbox"/>
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <FadeInFromTop delay="0.5">
          <img className="logo" src={logo} />
        </FadeInFromTop>
        <ul className="menu-items">
            <li>
          <FadeInFromTop delay="0.7">
              <Link to="/" smooth={true} href="#">Home</Link>
          </FadeInFromTop>
            </li>
          {/* <FadeInFromTop delay="0.9">
            <li>
              <Link to="about">About</Link>
            </li>
          </FadeInFromTop> */}
          <FadeInFromTop delay="0.9">
            <li>
              <Link to="team">Team</Link>
            </li>
          </FadeInFromTop>
          {/* <FadeInFromTop delay="1.3">
            <li>
              <Link to="events">Events</Link>
            </li>
          </FadeInFromTop> */}
        </ul>
      </div>
  );
}
