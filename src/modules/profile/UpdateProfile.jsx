import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import api from "../../services/axios";
import { validateField } from "../../utils/validation"; // 유효성 검사 함수 가져오기
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [userId, setUserId] = useState(""); // 로그인된 사용자 정보
  
    const navigate = useNavigate();
  
    useEffect(() => {
        setUserId(localStorage.getItem("userId"));  
        setName(localStorage.getItem("userName"));  
    }, []);

  // 입력값 변경 시 유효성 검사 실행
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);

    // 실시간 유효성 검사
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // 수정 버튼 클릭 시 API 호출
  const handleUpdate = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", name),
    };

    setErrors(newErrors);

    // 하나라도 에러가 있으면 요청 중단
    if (Object.values(newErrors).some((error) => error)) return;

    try {
      await api.patch(`/users/${userId}`, {name});
      alert("프로필 수정 완료!");

      // ✅ 상태 업데이트
      setName(name);
      localStorage.setItem("userName", name);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleUpdate}>
      <FormInput
        label="이름"
        value={name}
        type="text"
        name="name"
        onChange={handleChange}
        error={errors.name} // 에러 메시지 전달
      />
      <Button>수정하기</Button>
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

export default UpdateProfile;
