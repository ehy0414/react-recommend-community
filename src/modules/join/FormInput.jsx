"use client";
import * as React from "react";
import styled from "styled-components";

const FormInput = ({ label, value, type = "text", onChange, name }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        value={value} // 실제 입력값 반영
        onChange={onChange} // 입력값 변경 반영
        placeholder={`${label}을 입력해주세요...`}
      />
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
  font-family: "Gamja Flower";
  font-size: 20px;
  font-weight: bold;
  line-height: 140%;
`;

const StyledInput = styled.input`
  flex: 1;
  font-family: "Gamja Flower";
  font-size: 17px;
  font-weight: bold;
  line-height: 100%;
  min-width: 240px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #b3b3b3;
  }

  &:focus {
    border-color: black;
  }
`;

export default FormInput;
