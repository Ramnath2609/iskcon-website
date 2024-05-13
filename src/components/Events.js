import styled from "styled-components";
import Div1 from "../assets/Divider1.svg";
import Div2 from "../assets/divider2.svg";
import Left from "../assets/CaretLeft.svg";
import Right from "../assets/CaretRight.svg";
import Down from "../assets/CaretDown.svg";
import { EventCard } from "./EventCard";
import { eventsData } from "./eventsData";

const EventsWrapper = styled.div`
  margin: 60px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #00000026;
  border-radius: 8px;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 30px;
  width: 80%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-row-gap: 15px;
  }
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  justify-content: start;
  width: calc(100% - 80px);
  @media (max-width: 768px) {
    grid-gap: 20px;
  }
  @media (max-width: 400px) {
    grid-gap: 16px;
  }
`;

const Nav = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 20px 20px;
  cursor: pointer;
`;

const TodayButton = styled.button`
  background: none;
  border: 1px solid #EF8359;
  color: #EF8359;
  padding: 10px 24px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
  @media (max-width: 400px) {
    padding: 6px 14px;
    width: 80px;
  }
`;

const UpcomingButton = styled.button`
  background: none;
  border: none;
  color: #EF8359;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 90px;
  }
`;

const Title = styled.h2`
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 37.4px;
  color: #844531;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`;

const Arrow = styled.img`
  @media (max-width: 768px) {
    width: 20px;
  }
`;

export function Events() {
  return (
    <EventsWrapper>
      <TitleGrid>
        <ImageHolder>
          <StyledImage src={Div1} alt="divider-1" />
        </ImageHolder>
        <Title>Events</Title>
        <ImageHolder>
          <StyledImage src={Div2} alt="divider-2" />
        </ImageHolder>
      </TitleGrid>
      <ButtonsWrapper>
        <Nav>
          <Arrow src={Left} alt="left" />
          <Arrow src={Right} alt="right" />
        </Nav>
        <TodayButton>Today</TodayButton>
        <UpcomingButton>
          <img src={Down} alt="down" />
          Upcoming
        </UpcomingButton>
      </ButtonsWrapper>
      {eventsData.map((ev) => (
        <EventCard data={ev} />
      ))}
    </EventsWrapper>
  )
}