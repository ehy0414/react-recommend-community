import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 전체 페이지 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
`;

// 폼 박스
const FormWrapper = styled.form`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  width: 700px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

// 카테고리 선택을 위한 Select 스타일
const CategorySelect = styled.select`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-family: "Gamja Flower";
  outline: none;
`;

// 입력 필드 스타일 (공통)
const InputField = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: # fff;
  color: #000;
  font-size: 1.2rem;
  font-family: "Gamja Flower";
  &::placeholder {
    color: #bbb;
  }
`;

// 텍스트영역 스타일
const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-family: "Gamja Flower";
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: #bbb;
  }
`;

// 파일 입력
const FileInput = styled.input`
  margin-bottom: 1.5rem;
  font-size: 17px;
`;

// 제출 버튼
const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 17px;
  font-family: "Gamja Flower";
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = '제목을 입력해주세요.';
    }
    if (!content.trim()) {
      newErrors.content = '내용을 입력해주세요.';
    }
    if (!category) {
      newErrors.category = '카테고리를 선택해주세요.';
    }
    if (!image) {
      newErrors.image = '이미지를 업로드해주세요.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }

    // 이미지를 base64로 변환하여 json-server에 저장
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const postData = {
        title,
        content,
        category,
        image: base64Image,
      };

      try {
        await axios.post('http://localhost:8000/spring', postData, {
          headers: { 'Content-Type': 'application/json' },
        });
        alert('게시글이 성공적으로 등록되었습니다.');
        navigate("/spring");
      } catch (error) {
        console.error('게시글 등록 실패:', error);
      }
    };
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
      {/* 카테고리 선택을 위한 select 컴포넌트 */}
      <CategorySelect value={category} onChange={handleCategoryChange} required>
          <option value="" disabled>카테고리를 선택하세요</option>
          <option value="nature">자연</option>
          <option value="break">휴식</option>
          <option value="history">역사</option>
        </CategorySelect>
        <InputField
          type="text"
          placeholder="제목을 입력하세요.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="내용을 입력하세요.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <FileInput type="file" accept="image/*" onChange={handleImageChange} required />
        <SubmitButton type="submit">게시글 등록</SubmitButton>
      </FormWrapper>
    </Container>
  );
}

export default CreatePost;
