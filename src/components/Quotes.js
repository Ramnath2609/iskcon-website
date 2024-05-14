import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Leaf from "../assets/leaves.svg";

const Wrapper = styled.div`
  height: 500px;
  background-color: #EE7E52;
  color: #fff;
  display: grid;
  grid-template-rows: 100px auto;
  padding: 30px;
  @media (max-width: 400px) {
    height: 360px;
    grid-template-rows: 30px auto;
  }
`;

const QuoteText = styled.h2`
  font-style: italic;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Quote = styled.h2`
  font-size: 64px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  font-style: italic;
  @media (max-width: 400px) {
    font-size: 48px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
`;

const ImageHolder = styled.div`
  position: absolute;
  right: -30px;
  top: 40px;
`;

const LeafImage = styled.img`
 @media (max-width: 768px) {
    display: none !important;
  }
  @media (max-width: 400px) {
    display: none !important;
  }
`;

export function Quotes({ data }) {
  return (
    <Carousel showArrows={false} showStatus={false}>
      {data.map((d) => (
        <Wrapper>
          <Quote>"</Quote>
          <Flex>
            <QuoteText>
              {d.attributes.text}
            </QuoteText>
            <ImageHolder>
              <LeafImage src={Leaf} alt="leaf" />
            </ImageHolder>
          </Flex>
        </Wrapper>
      ))}
    </Carousel>
  );
}