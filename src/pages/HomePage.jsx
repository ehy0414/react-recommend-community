"use client";
import styled from "styled-components";
import ImageContainer from "../modules/homePage/components/ImageContainer";
import SeasonalDisplay from "../modules/homePage/SeasonalDisplay";
import Footer from "../components/layout/footer/Footer";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function HomePage() {

  return (
    <Wrapper>
      <ImageContainer/>
      <SeasonalDisplay/>
      <Footer />
    </Wrapper>

  );
}

export default HomePage;
