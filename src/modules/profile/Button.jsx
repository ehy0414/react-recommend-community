"use client";
import * as React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 15%;
`;

const StyledButton = styled.button`
  color: #f5f5f5;
  font-family: "Gamja Flower";
  font-size: 20px;
  font-weight: bold;
  line-height: 100%;
  padding: 12px;
  gap: 8px;
  flex: 1;
  border-radius: 8px;
  border: none;
  background-color: #ff7f50;;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color:rgb(255, 68, 0);;
  }
`;

export default Button;
