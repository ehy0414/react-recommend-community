import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";
import { validateField } from "../../utils/validation"; // 유효성 검사 함수 가져오기
import { useNavigate } from "react-router-dom";

const InputDesign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // 입력값 변경 시 유효성 검사 실행
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    // 실시간 유효성 검사
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // 로그인 버튼 클릭 시 API 호출 + 이메일 및 비밀번호 검증
  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateField("email", email),
      password: validateField("password", password),
    };

    setErrors(newErrors);

    // 하나라도 에러가 있으면 요청 중단
    if (Object.values(newErrors).some((error) => error)) return;

    try {
      // db.json에서 사용자 데이터 가져오기
      const response = await api.get("/users");
      const users = response.data;

      // 입력한 이메일과 비밀번호로 사용자 인증
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // 로그인한 사용자의 정보를 localStorage에 저장
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);

        // 로그인 성공 후 홈페이지로 이동
        alert("로그인 성공!");
        navigate("/"); 
        window.location.reload(); // 새로고침
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <FormContainer>
      <FormInput
        label="이메일"
        value={email}
        type="email"
        name="email"
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        label="비밀번호"
        value={password}
        type="password"
        name="password"
        onChange={handleChange}
        error={errors.password}
      />
      <Button onClick={handleLogin}>로그인</Button>
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
