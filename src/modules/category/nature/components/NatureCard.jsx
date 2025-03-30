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
    transform: translateY(-10px);  
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }
  
  &:active {
    transform: translateY(0);  
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
  width: 30ch;             
  overflow: hidden;        
  white-space: nowrap;     
  text-overflow: ellipsis; 
`;

const NatureCard = ({ title, content, image, natureId, season }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,            
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',  
  });

  const navigate = useNavigate();

  return (
    <AnimatedCardContainer  
      ref={ref} 
      $inView={inView}
      onClick={() => navigate(`/${season}/${natureId}`)}  // ✅ 동적으로 URL 설정
    >
      <Image src={image} alt="img" />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </AnimatedCardContainer>
  );
};

export default NatureCard;
