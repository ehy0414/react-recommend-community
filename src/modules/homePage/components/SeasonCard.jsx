import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SeasonCard = ({ image, altText, title, delay, category }) => {
  const navigate = useNavigate();
  return (
    <CardWrapper delay={delay} onClick={() => {navigate(`season/${category}`)}}>
      <CardContainer>
        <img src={image} alt={altText} className="w-full h-full object-cover" />
        <SeasonTitle>{title}</SeasonTitle>
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
  animation-delay: ${(props) => props.delay || "0s"}; /* 애니메이션 지연 시간 설정 */

  @keyframes slideIn {
    0% {
      transform: translateX(100%); /* 시작 위치: 오른쪽 밖 */
      opacity: 0;
    }
    100% {
      transform: translateX(0); /* 끝 위치: 원래 위치 */
      opacity: 1;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 350px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1); /* 이미지 확대 */
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
  left: 30px;
  top: 0px;
`;

export default SeasonCard;
