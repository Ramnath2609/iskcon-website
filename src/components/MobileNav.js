import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: #F7EBE7;
  overflow-x: hidden;
  transition: 0.2s;
  width: ${({ isOpen }) => (isOpen ? "320px" : "0px")};
`;

const NavHolder = styled.div`
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
`;

const Navlink = styled(Link)`
  padding: 16px;
  text-decoration: none;
  color: #9C6958;
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

export function MobileNav({ isOpen, toggle }) {

  return (
    <Navbar isOpen={isOpen}>
      <NavHolder>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/images">Images</Navlink>
        {/* <DrodownWrapper>
          <Button>
            Resources
          </Button>
          <Dropdown> */}
        {/* <Navlink to="/audio">Audio</Navlink> */}
        {/* <Navlink to="/videos">Video</Navlink> */}
        {/* </Dropdown>
        </DrodownWrapper> */}
        {/* <Navlink to="/live">Live</Navlink> */}
        <Navlink to="/latest-news">Latest News</Navlink>
        <Navlink to="/blogs">Blogs</Navlink>
        <Navlink to="/donation">Donation</Navlink>
        {/* <Navlink to="/cart">Cart</Navlink> */}
        <Navlink to="/contact">Contact</Navlink>
      </NavHolder>
    </Navbar>
  );
}