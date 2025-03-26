"use client";
import * as React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";


const InputDesign = () => {
  const handleRegister = () => {
    // Handle registration logic
  };

  return (
    <FormContainer>
      <FormInput label="Email" value="이메일을 입력해주세요..." type="email" />
      <FormInput label="Password" value="비밀번호를 입력해주세요..." type="password" />
      <Button onClick={handleRegister}>회원가입</Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin-left: 10%;
  display: flex;
  width: 100%;
  min-width: 320px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export default InputDesign;
