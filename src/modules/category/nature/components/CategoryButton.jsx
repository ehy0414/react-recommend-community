"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
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

const SelectedCategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50px;
  border: 1px solid #eaeaea;
  background-color: #000;
  cursor: pointer;
`;

const SelectedCategoryText = styled.span`
  color: #fff;
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

const CategoryButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50px;
  border: 1px solid lightgray;
  background-color: transparent;
  cursor: pointer;
`;

const CategoryButtonText = styled.span`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  width: 80px;
  height: 40px;
  padding: 0 20px;

  p {
    margin: 0;
  }
`;

const CategoryButton = (props) => {
  const navigate = useNavigate();

    return (
        <CategoryContainer>
                <SelectedCategoryButton>
                  <SelectedCategoryText>자연</SelectedCategoryText>
                </SelectedCategoryButton>
                <CategorySpacing>
                  <CategoryButtons onClick={() => {navigate(`/${props.season}/break`)}}>
                    <CategoryButtonText>
                      <p>휴식</p>
                    </CategoryButtonText>
                  </CategoryButtons>
                </CategorySpacing>
                <CategorySpacing>
                  <CategoryButtons onClick={() => {navigate(`/${props.season}/history`)}}>
                    <CategoryButtonText>
                      <p>역사</p>
                    </CategoryButtonText>
                  </CategoryButtons>
                </CategorySpacing>
        </CategoryContainer>
    );
}

export default CategoryButton;