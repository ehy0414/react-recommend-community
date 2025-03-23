import styled from "styled-components";

const CardComponent = ({ image, altText, title, delay, content1, content2, content3 }) => {
  return (
    <CardWrapper delay={delay}>
      <CardContainer>
        <img src={image} alt={altText} className="w-full h-full object-cover" />
        <SeasonTitle>{title}</SeasonTitle>
        <OverlayContainer>
          {content1 && <p>{content1}</p>}
          {content2 && <p>{content2}</p>}
          {content3 && <p>{content3}</p>}
        </OverlayContainer>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  min-width: 300px;
  opacity: 0;
  animation: slideIn 1s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};

  @keyframes slideIn {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  /* 배경 흐림 & 반투명 흰색 배경 */
  &:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(10px); /* 흐림 효과 */
    z-index: 1;
  }
`;

const SeasonTitle = styled.h2`
  color: #fff;
  font-size: 30px;
  font-family: "Gamja Flower";
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  line-height: 34px;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
  z-index: 2;

  /* hover 시 타이틀 숨김 */
  ${CardContainer}:hover & {
    opacity: 0;
  }
`;

/* 새로운 내용 (배경 위에 표시) */
const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;

  p {
    color: #fff; 
    font-family: "Gamja Flower";
    font-size: 28px;
    font-weight: 500;
    margin: 5px 0; /* 줄 간격 */
    word-break: break-word; /* 긴 단어 줄바꿈 */
    overflow-wrap: break-word; /* 줄바꿈 강제 */
  }

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export default CardComponent;
