import styled from "styled-components";
import WhatsppIcon from "../assets/whatsapp.svg";

const Wrapper = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 100px auto;
  border: 1px solid black;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  grid-gap: 20px;
  box-sizing: border-box;
`;

const CursiveText = styled.p`
  font-style: italic;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #EE7E52;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const TextContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export function Whatsapp() {
  return (
    <Container>
      <Wrapper>
        <img src={WhatsppIcon} alt="whatsapp" />
        <TextContent>
          <Title>Join our Whatsapp Community</Title>
          <CursiveText>Send "ADD" to +91-90860-06726</CursiveText>
        </TextContent>
      </Wrapper>
    </Container>
  );
}