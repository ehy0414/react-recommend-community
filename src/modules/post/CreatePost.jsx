import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';

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

// 카테고리 선택 Select 스타일
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
  background-color: #fff;
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

function CreatePost({ season }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null); // 로그인된 사용자 정보

  const navigate = useNavigate();

  // 로그인 여부 확인 (로컬스토리지에서 사용자 정보 가져오기)
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUser({
        id: storedUserId,
        name: localStorage.getItem('userName'), // 사용자 이름도 가져오기
      });
    } else {
      alert("로그인 후 작성이 가능합니다!");
      navigate('/user/login'); // 로그인 안 되어 있으면 홈으로 이동
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // 빈칸 입력 시 에러 출력
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

    if (!user) {
      alert('로그인이 필요합니다.');
      navigate("/user/login");
      return;
    }

    // 이미지를 base64로 변환하여 json-server에 저장
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const postData = {
        id: Date.now(),
        title,
        content,
        category,
        image: base64Image,
        userId: user.id, // 로그인한 사용자 ID를 외래키로 저장
        season: `${season}`
      };

      try {
        await api.post(`/${season}`, postData, {
          headers: { 'Content-Type': 'application/json' },
        });
        alert('게시글이 성공적으로 등록되었습니다.');
        navigate(`/${season}/nature`);
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
