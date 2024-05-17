import { NavLink as Link, useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import Logo from "../assets/TEST.png"
import { useCallback, useState } from "react";
import { MobileNav } from "./MobileNav";
import OpenIcon from "../assets/icons8-hamburger.svg"
import CloseIcon from "../assets/icons8-close.svg"

const Navbar = styled.div`
  height: 80px;
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #F7EBE7;
`;

const Navlink = styled(Link)`
  padding: 16px;
  text-decoration: none;
  color: #9C6958;
  text-underline-offset: 6px;
  text-decoration-color: #EF8359;
`;


const Dropdown = styled.div`
  display: none;
  flex-direction: column;
  padding: 16px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #00000026;
  border-radius: 8px;
`;
const DrodownWrapper = styled.div`
    position: relative;
    &:hover ${Dropdown} {
      display: flex;
    }
  `;
const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 10px 16px 8px 16px;
  text-decoration: none;
  color: #9C6958;
  font-size: 16px;
  cursor: pointer;
`;

const NavHolder = styled.div`
  display: none;
  align-items: center;
  margin-right: 30px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const ImageHolder = styled.div`
  padding: 16px;
  width: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Flex = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 60px;
  @media (max-width: 768px) {
  }
`;

const Close = styled.button`
    font-size: 30px;
    background: none;
    border: none;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
`;

const Open = styled.button`
    font-size: 20px;
    background: none;
    border: none;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
`;

const StyledImage = styled.img`
  width: 20px;
`;

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Navbar>
      <Flex>
        {!isOpen ? <Open onClick={onToggle} className="header">
          <StyledImage src={OpenIcon} alt="open" />
        </Open> : <Close onClick={onToggle}><StyledImage src={CloseIcon} alt="close" /></Close>}
        <ImageHolder onClick={onHomeClick}>
          <img src={Logo} alt="logo" width="100%" />
        </ImageHolder>
      </Flex>
      <NavHolder>
        <Navlink style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : ""
          }
        }} to="/">Home</Navlink>
        <DrodownWrapper>
          <Button>
            Resources
          </Button>
          <Dropdown>
            <Navlink style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : ""
              }
            }} to="/images">Images</Navlink>
            {/* <Navlink to="/audio">Audio</Navlink> */}
            {/* <Navlink to="/videos">Video</Navlink> */}
          </Dropdown>
        </DrodownWrapper>
        {/* <Navlink to="/live">Live</Navlink> */}
        <Navlink style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : ""
          }
        }} to="/latest-news">Latest News</Navlink>
        <Navlink style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : ""
          }
        }} to="/blogs">Blogs</Navlink>
        <Navlink style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : ""
          }
        }} to="/donation">Donation</Navlink>
        {/* <Navlink to="/cart">Cart</Navlink> */}
        <Navlink style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : ""
          }
        }} to="/contact">Contact</Navlink>
      </NavHolder>
      {isOpen && <MobileNav isOpen={isOpen} toggle={onToggle} />}
    </Navbar >
  )
}