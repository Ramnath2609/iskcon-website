import styled from "styled-components";

const Title = styled.div`
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 47.6px;
  text-align: left;
  color: #844531;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const Description = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #9C6958;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 26px;
  }
`;

const ReadMoreButton = styled.button`
background: none;
  border: 1px solid #EF8359;
  color: #EF8359;
  padding: 10px 24px;
  border-radius: 8px;
  width: 150px;
  cursor: pointer;
  @media (max-width: 400px) {
    padding: 6px 14px;
    width: 150px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 30px;
  width: 50%;
  grid-gap: 30px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function BlogTile() {
  return (
    <Grid>
      <Title>This Year, Dream the Impossible. Commit to a Better Planet!</Title>
      <Description>We are all born to do something unique and wonderful on this planet. Make sure you don’t let this opportunity pass by. Take up something creative in the new year. Not a year should pass without doing something creative.</Description>
      <ReadMoreButton>Read More</ReadMoreButton>
    </Grid>
  );
}