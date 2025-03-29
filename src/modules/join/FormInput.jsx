"use client";
import React from "react";
import styled from "styled-components";

const FormInput = ({ label, value, type = "text", name, onChange, error }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        placeholder={label + "을 입력해주세요."}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
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

  &.error {
    border-color: red;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

export default FormInput;
