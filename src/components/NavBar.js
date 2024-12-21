import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  MobileIcon,
  HamburgerMenu,
  NavItem,
  Logo,
} from "./NavbarElements";
import logo from "../sslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Logo to="/">
          <img src={logo} alt="Logo" />
        </Logo>

        <MobileIcon onClick={toggleMenu}>
          <HamburgerMenu />
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/socials" activeStyle>
              Socials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/coaching" activeStyle>
              Coaching
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/runCalculator" activeStyle>
              Run Calculator
            </NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
