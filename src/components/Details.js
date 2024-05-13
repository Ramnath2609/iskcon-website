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
  text-align: center;
`;

export function Details() {
  return (
    <Grid>
      <StyledImage src={Image} alt="maharaja" />
      <Content>
        <Title>Meeting with His Spiritual Master – His Divine Grace A C Bhaktivedanta Swami, Srila Prabhupada</Title>
        <Text>Maharaj ji came to Delhi where one day in a marketplace he was quite impressed to see some foreign devotees distributing Krishna books. He followed them and reached the Hare Krishna temple at Palam, Delhi, and by the divine arrangement of lord Krishna maharaj ji had the first darshans of His Divine Grace A C Bhaktivedanta swami Srila Prabhupada.</Text>
        <Text>
          Then in the year 1974 month of February His Holiness got initiation from His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada, the founder Acharya of ISKCON and formally became his disciple. In this formal meeting, Srila Prabhupada asked Mahraj ji, “what is your name” Maharaj ji replied, “Yogendra Sharma” Srila Prabhupada said, “from today onwards you are Nava Yogendra Das”.</Text>
      </Content>
    </Grid>
  );
}