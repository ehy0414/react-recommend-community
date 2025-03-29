"use client";
import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";


const InputDesign = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 // 입력값 변경 시 상태 업데이트
 const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // 회원가입 버튼 클릭 시 API 호출
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date(), // id를 현재 시간 기반으로 설정
      name,
      email,
      password,
    };

    try {
      const response = await api.post("/users", newUser);
      alert("회원가입 성공!");
      console.log(response.data);
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleRegister}>
      <FormInput label="이름" value={name} type="text" name="name" onChange={handleChange} />
      <FormInput label="이메일" value={email} type="email" name="email" onChange={handleChange} />
      <FormInput label="비밀번호" value={password} type="password" name="password" onChange={handleChange} />
      <Button >회원가입</Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  width: 40%;
  min-width: 320px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export default InputDesign;
