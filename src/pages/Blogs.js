import { DefaultLayout } from "../layouts/Default";
import styled from "styled-components";
import Div1 from "../assets/Divider1.svg";
import Div2 from "../assets/divider2.svg";
import { BlogsContainer } from "../containers/BlogsContainer";

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

const StyledImage = styled.img`
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 50%;
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

export function Blogs() {
  return (
    <DefaultLayout>
      <Container>
        <TitleGrid>
          <ImageHolder>
            <StyledImage src={Div1} alt="divider-1" />
          </ImageHolder>
          <Title>Blogs</Title>
          <ImageHolder>
            <StyledImage src={Div2} alt="divider-2" />
          </ImageHolder>
        </TitleGrid>
        <BlogsContainer />
      </Container>
    </DefaultLayout>
  )
}