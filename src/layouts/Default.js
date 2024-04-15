import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styled from "styled-components";

const Layout = styled.div`
  background-color: #F7EBE780;
`;

const Container = styled.div`
  margin-top: 80px;
`;

export function DefaultLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </Layout>
  )
}