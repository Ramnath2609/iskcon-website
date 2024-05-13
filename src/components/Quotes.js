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

export function Quotes() {
  return (
    <Carousel showArrows={false} showStatus={false}>
      <Wrapper>
        <Quote>"</Quote>
        <Flex>
          <QuoteText>
            If someone finds faults
            with us, instead of
            feeling bad, we should
            be happy that
            Our
            shortcomings
            are being
            removed.
          </QuoteText>
          <ImageHolder>
            <LeafImage src={Leaf} alt="leaf" />
          </ImageHolder>
        </Flex>
      </Wrapper>
      <Wrapper>
        <Quote>"</Quote>
        <Flex>
          <QuoteText>
            The name of God is great, but when this name is uttered through the lips of devotees, it becomes very potent.
          </QuoteText>
          <ImageHolder>
            <LeafImage src={Leaf} alt="leaf" />
          </ImageHolder>
        </Flex>
      </Wrapper>
      <Wrapper>
        <Quote>"</Quote>
        <Flex>
          <QuoteText>
            A person who is deeply entrenched in sense gratification should not sit on the preacher's seat.
          </QuoteText>
          <ImageHolder>
            <LeafImage src={Leaf} alt="leaf" />
          </ImageHolder>
        </Flex>
      </Wrapper>
      <Wrapper>
        <Quote>"</Quote>
        <Flex>
          <QuoteText>
            Following the spiritual master's instructions is of utmost importance. One who lives under the guidance of the spiritual master will most definitely go back to Godhead.
          </QuoteText>
          <ImageHolder>
            <LeafImage src={Leaf} alt="leaf" />
          </ImageHolder>
        </Flex>
      </Wrapper>
    </Carousel>
  );
}