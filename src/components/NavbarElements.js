import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%; /* Ensures the logo matches the navbar height */
  cursor: pointer;
  margin-right: auto; /* Pushes the logo to the left */

  img {
    height: ${(props) => (props.scrolled ? "30px" : "40px")}; /* Shrink on scroll */
    transition: height 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto; /* Centers the logo on smaller screens */
  }
`;

export const Nav = styled.nav`
  background: #215cc1;
  height: ${(props) => (props.scrolled ? "45px" : "60px")}; /* Shrink on scroll */
  display: flex;
  justify-content: space-between; /* Logo on the left, menu on the right */
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    justify-content: center; /* Centers the logo on mobile */
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const HamburgerMenu = styled(FaBars)`
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center; /* Center the links */
  align-items: center;
  flex-grow: 1; /* Allow the NavMenu to take available space */
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #215CC1;
    overflow: hidden;
    height: ${(props) => (props.isOpen ? "auto" : "0")}; /* Transition height */
    opacity: ${(props) => (props.isOpen ? "1" : "0")}; /* Fade effect */
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")}; /* Hide when closed */
    transition: height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }
`;

export const NavItem = styled.div`
  margin: 0 15px;

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #98989A; /* Light gray hover effect */
  }

  &.active {
    color: #ffd700; /* Highlight for the active link */
  }
`;
