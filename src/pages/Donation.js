import { DefaultLayout } from "../layouts/Default";
import BannerImage from "../assets/donation.jpeg"
import styled from "styled-components";

const MainBanner = styled.div`
  height: 500px;
  background: linear-gradient(90.14deg, #E98862 18.25%, rgba(233, 136, 98, 0.39) 69.32%, rgba(233, 136, 98, 0) 89.51%), url(${BannerImage});
  background-size: cover;
  @media (max-width: 768px) {
    background:  #E98862;
    height: auto;
  }
`;

const TextHolder = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
`;

const Quote = styled.h2`
  font-family: Roboto;
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
  line-height: 52px;
  color: #F7EBE7;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  margin: 60px 30px;
  background-color: #fff;
  padding: 0 0 30px 0;
  grid-gap: 30px;
`;

export function Donation() {
  return (
    <DefaultLayout>
      <Container>
        <MainBanner>
          <TextHolder>
            <Quote>Many a times miseries also become the means to attaining God. This is why whatever state God keeps us in we should be contented</Quote>
          </TextHolder>
        </MainBanner>
      </Container>
    </DefaultLayout>
  )
}