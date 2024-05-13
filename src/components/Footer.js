import styled from "styled-components";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/location.svg"
import InstaIcon from "../assets/instagram.svg";
import FBIcon from "../assets/facebook.svg";
import YoutubeIcon from "../assets/youtube.svg";
import Twittericon from "../assets/twitter.svg";

const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 80px;
  background-color: #844531;
  padding: 0px 80px 24px 80px;
  color: #F7EBE7;
  @media (max-width: 768px) {
    padding: 0 40px 24px 40px;
  }
`;

const FooterNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 40px;
  padding-top: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;
const CopyrightsBlock = styled.div`
  border-top: 1px solid #F7EBE7;
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 30px 0;
`;

const Navlink = styled(Link)`
  padding: 10px 0;
  font-size: 16px;
  text-decoration: none;
  display: block;
  color:  #F7EBE7;
`;

const SubHeading = styled.h2`
  font-size: 18px;
`;

const Stack = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20px);
  grid-gap: 14px;
  align-items: center;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <FooterNav>
        <div>
          <SubHeading>Resources</SubHeading>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/audio">Audio</Navlink>
          <Navlink to="/images">Images</Navlink>
          <Navlink to="/videos">Videos</Navlink>
        </div>
        <div>
          <SubHeading>Quick Links</SubHeading>
          <Navlink to="/blogs">Admin portal</Navlink>
          <Navlink to="/events">Upcoming Events</Navlink>
          <Navlink to="/projects">Projects</Navlink>
        </div>
        <div>
          <SubHeading>Contact Us</SubHeading>
          <Stack>
            <img src={LocationIcon} alt="location" />
            <p>India</p>
          </Stack>
          <p>ISKCON Temple</p>
          <p>Udhampur</p>
          <p>Jammu and Kashmir 182101</p>
        </div>
        <div>
          <SubHeading>Join Us</SubHeading>
          <SocialMedia>
            <img src={YoutubeIcon} alt="youtube" />
            <img src={FBIcon} alt="facebook" />
            <img src={InstaIcon} alt="instagram" />
            <img src={Twittericon} alt="twitter" />
          </SocialMedia>
        </div>
      </FooterNav>
      <CopyrightsBlock>
        <CopyrightText>NYC Media @ 2024. All rights reserved.</CopyrightText>
      </CopyrightsBlock>
    </FooterWrapper>
  );
}