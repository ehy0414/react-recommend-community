import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const themes = {
    봄: { background: "#FFF0F5", color: "#FF69B4", font: "'Gamja Flower', sans-serif" },  // 연한 핑크 배경, 진한 핑크 텍스트
    여름: { background: "#B0F0EF", color: "#00BFFF", font: "'Gamja Flower', sans-serif" }, // 연한 하늘색 배경, 하늘색 텍스트
    가을: { background: "#F4A460", color: "#8B4513", font: "'Gamja Flower', cursive" },   // 연한 갈색 배경, 진한 갈색 텍스트
    겨울: { background: "#B0CADF", color: "#4682C4", font: "'Gamja Flower', cursive" },   // 연한 남색 배경, 진한 남색 텍스트
  };

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.font};
  transition: background-color 0.5s ease, color 0.5s ease, font-family 0.5s ease;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.font};
  color: white;
  font-weight: bold;
  font-size: 17px;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const SeasonText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const HomePage = () => {
  const [season, setSeason] = useState("봄");

  return (
    <ThemeProvider theme={themes[season]}>
      <Wrapper>
        <ButtonGroup>
          {Object.keys(themes).map((s) => (
            <Button key={s} onClick={() => setSeason(s)}>
              {s}
            </Button>
          ))}
        </ButtonGroup>
      </Wrapper>
    </ThemeProvider>
  );
};

export default HomePage;
