import React, { useState } from "react";
import styled from "styled-components";
import springImg from "../../../assets/spring.jpg";
import summerImg from "../../../assets/summer.jpg";
import autumnImg from "../../../assets/autumn.jpg";
import winterImg from "../../../assets/winter.jpg";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(3%);
  width: 94%;
  height: 230px;
  overflow: hidden;
  border-radius: 25px;
  cursor: pointer;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.p`
  font-size: 42px;
  font-family: "Gamja Flower";
  margin: 0;
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.p`
  font-size: 28px;
  font-family: "Gamja Flower";
  margin: 0;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: white;
  border: none;
  font-size: 45px;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;


const images = [
  {
    src: springImg,
    title: "봄의 산뜻한 하루",
    subTitle: "A fresh day of spring",
    path: "/spring/nature",
  },
  {
    src: summerImg,
    title: "여름의 시원한 행복",
    subTitle: "Cool happiness in summer",
    path: "/summer/nature",
  },
  {
    src: autumnImg,
    title: "가을의 따뜻한 감성",
    subTitle: "Warm emotions in autumn",
    path: "/autumn/nature",
  },
  {
    src: winterImg,
    title: "겨울의 포근한 순간",
    subTitle: "Cozy moments in winter",
    path: "/winter/nature",
  },
];

function ImageContainer() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 이미지 클릭 시 페이지 이동
  const handleClick = () => {
    navigate(images[index].path);
  };

  return (
    <StyledSlider onClick={handleClick}>
      <PrevButton onClick={(e) => { e.stopPropagation(); prevSlide(); }}>❮</PrevButton>
      {images.map((image, i) => (
        <Slide key={i} active={i === index}>
          <StyledImage src={image.src} alt={`Season ${i + 1}`} />
          <TextOverlay>
            <Title>{image.title}</Title>
            <SubTitle>{image.subTitle}</SubTitle>
          </TextOverlay>
        </Slide>
      ))}
      <NextButton onClick={(e) => { e.stopPropagation(); nextSlide(); }}>❯</NextButton>
    </StyledSlider>
  );
}


export default ImageContainer;
