"use client";
import styled from "styled-components";
import api from "../../services/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContentSection = ( props ) => {
  const [userId, setUserId] = useState(null); // 세션에서 가져온 사용자 ID
  const navigate = useNavigate();
  // console.log(props.data.id);

  // 세션에서 userId를 가져오는 로직
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  // 게시글 삭제 핸들러
  const deletePost = async () => {
    if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
      try{
        await api.delete(`/${props.data.season}/${props.data.id}`);
        alert("삭제가 완료되었습니다!");
        navigate("/");
      }
      catch (err) {
        console.error(err);
      }
      
    }
  };
  return (
    <Container>
      <ContentBackground>
        <ContentWrapper>
            <Heading>{props.data.title}</Heading>
            {/* 게시글 삭제 버튼 */}
            {userId === props.data.userId && (
              <DeleteButton onClick={deletePost}>삭제하기</DeleteButton>
            )}
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
  margin-top: 50px;
  
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

const DeleteButton = styled.button`
  padding: 10px 20px;
  align-items: center;
  text-align: center;
  font-family: 'Gamja Flower';
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  color:gray;
  border-radius: 50px;
  border: 1px solid lightgray;
  background-color: rgb(255, 255, 255);
  margin-left: 60%;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
    color: red;
  }
`;

export default ContentSection;
