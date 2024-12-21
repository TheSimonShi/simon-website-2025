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

  const closeMenu = () => {
    setIsOpen(false); // Close menu when a link is clicked
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
            <NavLink to="/" activeStyle onClick={closeMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/socials" activeStyle onClick={closeMenu}>
              Socials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/coaching" activeStyle onClick={closeMenu}>
              Coaching
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeStyle onClick={closeMenu}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/runCalculator" activeStyle onClick={closeMenu}>
              Run Calculator
            </NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
