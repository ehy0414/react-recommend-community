import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ControlsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 200px;
  margin: auto 0;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  width: 480px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ControlsContainer = styled.div``;

const ControlsList = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const CareersButton = styled.button`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  margin-left: 10px;
  padding: 10px 10px;
  align-items: center;
  font-family: "Gamja Flower";
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1;
  justify-content: start;
  border: none;
  cursor: pointer;
  color: gray;
  border-radius: 50px;
  background-color: rgba(234, 234, 234, 1);
  
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
    color: black;
  }
`;

const NameDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

const Name = styled.p`
  font-family: "Gamja Flower";
  font-size: 20px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  margin-left: 10px;
  padding: 10px 10px;
  align-items: center;
  font-family: "Gamja Flower";
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1;
  justify-content: start;
  border: none;
  cursor: pointer;
  color: red;
  border-radius: 50px;
  background-color: rgba(234, 234, 234, 1);
  
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
    color: red;
  }
`;

export function HeaderControls() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // 로그인 여부 확인
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginTime");
    setIsLoggedIn(false);
    setUserName(""); // 로그아웃 시 이름 초기화
    alert("로그아웃 되었습니다.");
    navigate("/"); // 홈페이지로 이동
  };

  return (
    <ControlsWrapper>
      <ControlsContainer>
        {isLoggedIn ? (
          <NameDiv>
            <Name>{userName}님 환영해요</Name>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </NameDiv>
        ) : (
          <ControlsList>
            <CareersButton onClick={() => navigate("/user/login")}>로그인</CareersButton>
            <CareersButton onClick={() => navigate("/user/join")}>회원가입</CareersButton>
          </ControlsList>
        )}
      </ControlsContainer>
    </ControlsWrapper>
  );
}
