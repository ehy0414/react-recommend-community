"use client";

import styled from "styled-components";
import HeaderTitle from "../modules/aboutUsPage/components/HeaderTitle";
import CardDisplay from "../modules/aboutUsPage/components/CardDisplay";
import Footer from "../components/layout/footer/Footer";

const HeaderContainer = styled.div`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  text-align: center;
`;

const AboutUsPage = () => {
  return (
    <HeaderContainer>
      <HeaderTitle />
      <CardDisplay />
      <Footer />
    </HeaderContainer>
  );
};

export default AboutUsPage;
