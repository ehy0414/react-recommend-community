import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../../services/axios";
import { useNavigate } from "react-router-dom";

const CommentItem = ({commentId, userName, userComment, commentUserId, userId}) => {
    const navigate = useNavigate();

    const deleteComment = async() => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            try {
                await api.delete(`/comments/${commentId}`);
                alert("삭제되었습니다");
                navigate(-1);
            } 
            catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <Wrapper>
            <CommentItems>
                <strong>{userName}</strong>: {userComment}
                {userId === commentUserId && (
                    <DeleteButton onClick={deleteComment}>삭제</DeleteButton>
                )}
            </CommentItems>
        </Wrapper>        
    )
}

// 전체 Wrapper
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CommentItems = styled.li`
  margin-bottom: 10px;
  font-family: "Gamja Flower";
  font-size: 18px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 2px 10px;
  font-size: 14px;
  font-family: "Gamja Flower";
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: red;

  }
`;

export default CommentItem;