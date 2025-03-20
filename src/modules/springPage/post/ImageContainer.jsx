"use client";
import styled from "styled-components";

const ImageContainer = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <MainImage
          src={`${props.image}`}
          alt="Paris Baguette"
        />
      </ImageWrapper>
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
  margin-left: 7%;
  margin-top: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: center;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ImageContainer;
