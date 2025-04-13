import { useEffect, useState } from "react";
import api from "../../../services/axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "./CommentList";

const CommentInput = (props) => {
    const [commentInput, setCommentInput] = useState("");
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState(null); // 세션에서 가져온 이름
    const [userId, setUserId] = useState(null); // 세션에서 가져온 사용자 ID
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        setUserName(localStorage.getItem("userName"));
        setUserId(localStorage.getItem("userId"));
        getComments();
      }, []);

      console.log(comments)

    // 댓글 불러오기
    const getComments = async () => {
        try {
        const res = await api.get(`/comments?postId=${id}`);
        setComments(res.data);
        } catch (err) {
        console.error("댓글 불러오기 실패:", err);
        }
    };

    // 댓글 등록
    const createComment = async () => {

      //로그인 여부 확인
      if (!userId) {
        alert("로그인이 필요합니다.");
        navigate("/user/login");
        return;
      }

      if (!commentInput.trim()) return;

      try {
        await api.post(`/comments`, {
            id: Date.now().toString(),
            postId: props.data.id,
            userId,
            userName,
            content: commentInput,
        });
        setCommentInput("");
        alert("댓글이 등록되었습니다");
        getComments(); // 등록 후 댓글 다시 불러오기
        } 
      catch (err) {
        console.error("댓글 등록 실패:", err);
        }
    };

    return (
        <Wrapper>
            {/* 댓글 입력창 */}
            <CommentInputContainer>
            <CommentInputField
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="댓글을 입력하세요"
            />
            <SubmitButton onClick={createComment}>등록</SubmitButton>
            </CommentInputContainer>

            {/* 댓글 목록 */}
            <CommentList data={comments} />
        </Wrapper>
    )
}

// 전체 Wrapper
const Wrapper = styled.div`
  width: 100%;
  margin-top: -5%;
  bottom: 0;
`;

const CommentInputContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

const CommentInputField = styled.input`
  padding: 10px;
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 20px;
  font-family: "Gamja Flower";
  font-size: 18px;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  font-family: "Gamja Flower";
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  &:hover {
    background-color: #f2f2f2;
  }
`;



const CommentItem = styled.li`
  margin-bottom: 10px;
  font-family: "Gamja Flower";
  font-size: 18px;
`;

export default CommentInput;