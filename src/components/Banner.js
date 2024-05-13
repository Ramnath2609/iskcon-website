import BannerImage from "../assets/banner.jpeg"
import styled from "styled-components";

const MainBanner = styled.div`
  height: calc(100vh - 80px);
  background: linear-gradient(90.14deg, #E98862 18.25%, rgba(233, 136, 98, 0.39) 69.32%, rgba(233, 136, 98, 0) 89.51%), url(${BannerImage});
  background-size: cover;
  @media (max-width: 768px) {
    background:  #E98862;
    height: auto;
  }
`;

const TitleText = styled.h2`
  font-size: 34px;
  font-style: "Roboto";
  color: #fff;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 28px;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  padding: 10px 24px;
  height: 40px;
  background-color: #F7EBE7;
  color: #EE7E52;
  border-radius: 8px;
  outline: none;
  border: none;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const TextHolder = styled.div`
  display: flex;
  width: 30%;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function Banner() {
  return (
    <MainBanner>
      <TextHolder>
        <TitleText>The Essence of spirituality</TitleText>
        <Description>For over 50 years, H.H Nava Yogendra Swami, a Naishtik Brahamachari and an exalted mahabhagwat vaishnava in the bhakti tradition, has dedicated his life in the mission of Sri Chaitanya Mahaprabhu’s saving fallen souls, teaching by his own example he is guiding individuals towards ultimate goal of this human form of life, which is to attain “Krishna Prema” and “ante Narayan Smriti”(remembrance of Krishna at the time of death).</Description>
        {/* <Button>View Journey</Button> */}
      </TextHolder>
    </MainBanner>
  );
}