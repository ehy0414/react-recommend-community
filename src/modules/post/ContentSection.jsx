"use client";
import styled from "styled-components";

const ContentSection = ( props ) => {
  return (
    <Container>
      <ContentBackground>
        <ContentWrapper>
            <Heading>{props.data.title}</Heading>
          <ContentContainer>
            <Description>
              {props.data.content}
            </Description>
          </ContentContainer>
        </ContentWrapper>
      </ContentBackground>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  width: 600px;
  margin-right: 5%;
  margin-left: -5%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentBackground = styled.div`
  border-radius: 25px;
  display: flex;
  width: 100%;
  padding-bottom: 256px;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: center;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const ContentWrapper = styled.div`
  align-self: center;
  width: 690px;
  max-width: 100%;
  padding-top: 1px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 690px;
  padding-right: 20px;
  overflow: hidden;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  width: 80%;
  font-family: "Gamja Flower";
  font-size: 32px;
  color: #000;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
  
  line-height: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    white-space: initial;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  width: 80%;
  font-family: "Gamja Flower";
  font-size: 25px;
  color: #000;
  text-align: center;
  line-height: 30px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ContentSection;
