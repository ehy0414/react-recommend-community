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
  display: flex;  /* ✅ 가로 정렬 */
  align-items: center; /* ✅ 수직 중앙 정렬 */
  justify-content: space-between; /* ✅ 타이틀과 버튼을 양쪽 끝으로 배치 */
  width: 100%;
  margin-top: -10px;
`;

const Title = styled.p`
  font-family: "Gamja Flower";
  font-weight: bold;
  font-size: 20px;
  width: 75%;
  white-space: nowrap;     
  overflow: hidden;        
  text-overflow: ellipsis; 
`;

const EditButton = styled.button`
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  color: gray;
  border-radius: 50px;
  background-color: rgba(234, 234, 234, 1);
  font-size: 14px;
  font-family: "Gamja Flower";
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    color: black;
  }
`;

const CategoryCard = ({ title, content, image, categoryId, season, postUserId, currentUserId }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
  });

  const navigate = useNavigate();

  return (
    <AnimatedCardContainer  ref={ref} 
                            $inView={inView}
                            onClick={() => navigate(`/${season}/${categoryId}`)} >
      <Image src={image} alt="img" />
      <TitleContainer>
        <Title>[{season}] {title}</Title>
        {postUserId === currentUserId && (
          <EditButton onClick={(e) => { 
            e.stopPropagation();  // ✅ 부모 onClick 방지
            navigate(`/edit/${categoryId}`);
          }}>
            수정하기
          </EditButton>
        )}
      </TitleContainer>
    </AnimatedCardContainer>
  );
};

export default CategoryCard;
