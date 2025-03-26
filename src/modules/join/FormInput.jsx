"use client";
import * as React from "react";
import styled from "styled-components";

const FormInput = ({ label, value, type = "text" }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput placeholder={value} type={type} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const InputLabel = styled.label`
  width: 100%;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
`;

const StyledInput = styled.input`
  flex: 1;
  color: #b3b3b3;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  min-width: 240px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  outline: none;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export default FormInput;
