import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";
import { validateField } from "../../utils/validation"; // 유효성 검사 함수 가져오기
import { useNavigate } from "react-router-dom";

const InputDesign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  // 입력값 변경 시 유효성 검사 실행
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    // 실시간 유효성 검사
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // 회원가입 버튼 클릭 시 API 호출 + 이메일 중복 검사
  const handleRegister = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      password: validateField("password", password),
    };

    setErrors(newErrors);

    // 하나라도 에러가 있으면 요청 중단
    if (Object.values(newErrors).some((error) => error)) return;

    try {
      // 이메일 중복 검사
      const existingUser = await api.get(`/users?email=${email}`);

      if (existingUser.data.length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "이미 사용 중인 이메일입니다.",
        }));
        return;
      }

      // 새로운 사용자 정보 저장
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
      };

      await api.post("/users", newUser);
      alert("회원가입 성공!");
      navigate("/user/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleRegister}>
      <FormInput
        label="이름"
        value={name}
        type="text"
        name="name"
        onChange={handleChange}
        error={errors.name} // 에러 메시지 전달
      />
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
      <Button>회원가입</Button>
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
