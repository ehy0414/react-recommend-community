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
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const StyledButton = styled.button`
  color: #f5f5f5;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  padding: 12px;
  gap: 8px;
  flex: 1;
  border-radius: 8px;
  border: none;
  background-color: #4318d1;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3614b0;
  }
`;

export default Button;
