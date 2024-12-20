import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  MobileIcon,
  HamburgerMenu,
  NavItem,
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
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
