"use client";
import React from "react";
import styled from "styled-components";
import CategoryButton from "./components/CategoryButton";

const BreakSelector = () => {
  return (
    <BrandContainer>
      <BrandTitle>SPRING</BrandTitle>
      <CategoryButton />
    </BrandContainer>
  );
};

const BrandContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  gap: 30px;
  width: 100%;
`;

const BrandTitle = styled.header`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-family: "Gamja Flower";
  font-weight: 800;
  line-height: 60px;
  width: 100%;
  padding-left: 802px;
  padding-right: 802px;
  @media (max-width: 991px) {
    padding-left: 200px;
    padding-right: 200px;
  }
  @media (max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default BreakSelector;
