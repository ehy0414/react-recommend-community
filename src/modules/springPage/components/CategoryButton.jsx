"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 525px;
  padding-right: 557px;
  @media (max-width: 991px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const CategoryButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50px;
  border: 1px solid lightgray;
  background-color: ${(props) => (props.selected ? "#000" : "transparent")};
  cursor: pointer;
`;

const CategoryButtonText = styled.span`
  color: ${(props) => (props.selected ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  width: 80px;
  height: 40px;
  padding: 0 20px;
`;

const CategorySpacing = styled.div`
  padding-left: 35px;
`;

const CategoryButton = () => {
  // 클릭된 버튼을 추적하는 상태
  const [selectedCategory, setSelectedCategory] = useState("자연");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContainer>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "자연"}
          onClick={() => handleClick("자연")}
        >
          <CategoryButtonText selected={selectedCategory === "자연"}>
            자연
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "휴식"}
          onClick={() => handleClick("휴식")}
        >
          <CategoryButtonText selected={selectedCategory === "휴식"}>
            휴식
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "역사"}
          onClick={() => handleClick("역사")}
        >
          <CategoryButtonText selected={selectedCategory === "역사"}>
            역사
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
    </CategoryContainer>
  );
};

export default CategoryButton;
