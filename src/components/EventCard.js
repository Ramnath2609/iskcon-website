import styled from "styled-components";
import DummyImage from "../assets/event.png"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Meta = styled.p`
  font-size: 16px;
  color: #844531;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #844531;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubMeta = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  color: #844531;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ImageHolder = styled.div`
  width: 500px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DesciptionBlock = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export function EventCard() {
  return (
    <Card>
      <DesciptionBlock>
        <Meta>March 4 - March 7</Meta>
        <Title>Discourse, Music and Meditation</Title>
        <SubMeta>Yogic art International center</SubMeta>
        <SubMeta>4140 Parker Rd. Allentown, New Mexico 31134</SubMeta>
      </DesciptionBlock>
      <ImageHolder>
        <Image src={DummyImage} alt="event" />
      </ImageHolder>
    </Card>
  );
}