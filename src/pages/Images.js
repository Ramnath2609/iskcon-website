import { DefaultLayout } from "../layouts/Default";
import styled from "styled-components";
import Div1 from "../assets/Divider1.svg";
import Div2 from "../assets/divider2.svg";
import { Category } from "../components/CategorySection";
import { Gallery } from "../components/Gallery";
import { useCallback, useState } from "react";
import { altarImages, home, udhampurdata, withPrabhupada } from "../components/data";
import { Dropdown } from "../components/Dropdown";

const Container = styled.div`
  display: grid;
  margin: 60px 30px;
  background-color: #fff;
  padding: 0 0 30px 0;
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-gap: 0;
  }
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  width: 100%;
  align-items: center;
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-gap: 12px;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  padding: 0 20px;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-gap: 0;
  }
`;

const images = {
  Altar: altarImages,
  "With Prabhupada": withPrabhupada,
  "Udhampur Deities": udhampurdata,
  Home: home
}

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

export function Images() {
  const [category, setCategory] = useState("Home");

  const onChange = useCallback((cat) => {
    setCategory(cat);
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <TitleGrid>
          <ImageHolder>
            <StyledImage src={Div1} alt="divider-1" />
          </ImageHolder>
          <Title>Images</Title>
          <ImageHolder>
            <StyledImage src={Div2} alt="divider-2" />
          </ImageHolder>
        </TitleGrid>
        <Content>
          <Category onClick={onChange} selectedItem={category} />
          <Dropdown onValueChange={onChange} options={[{ title: "Home", id: 1 }, { title: "Altar", id: 2 }, { title: "With Prabhupada", id: 3 }, { title: "Udhampur Deities", id: 4 }]} />
          <Gallery images={images[category]} />
        </Content>
      </Container>
    </DefaultLayout>
  )
}