import styled from "styled-components";
import Image from "../assets/maharaj.svg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

const StyledImage = styled.img`
  transform: scaleX(-1);
  
  @media (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 60%;
    margin: auto;
  }
`;

const Content = styled.div`
  padding: 40px;
  width: 80%;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 36px;
  color: #9C6958;
  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const Title = styled.h2`
  color: #844531;
`;

export function Details() {
  return (
    <Grid>
      <StyledImage src={Image} alt="maharaja" />
      <Content>
        <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
        <Text>Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.</Text>
      </Content>
    </Grid>
  );
}