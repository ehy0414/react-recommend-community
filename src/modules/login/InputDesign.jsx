import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";
import { validateField } from "../../utils/validation"; 
import { useNavigate } from "react-router-dom";

const SESSION_TIMEOUT = 1 * 60 * 1000; // 30분 (단위: 밀리초)

const InputDesign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // ✅ 1. 자동 로그아웃 체크 (30분 후)
  useEffect(() => {
    const checkSession = () => {
      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {
        const currentTime = new Date().getTime();
        if (currentTime - parseInt(loginTime) > SESSION_TIMEOUT) {
          handleLogout(); // 자동 로그아웃 실행
        }
      }
    };

    const interval = setInterval(checkSession, 1000); // 1초마다 체크
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  // ✅ 2. 로그아웃 함수 (자동/수동 로그아웃 시 호출)
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginTime");
    alert("세션이 만료되어 자동 로그아웃 되었습니다.");
    navigate("/login"); // 로그인 페이지로 이동
    window.location.reload();
  };

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
