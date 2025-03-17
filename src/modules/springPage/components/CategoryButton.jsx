"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 557px;
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
  const [selectedCategory, setSelectedCategory] = useState("베이커리");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContainer>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "베이커리"}
          onClick={() => handleClick("베이커리")}
        >
          <CategoryButtonText selected={selectedCategory === "베이커리"}>
            베이커리
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "디저트"}
          onClick={() => handleClick("디저트")}
        >
          <CategoryButtonText selected={selectedCategory === "디저트"}>
            디저트
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
      <CategorySpacing>
        <CategoryButtons
          selected={selectedCategory === "외식/다이"}
          onClick={() => handleClick("외식/다이")}
        >
          <CategoryButtonText selected={selectedCategory === "외식/다이"}>
            외식/다이
          </CategoryButtonText>
        </CategoryButtons>
      </CategorySpacing>
    </CategoryContainer>
  );
};

export default CategoryButton;
