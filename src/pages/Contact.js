import styled from "styled-components";
import { DefaultLayout } from "../layouts/Default";
import Image from "../assets/contact.jpeg";
import Phone from "../assets/phone.svg";
import Mail from "../assets/mail.svg";

const Wrapper = styled.div`
  margin: 60px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #00000026;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 400px 400px;
  grid-row-gap: 30px;
  width: 80%;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const TitleText = styled.h2`
  color: #844531;
  font-size: 34px;
  line-height: 47px;
`;

const LightText = styled.p`
  color: #9C6958;
  font-size: 20px;
`;

const Mobile = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 20px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 100%;
  text-align: center;
`;

export function Contact() {
  return (
    <DefaultLayout>
      <Wrapper>
        <ImageWrapper>
          <img src={Image} alt="maharaj" height="100%" />
        </ImageWrapper>
        <ContactContainer>
          <div>
            <TitleText>Ashram name</TitleText>
            <LightText>2464  Royal Ln. Mesa, New Jersey 45463</LightText>
            <LightText>Elgin St. Celina</LightText>
            <LightText>Canada</LightText>
          </div>
          <div>
            <Mobile>
              <img src={Phone} alt="mobile" />
              <div>
                <TitleText>Phone</TitleText>
                <LightText>+91 4175 237200, 237400, 235624</LightText>
              </div>
            </Mobile>
            <Mobile>
              <img src={Mail} alt="mail" />
              <div>
                <TitleText>Mail</TitleText>
                <LightText>debra.holt@example.com</LightText>
              </div>
            </Mobile>
          </div>
        </ContactContainer>
      </Wrapper>
    </DefaultLayout>
  );
}