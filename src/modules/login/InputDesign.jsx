import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";
import { validateField } from "../../utils/validation"; 
import { useNavigate } from "react-router-dom";

const InputDesign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();


  // ✅ 3. 로그인 버튼 클릭 시
  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateField("email", email),
      password: validateField("password", password),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    try {
      const response = await api.get("/users");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // ✅ 로그인 정보 저장 + 로그인 시간 저장
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("loginTime", new Date().getTime().toString());

        alert("로그인 성공!");
        navigate("/");
        window.location.reload();
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
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <FormInput
        label="비밀번호"
        value={password}
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
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
