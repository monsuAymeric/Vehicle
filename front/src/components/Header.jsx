import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../components/Logo";

export default function Header() {
  const hamburgerRef = useRef();
  const navRef = useRef();

  const showNavBar = () => {
    hamburgerRef.current.classList.toggle("active");
    navRef.current.classList.toggle("active");
  };

  const datas = [
    {
      id: "1L",
      link: "/",
      name: "Home",
    },
    {
      id: "2L",
      link: "/user",
      name: "User",
    },
  ];

  return (
    <header className="container">
      <nav className="nav container__width">
        <Logo />
        <div className="hamburger" onClick={showNavBar} ref={hamburgerRef}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        <div className="navbar" ref={navRef}>
          <ul className="navLink">
            {datas.map((datas) => {
              return (
                <li className="navbar__li" key={datas.id}>
                  <Link
                    className="navbara"
                    onClick={showNavBar}
                    to={datas.link}
                  >
                    {datas.name}
                  </Link>
                  <div className="navbar__line"></div>
                </li>
              );
            })}
            <li className="navbar__li">
              <Link onClick={showNavBar} className="btn" to="/signin">
                Sign In
              </Link>
              <div className="nav__line"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
