import { DefaultLayout } from "../layouts/Default";
import styled from "styled-components";
import Div1 from "../assets/Divider1.svg";
import Div2 from "../assets/divider2.svg";
import { Category } from "../components/CategorySection";
import { Gallery } from "../components/Gallery";

const Container = styled.div`
  display: grid;
  margin: 60px 30px;
  background-color: #fff;
  padding: 0 0 30px 0;
  grid-gap: 30px;
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  width: 100%;
  align-items: center;
  grid-gap: 30px;
`;

const Title = styled.h2`
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 37.4px;
  color: #844531;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  padding: 0 20px;
`;

export function Videos() {
  return (
    <DefaultLayout>
      <Container>
        <TitleGrid>
          <img src={Div1} alt="divider-1" />
          <Title>Videos</Title>
          <img src={Div2} alt="divider-2" />
        </TitleGrid>
        <Content>
          <Category />
          <Gallery />
        </Content>
      </Container>
    </DefaultLayout>
  )
}