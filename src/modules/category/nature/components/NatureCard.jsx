import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AnimatedCardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  margin-top: 30px;
  width: 300px;
  height: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  transform: ${(props) => (props.$inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &:hover {
    transform: translateY(-10px);  // 마우스 오버 시 카드 상승 효과
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // 그림자 강조
  }
  
  &:active {
    transform: translateY(0);  // 클릭 시 카드가 다시 원래 위치로 돌아옴
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-top: -1px;
  margin-left: 10px;
`;

const Title = styled.p`
  margin-top: -1px;
  font-family: "Gamja Flower";
  font-weight: bold;
  font-size: 20px;
  width: 30ch;             /* 12글자 너비 */
  overflow: hidden;        /* 넘치는 텍스트 숨김 */
  white-space: nowrap;     /* 한 줄로 표시 */
  text-overflow: ellipsis; /* 넘치는 경우 ... 처리 */
`;


const NatureCard = ({ title, content, image, natureId}) => {
  // threshold를 0.5로 올리고, rootMargin을 설정해 보세요.
  const { ref, inView } = useInView({
    threshold: 0.5,            // 요소의 50% 이상이 보여야 inView가 true
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',  // 하단에서 50px 만큼 여유를 둠 (원하는 경우)
  });

  const navigate = useNavigate();

  return (
    <AnimatedCardContainer  ref={ref} $inView={inView}
                            onClick={() => {navigate(`/spring/${natureId}`)}}    >
      <Image src={`${image}`} alt="img" />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </AnimatedCardContainer>
  );
};

export default NatureCard;
