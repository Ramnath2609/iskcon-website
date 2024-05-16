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
  @media (max-width: 768px) {
    grid-template-rows: 200px auto;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    justify-items: center;
  }
`;

const TitleText = styled.h2`
  color: #844531;
  font-size: 34px;
  line-height: 47px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 8px 0;
  }
`;

const LightText = styled.p`
  color: #9C6958;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

const Mobile = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
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
            <TitleText>ISKCON Temple</TitleText>
            <LightText>Srila Prabhupada Ashram,</LightText>
            <LightText>Srila Prabhupada Marg,</LightText>
            <LightText>Srila Prabhupada Nagar,</LightText>
            <LightText>Udhampur,</LightText>
            <LightText>Jammu and Kashmir - 182101.</LightText>
          </div>
          <div>
            <Mobile>
              <img src={Phone} alt="mobile" />
              <div>
                <TitleText>Phone</TitleText>
                <LightText>+91 90860 06726</LightText>
              </div>
            </Mobile>
            <Mobile>
              <img src={Mail} alt="mail" />
              <div>
                <TitleText>Mail</TitleText>
                <LightText>nyswami@pamho.net</LightText>
              </div>
            </Mobile>
          </div>
        </ContactContainer>
      </Wrapper>
    </DefaultLayout>
  );
}