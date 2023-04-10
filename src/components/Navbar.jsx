import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FadeInFromTop from "./AnimationComponents/FadeInFromTop";

export default function Navbar() {
  return (
    <nav className={`navbar`}>
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <FadeInFromTop delay="0.7">
            <li>
              <Link to="/">Home</Link>
            </li>
          </FadeInFromTop>
          <FadeInFromTop delay="0.9">
            <li>
              <Link to="about">About</Link>
            </li>
          </FadeInFromTop>
          <FadeInFromTop delay="1.1">
            <li>
              <Link to="team">Team</Link>
            </li>
          </FadeInFromTop>
          <FadeInFromTop delay="1.3">
            <li>
              <Link to="events">Events</Link>
            </li>
          </FadeInFromTop>
        </ul>
        <FadeInFromTop delay="0.5">
          <img className="logo" src={logo} />
        </FadeInFromTop>
      </div>
    </nav>
  );
}
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
