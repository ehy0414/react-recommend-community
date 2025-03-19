import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
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

const SpringCard = ({ title, content, delay }) => {
  // threshold를 0.5로 올리고, rootMargin을 설정해 보세요.
  const { ref, inView } = useInView({
    threshold: 0.5,            // 요소의 50% 이상이 보여야 inView가 true
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',  // 하단에서 50px 만큼 여유를 둠 (원하는 경우)
  });

  return (
    <AnimatedCardContainer ref={ref} $inView={inView}>
      <h2>{title}</h2>
      <p>{content}</p>
    </AnimatedCardContainer>
  );
};

export default SpringCard;
