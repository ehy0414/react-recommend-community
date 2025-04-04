import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
`;

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

const InputField = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-family: "Gamja Flower";
`;

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
`;

const FileInput = styled.input`
  margin-bottom: 1.5rem;
  font-size: 17px;
`;

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

function EditPost({ data }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUser({
        id: storedUserId,
        name: localStorage.getItem('userName'),
      });
      window.scrollTo(0, 0);
    } else {
      alert("로그인 후 작성이 가능합니다!");
      navigate('/user/login');
    }
  }, [navigate]);

  // 🔁 기존 데이터로 초기화
  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      setContent(data.content || '');
      setCategory(data.category || '');
      setImage(data.image || null); // base64 string
    }
  }, [data]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // 새로 업로드한 파일이면 File 객체
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = '제목을 입력해주세요.';
    if (!content.trim()) newErrors.content = '내용을 입력해주세요.';
    if (!category) newErrors.category = '카테고리를 선택해주세요.';
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

    const patchData = {
      title,
      content,
      category,
      userId: user.id,
      season: data.season,
    };

    const submitPatch = async () => {
      try {
        await api.patch(`/${data.season}/${data.id}`, patchData, {
          headers: { 'Content-Type': 'application/json' },
        });
        alert("게시글이 수정되었습니다.");
        navigate(`/${data.season}/nature`);
      } catch (err) {
        console.error('수정 실패:', err);
      }
    };

    if (typeof image === 'string') {
      patchData.image = image; // 기존 base64 이미지
      submitPatch();
    } else if (image instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        patchData.image = reader.result;
        submitPatch();
      };
    } else {
      alert("이미지가 올바르지 않습니다.");
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
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
        <FileInput type="file" accept="image/*" onChange={handleImageChange} />
        <SubmitButton type="submit">수정 완료</SubmitButton>
      </FormWrapper>
    </Container>
  );
}

export default EditPost;
